const fetch = require('node-fetch')
const util = require('util')
const parseXML = util.promisify(require('xml2js').parseString)
const {GraphQLObjectType, GraphQLSchema, GraphQLint} = require('graphql')

// const x = fetch(
// 	'https://www.goodreads.com/author/show.xml?id=4432&key=risKm8wwXsIcyEiTktvA'
// )
	// .then(response => response.text())
	// .then(parseXML)
	
const AuthorType = new GraphQLObjectType({
	name: 'Author',
	description: '...',
	
	fields: _ => ({

	})
	
})
	
module.exports = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'Query',
		description: '...',
		
		fields: _ => ({
			author: {
				type: AuthorType,
				args: {
					id: {
						type: GraphQLint
					}
				}
			}

		})
	})
})