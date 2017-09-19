#!/usr/bin/env node
"use strict"
const net = require('net')

const server = net.createServer(c => {
	console.log('client connected', c.remoteFamily,  c.remotePort, c.remoteAddress)
	c.pipe(process.stdout)
	process.stdin.pipe(c)
	c.on('error', ev => handleError(ev))
}).listen(4545)

server.on('error', error => {
	console.error("internal error:")
	switch(error.code) {
		case("ECONNRESET"):
		console.log("diconnected")
		break
		case("EADDRINUSE"):
		console.log("The port is in use.")
		break
		default:
		console.error(error.code)
	}
})

function handleError(error){
	switch(error.code) {
		case("ECONNRESET"):
		console.log("client diconnected")
		break
		default:
		console.error(error.code)
	}
}