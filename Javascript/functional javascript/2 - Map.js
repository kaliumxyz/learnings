var dragons = [
  { name: 'Sparky', race: 'black' },
  { name: 'Sky',    race: 'gold' },
  { name: 'Spyro',  race: 'black' },
  { name: 'Draco',  race: 'black' },
  { name: 'Frigs',  race: 'carp' }
]

// This returns the name and species of the dragons.
var names = dragons.map(function(dragons){
  return dragons.name + " is a " + dragons.race;
})

console.log(names);

// The same but with an arrow function.
var names = dragons.map((dragons) => dragons.name + " is a " + dragons.race)

console.log(names);
