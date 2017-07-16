const stream = require('stream')

let s = stream.Stream

let ws = new s()
ws.writable - true
ws.write = data => {console.log(`input = ${data}`)}
ws.end = data => {console.log(`end = ${data}`)}

process.stdin.pipe(ws)