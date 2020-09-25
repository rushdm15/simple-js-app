//[name, height, types]
let pokemonList = [
{ name : "Bulbasaur", height : 7, types : ['grass', 'poison'] },
{ name : "Pikachu", height : 2, types : ['electricity'] },
{ name : "Squirtle", height : 3, types : ['grass', 'water'] }
];

// document.write(pokemonList[0].name, ' (height: ' + pokemonList[0].height + ')' + '<br>');
// document.write(pokemonList[1].name, ' (height: ' + pokemonList[1].height + ')' + '<br>');
// document.write(pokemonList[2].name, ' (height: ' + pokemonList[2].height + ')' + '<br>');

for (let i=0; i < pokemonList.length; i++){
  if (pokemonList[i].height <=6){
  document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')' + '<br>');
  }

  else if (pokemonList[i].height >6){
  document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')' + " - Wow, that's big!" + '<br>');
  }
}





// for (let i=0; i < pokemonList.length; i++){
//   if (pokemonList[i].height <=6){
//   console.log(pokemonList[i].name)
//     document.write(pokemonList[0].name, 'height')
//
//   }else if (pokemonList[i].height >6){
//   console.log(pokemonList[i].name + "Wow, that's big!")
//     document.write(pokemonList[1].name, 'height')
//
//     }document.write(pokemonList[2].name, 'height')
// }
