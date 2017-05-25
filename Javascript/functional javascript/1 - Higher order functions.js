var dragons = [
  { name: 'Sparky', race: 'black' },
  { name: 'Sky',    race: 'gold' },
  { name: 'Spyro',  race: 'black' },
  { name: 'Draco',  race: 'black' },
  { name: 'Frigs',  race: 'carp' }
]

// Variable that gets its value by a higher-order function (filter + callback)
var black = dragons.filter(function(dragons){
  return dragons.race === 'gold';
});

console.log(black);

// isGold together with gold is the unwound version of black.
var isGold = function(dragons){
  return dragons.race === 'gold';
}

var gold = dragons.filter(isGold);

console.log(gold);
