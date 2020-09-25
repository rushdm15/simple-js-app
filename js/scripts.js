//[name, height, types]
let pokemonList = [
{ name : "Bulbasaur", height : 7, types : ['grass', 'poison'] },
{ name : "Pikachu", height : 2, types : ['electricity'] },
{ name : "Squirtle", height : 3, types : ['grass', 'water'] }
];

for (let i=0; i < pokemonList.length; i++){
  if (pokemonList[i].height <=6)
  console.log(pokemonList[i].name)
    document.write(pokemonList[0].name, 'height')

  else if (pokemonList[i].height >6)
  console.log(pokemonList[i].name + "Wow, that's big!")
    document.write(pokemonList[1].name, 'height')

    document.write(pokemonList[2].name, 'height')
}
