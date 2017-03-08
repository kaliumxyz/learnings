/*{
  'blackDragons' [
    { name: 'Sparky', race: 'black',  scales: 100 },
    { name: 'Spyro',  race: 'black',  scales: 102 },
    { name: 'Draco',  race: 'black',  scales: 92 }
  ],
  'goldDragons': [
    { name: 'Sky',    race: 'gold',   scales: 104 },
    { name: 'Frigs',  race: 'carp',   scales: 203 }
  ]
}*/

//import fs from 'fs';
var fs = require("fs")

var output = fs.readFileSync('Dragons.txt','utf8')
  .trim()
  .split('\n')
  .map(_ => _.split('\s'))
  .reduce((dragons,_) => {
    dragons[_[0]] = dragons[_[0]] || []
    dragons[_[0]].push({
      name: _[1],
      race: _[2],
      scales: _[3]
    })
    return dragons
  }, {})

console.log(JSON.stringify(output,null,2))
