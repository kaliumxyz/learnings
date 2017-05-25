// object literal
let dragon  = {
	sound: 'woof',
	roar: function() {
		console.log(this.sound)
	}
}

dragon.roar()
let roarFunction = dragon.roar
roarFunction()

