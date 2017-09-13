"use strict"
const net = require('net')

const server = net.createServer(c => {
	console.log('client connected')
	c.pipe(process.stdout)
	process.stdin.pipe(c)
}).listen(4545)