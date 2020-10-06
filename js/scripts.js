//[name, height, types]
let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

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

    function showDetails(item) {
    loadDetails(item).then(function () {
        console.log(item)
    });
  }

  window.addEventListener('keydown', (e) => {
    let modalContainer = document.querySelector('#modal-container');
    if (e.key === 'Escape' && modalContainer.classList.containes('is-visible')) {
      hideModal();
    }
  });

  modalContainer.addEventListener('click', (e) => {
    // Since this is also triggered when clicking INSIDE the modal
    // We only want to close if the user clicks directly on the overlay
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: 'Charmander', height: '10', types: ['fire'] });
// console.log(pokemonRepository.add( ' Charmander' ));
console.log(pokemonRepository.getAll());

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem (pokemon);
  });
});

function validateEmail() {
  let value = emailInput.value;
  let hasAtSign = value.IndexOf('@') > -1;
  let hasDot = value.indexOf('.') > -1;
  return value && hasAtSign && hasDot;
}

function validatePassword() {
  let value = passwordInput.value;
  return value && value.length >= 8;
}

function showErrorMessage(input, message) {
  let container = input.parentElement; //The .input-wrapper

  //Remove an existing error
  let error = container.querySelector('.error-message');
  if (error) {
    container.removeChild(error);
  }

  //Now add the error message if the message isn't empty
  if (message) {
    let error = document.createElement('div');
    error.classList.add('error-message');
    error.innerText = message;
    container.appendChild(error);
  }
}

function validateEmail() {
  let value = emailInput.value;

  if (!value) {
    showErrorMessage(emailInput, 'Email is a required field.');
    return false;
  }

  if (value.indexOf('@') ===-1) {
      showErrorMessage(emailInput, 'You must enter a valid email address.');
      return false;
  }

  showErrorMessage(emailInput, null);
  return true;
}

function validatePassword() {
  let value = passwordInput.value;

  if (!value)  {
    showErrorMessage(passwordInput, 'Password is a required field.');
    return false;
  }

  if (value.length < 8) {
    showErrorMessage(passwordInput, 'The password needs to be at least 8 characters long.');
    return false;
  }

  showErrorMessage(passwordInput, null);
  return true;
}

function validateForm() {
  let isValidEmail = validateEmail();
  let isValidPassword = validatePassword();
  return isValidEmail && isValidPassword;
}

emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);

function showModal() {
  let modalContainer = document.querySelector('#modal-container');
  modalContainer.classList.add('is-visible');
}

document.querySelector('#show-modal').addEventListener('click', () => {
  showModal();
});

function showModal(title, text) {
  let modalContainer = document.querySelector('#modal-container');

  // Clear all existing modal content
  modalContainer.innerHTML = '';

  let modal = document.createElement('div');
  modal.classList.add('modal');

  // Add the new modal content
  let closeButtonElement = document.createElement('button');
  closeButtonElement.classList.add('modal-close');
  closeButtonElement.innerText = 'Close';

  let titleElement = document.createElement('h1');
  titleElement.innerText = title;

  let contentElement = document.createElement('p');
  contentElement.innerText = text;

  modal.appendChild(closeButtonElement);
  modal.appendChild(titleElement);
  modal.appendChild(contentElement);
  modalContainer.appendChild(modal);

  modalContainer.classList.add('is-visible');
}

document.querySelector('#show-modal').addEventListener('click', () => {
  showModal('Modal title', 'This is the modal content!');
});


function hideModal() {
  let modalContainer = document.querySelector('#modal-container');
  modalContainer.classList.remove('is-visible');
}

let closeButtonElement = document.createElement('button');
closeButtonElement.classList.add('modal-close');
closeButtonElement.innerText = 'Close';
closeButtonElement.addEventListener('click', hideModal);
