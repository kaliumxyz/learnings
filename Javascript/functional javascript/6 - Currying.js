// Als function.
let dragon = (name, race, scales) =>
  name + ' is a ' +
  race + ' dragon that has ' +
  scales + ' scales'

console.log(dragon("sparky", "carp", 108))

// Als curry.
dragon =
  name =>
    race =>
      scales =>
        name + ' is a ' +
        race + ' dragon that has ' +
        scales + ' scales'

console.log(dragon("spyro")("black")(102))
