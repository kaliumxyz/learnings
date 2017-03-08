let fs = require('fs')
// horrible
function loadTextFile(uri){
  return new Promise((resolve,reject) => {
    var file = fs.readFileSync(uri,'utf8')
    file.onload = function() {
      resolve(file)
    }
    file.onError = function() {
      reject(new Error(msg))
    }
  })
}
console.log(loadTextFile('Dragons.txt'))

let addText = (src)=>{
  let textElement =
    document.createElement("p")
  textElement.html = src
  document.body.appendChild(textElement)
}

addText('Dragons.txt')
