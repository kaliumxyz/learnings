import test from "ava"
import {
	graphql,
	GraphQLSchema,
	GraphQLObjectType,
	GraphQLString
} from 'graphql'


test("Simple schema read", async t => {
	const schema = require('./simpleSchema')
	var query = '{ hello }'
	await graphql(schema, query).then(result => {	
	 // Prints
	 // {
	 //   data: { hello: "world" }
	 // }
	 t.truthy(result)
	
	})
})
