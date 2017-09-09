"use strict"
const net = require('net')


// connecting to my friendly netcat instance
let socket = net.connect({port: , host: ""})

socket.pipe(process.stdout)
process.stdin.pipe(socket)
