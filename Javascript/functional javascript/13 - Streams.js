// Libs can always be const AFAK.
const fs = require('fs')
const highland = require('highland')
highland(fs.createReadStream('Dragons.txt', 'utf-8'))
  .split()
  .map(x=>x)
  .each(console.log)
