// Bacon is our delicious streaming lib. (well its named after kevin bacon)
const Bacon = require('baconjs')

// Creating a bus.
const stream = new Bacon.Bus()
// A bus is the most basic kind of stream in baconjs.


stream
  .map(word => word.toUpperCase())
  // We use onValue, because its awesome.
  .onValue(word => console.log(word))

// Pushing with cool names for dragons.
stream.push('sparky')
stream.push('sparks')
