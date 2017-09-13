"use strict"
const net = require('net')

// connecting to my friendly netcat instance
let socket = net.connect({port: 4545, host: "localhost"})

socket.pipe(process.stdout)
process.stdin.pipe(socket)
