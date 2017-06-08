i = 10000
class pew {
	constructor (i) {
		setTimeout(_=>{
			delete this
			console.log('pew' + i)
	}, 20000)
	}
}
while(i --> 0){
	new pew(i)

}