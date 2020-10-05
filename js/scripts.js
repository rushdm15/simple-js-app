//[name, height, types]
let pokemonRepository = (function () {
  let pokemonList = [];
  let apiURL = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

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
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  function showDetails(pokemon) {
  console.log(pokemon);
  }

  function addListItem (pokemon) {
    let pokemonlist = document.querySelector('.pokemon-list');
    let listpokemon = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonlist.appendChild(listpokemon);
    button.addEventListener('click', function (showDetails) {
        console.log(pokemon);
    });
  }

    function loadList() {
      return fetch(apiUrl).then(function (response) {
        return response.json();
      }).then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
        });
      }).catch(function (e) {
        console.error(e);
      })
    }

      function loadDetails(item) {
         let url = item.detailsUrl;
         return fetch(url).then(function (response) {
           return response.json();
         }).then(function (details) {
           // Now we add the details to the item
           item.imageUrl = details.sprites.front_default;
           item.height = details.height;
           item.types = details.types;
         }).catch(function (e) {
           console.error(e);
         });
       }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails
  };
})();

// let pokemonRepository = (function () {
//   let pokemonList = [];
//   let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
//
//   // Other functions remain here
//   function loadList(){}
//
//   function loadDetails(){}
//
//   function loadList() {
//     return fetch(apiUrl).then(function (response) {
//       return response.json();
//     }).then(function (json) {
//       json.results.forEach(function (item) {
//         let pokemon = {
//           name: item.name,
//           detailsUrl: item.url
//         };
//         add(pokemon);
//       });
//     }).catch(function (e) {
//       console.error(e);
//     })
//   }
//
//   function loadDetails(item) {
//      let url = item.detailsUrl;
//      return fetch(url).then(function (response) {
//        return response.json();
//      }).then(function (details) {
//        // Now we add the details to the item
//        item.imageUrl = details.sprites.front_default;
//        item.height = details.height;
//        item.types = details.types;
//      }).catch(function (e) {
//        console.error(e);
//      });
//    }
//
//   return {
//     add: add,
//     getAll: getAll,
//     loadList: loadList,
//     loadDetails: loadDetails
//   };
// })();


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
