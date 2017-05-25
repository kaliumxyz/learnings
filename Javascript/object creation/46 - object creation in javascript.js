function roar() {
	console.log(this)
	_ => console.log(this)
	console.log(this.sound)
}
roar()

let dragon = {
	roar
}

let scaly = {
	sound: 'roar!'
}

Object.setPrototypeOf(scaly, dragon)
scaly.roar()