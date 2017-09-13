#!/usr/bin/env node
"use strict"
const net = require('net')
const settings = {port: 4545, host: "localhost"}

let socket = net.connect(settings)
let tries = 0

socket.pipe(process.stdout)

socket.on("close", ev => {
	setTimeout(reconnect, 500)
})

socket.on("error", ev => handleError(ev))

socket.on("connect", ev => {
	console.log("connected")
	process.stdin.pipe(socket)
	tries = 0
})

function reconnect(){
	if(tries < 5) {
		console.log("reconnecting")
		socket.connect(settings)
		tries++
	} else {
		console.log("server is down", "retrying in 1 minute")
		setTimeout(reconnect, 60000)
		tries = 0
	}
}

function handleError(error){
	switch(error.code) {
		case("ECONNRESET"):
			console.log("connection lost")
		break
		case("ECONNREFUSED"):
			console.error("connection refused")
		break
		default:
		console.error(error.code)
	}
}