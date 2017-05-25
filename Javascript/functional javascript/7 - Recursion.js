var dragonTypes = [
  { name: 'dragon', parent: null },
  { name: 'sky',    parent: 'dragon' },
  { name: 'black',  parent: 'sky' },
  { name: 'black',  parent: 'dragon' },
  { name: 'gold',   parent: 'sky' },
  { name: 'gold',   parent: 'dragon' },
  { name: 'carp',   parent: 'dragon' }
]

let makeTree =(dragons, parent)=> {
  let node = {}
  dragons
    .filter( _ => _.parent === parent )
    .forEach( _ => node[_.name] =
      makeTree(dragons, _.name))
  return node
}

console.log(
  JSON.stringify(makeTree(dragonTypes, null), null, 2)
)
