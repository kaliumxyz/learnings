var dragons = [
  { name: 'Sparky', race: 'black',  scales: 100 },
  { name: 'Sky',    race: 'gold',   scales: 104 },
  { name: 'Spyro',  race: 'black',  scales: 102 },
  { name: 'Draco',  race: 'black',  scales: 92 },
  { name: 'Frigs',  race: 'carp',   scales: 203 }
]

// A reduce function applied to count the total amount of scales.
var totalScales = dragons.reduce(function(sum, dragons){
  // Logging to show the internal workings.
  console.log("sub-total: " + sum + " at dragon: " + dragons.name);
  return sum + dragons.scales;
}, 0);

// A reduced version of the former.
var totalScales = dragons.reduce((_, dragons)=> _ + dragons.scales, 0);

console.log(totalScales);
