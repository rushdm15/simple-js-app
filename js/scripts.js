//[name, height, types]
let pokemonRepository = (function () {
  let repository = [
  {
  name : "Bulbasaur",
  height : 7,
  types : ['grass', 'poison']
},
{
  name : "Pikachu",
  height : 2,
  types : ['electricity']
 },
{
  name : "Squirtle",
  height : 3,
  types : ['grass', 'water']
}
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

  function add(pokemon) {
    repository.push(pokemon);
  }

  function getAll() {
    return repository;
  }

  function showDetails(pokemon) {
  console.log(pokemon)
  }

  function addListItem (pokemon) {
    let pokemonlist = document.querySelector('.pokemon-list');
    let listpokemon = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonlist.appendChild(listpokemon);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails
  };
})();


console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: 'Charmander', height: '10', types: ['fire'] });
// console.log(pokemonRepository.add( ' Charmander' ));
console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem (pokemon);
});

// pokemonList.forEach(function(pokemon) {
//   // document.write(pokemon.name + ' is size ' + pokemon.height + ' and is the type ' + pokemon.types + '<br>')
//   document.querySelector('ul');
// })



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
