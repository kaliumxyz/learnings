const fetch = require('node-fetch')
const util = require('util')
const parseXML = util.promisify(require('xml2js').parseString)
const api = require('./.env.json').api
const {
	GraphQLObjectType,
	GraphQLSchema,
	GraphQLInt,
	GraphQLString,
	GraphQLList
} = require('graphql')

// const x = fetch(
// 	'https://www.goodreads.com/author/show.xml?id=4432&key=risKm8wwXsIcyEiTktvA'
// )
// .then(response => response.text())
// .then(parseXML)

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
		}
	})
})

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
				resolve: (root, args) => fetch(
					`https://www.goodreads.com/author/show.xml?id=${args.id}&key=${api.key}`
				)
					.then(response => response.text())
					.then(parseXML)
			}

		})
	})
})