'use strict'

const fetch = require('node-fetch')
const util = require('util')
const parseXML = util.promisify(require('xml2js').parseString)
const api = require('./.env.json').api
const DataLoader = require('dataloader')
const {
	GraphQLObjectType,
	GraphQLSchema,
	GraphQLInt,
	GraphQLString,
	GraphQLList
} = require('graphql')

const BookType = new GraphQLObjectType({
	name: 'book',
	description: '...',
	fields: () => ({
		title: {
			type: GraphQLString,
			resolve: item => item.title[0]
		},
		isbn: {
			type: GraphQLString,
			resolve: item => item.isbn[0]
		},
		authors: {
			type: new GraphQLList(AuthorType),
			resolve: item => {
				const authorElements = item.authors[0].author
				const ids = authorElements.map(el => el.id[0])
				return authorLoader.loadMany(ids)
			}
		},
		author: {
			type: GraphQLString,
			resolve: item => item.authors[0].author[0].name[0]
		}
	})
})

const authorLoader = new DataLoader(keys => {
	return Promise.all(keys.map(id => fetch(
		`https://www.goodreads.com/author/show.xml?id=${id}&key=${api.key}`
	)
		.then(response => response.text())
		.then(parseXML)
	))
}
)

const AuthorType = new GraphQLObjectType({
	name: 'Author',
	description: '...',

	fields: () => ({
		name: {
			type: GraphQLString,
			resolve: xml =>
				xml.GoodreadsResponse.author[0].name[0]
		},
		books: {
			type: new GraphQLList(BookType),
			resolve: xml =>
				xml.GoodreadsResponse.author[0].books[0].book
		}
	})

})

module.exports = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'Query',
		description: '...',

		fields: () => ({
			author: {
				type: AuthorType,
				args: {
					id: { type: GraphQLInt }
				},
				resolve: (root, args) => authorLoader.load(args.id)
			}
		})
	})
})
