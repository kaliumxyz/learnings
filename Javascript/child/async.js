"use strict"
const child = require('child_process')

function main() {
	console.log("1")

	child.exec(`echo "test" & swapjfdsakl`, console.log)
		.once('close', (...arg) => console.log("closed:",...arg))
		.once('exit', (...arg) => console.log("exit:",...arg))
		.once('error', (...arg) => console.error("error:",...arg))
		.stdout.pipe(process.stdout)

	console.log("2")
}
main()