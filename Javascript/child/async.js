"use strict"
const child = require('child_process')

function main() {
	console.log("1")

	child.exec(`echo "test"`)
		.once('close', console.log)
		.once('exit', console.log)
		.stdout.pipe(process.stdout)

	console.log("2")
}
main()