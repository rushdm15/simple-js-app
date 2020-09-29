//[name, height, types]
let pokemonList = [
{ name : "Bulbasaur", height : 7, types : ['grass', 'poison'] },
{ name : "Pikachu", height : 2, types : ['electricity'] },
{ name : "Squirtle", height : 3, types : ['grass', 'water'] }
];

// let pokemonRepository = (function () {
//   let pokemonList = [];
//
//   return {
//     add: function(pokemon) {
//       pokemonList.push(pokemon);
//     }
//   };
// })();
// pokemonRepository.add({ name: 'Charmander' });


let pokemonRepository = (function () {
  let pokemonList = [];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
  };
})();


console.log(pokemonRepository.getAll() );
pokemonRepository.add({ name: 'Charmander' });
console.log(pokemonRepository.add( ' Charmander' ));

pokemonList.forEach(function(pokemon) {
  write(pokemon.name + ' is size ' + pokemon.height + ' and is the type ' + pokemon.types)
})




// for (let i=0; i < pokemonList.length; i++){
//   if (pokemonList[i].height <=6){
//   document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')' + '<br>');
//   }
//
//   else if (pokemonList[i].height >6){
//   document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')' + " - Wow, that's big!" + '<br>');
//   }
// }


// document.write(pokemonList[0].name, ' (height: ' + pokemonList[0].height + ')' + '<br>');
// document.write(pokemonList[1].name, ' (height: ' + pokemonList[1].height + ')' + '<br>');
// document.write(pokemonList[2].name, ' (height: ' + pokemonList[2].height + ')' + '<br>');

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
