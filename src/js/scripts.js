let pokemonRepository = (function() {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  //This function adds a list item to the list for each pokemon
  function addListItem(pokemon) {
    let list = $('.pokemon-list');
    let listItem = $('<li></li>');
    let button = $('<button>' + pokemon.name + '</button>');
    button.addClass('btn-primary');
    button.attr('data-toggle', 'modal'); //this works with bootstrap to open the modal when the pokemon name button is clicked
    button.attr('data-target', '#pokemonModal');
    listItem.append(button);
    list.append(listItem);

    //This listens for the user to click on one of the pokemon in the list, then runs the showDetails() function
    button.on('click', function(event) {
      showDetails(pokemon);
    });
  }

  function loadList() {
    return fetch(apiUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        json.results.forEach(function(item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
        });
      })
      .catch(function(e) {
        console.error(e);
      });
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(details) {
        // Now we add the details to the item
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      })
      .catch(function(e) {
        console.error(e);
      });
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function() {
      showModal(pokemon);
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();

//END OF IIFE ---------------------------------------------------

// console.log(pokemonRepository.getAll());
// pokemonRepository.add({ name: 'Charmander', height: '10', types: ['fire'] });
// // console.log(pokemonRepository.add( ' Charmander' ));
// console.log(pokemonRepository.getAll());

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

//MODAL ====================================================

function showModal(pokemon) {
  let modalBody = $('.modal-body');
  let modalTitle = $('.modal-title');

  modalTitle.empty(); //empties anything that was previously stored in these variables
  modalBody.empty();

  //add the new content into the new "modal" div (Name, height, and image content)
  //Name element
  let nameElement = $('<h1>' + pokemon.name + '</h1>');

  //Height content
  let heightElement = $('<p>' + 'Height: ' + pokemon.height + '</p>');

  //Image content
  let imageElement = $('<img class="modal-img" style="width:50%">');
  imageElement.attr('src', pokemon.imageUrl);

  //appends the children to their parent containers
  modalTitle.append(nameElement);
  modalBody.append(imageElement);
  modalBody.append(heightElement);
}

//FORM VALIDATION  =========================================

// function validateEmail() {
//   let value = emailInput.value;
//   let hasAtSign = value.IndexOf('@') > -1;
//   let hasDot = value.indexOf('.') > -1;
//   return value && hasAtSign && hasDot;
// }
//
// function validatePassword() {
//   let value = passwordInput.value;
//   return value && value.length >= 8;
// }
//
// function showErrorMessage(input, message) {
//   let container = input.parentElement; //The .input-wrapper
//
//   //Remove an existing error
//   let error = container.querySelector('.error-message');
//   if (error) {
//     container.removeChild(error);
//   }
//
//   //Now add the error message if the message isn't empty
//   if (message) {
//     let error = document.createElement('div');
//     error.classList.add('error-message');
//     error.innerText = message;
//     container.appendChild(error);
//   }
// }
//
// function validateEmail() {
//   let value = emailInput.value;
//
//   if (!value) {
//     showErrorMessage(emailInput, 'Email is a required field.');
//     return false;
//   }
//
//   if (value.indexOf('@') ===-1) {
//       showErrorMessage(emailInput, 'You must enter a valid email address.');
//       return false;
//   }
//
//   showErrorMessage(emailInput, null);
//   return true;
// }
//
// function validatePassword() {
//   let value = passwordInput.value;
//
//   if (!value)  {
//     showErrorMessage(passwordInput, 'Password is a required field.');
//     return false;
//   }
//
//   if (value.length < 8) {
//     showErrorMessage(passwordInput, 'The password needs to be at least 8 characters long.');
//     return false;
//   }
//
//   showErrorMessage(passwordInput, null);
//   return true;
// }
//
// function validateForm() {
//   let isValidEmail = validateEmail();
//   let isValidPassword = validatePassword();
//   return isValidEmail && isValidPassword;
// }
//
// emailInput.addEventListener('input', validateEmail);
// passwordInput.addEventListener('input', validatePassword);

// DIALOG ==============================================
//
// document.querySelector('#show-dialog').addEventListener('click', () => {
//   showDialog('Confirm action', 'Are you sure you want to do this?');
//   then(function() {
//     alert('confirmed!');
//   }, () => {
//     alert('not confirmed');
//   });
// });
//
// function showDialog(title, text) {
//   showModal(title, text);
//
//   // We have defined modalContainer here
//   let modalContainer = document.querySelector('#modal-container');
//
//   // We want to add a confirm and cancel button to the modal
//   let modal = modalContainer.querySelector('.modal');
//
//   let confirmButton = document.createElement('button');
//   confirmButton.classList.add('modal-confirm');
//   confirmButton.innerText = 'Confirm';
//
//   let cancelButton = document.createElement('button');
//   cancelButton.classList.add('modal-cancel');
//   cancelButton.innerText = 'Cancel';
//
//   modal.appendChild(confirmButton);
//   modal.appendChild(cancelButton);
//
//   // We want to focus the confirmButton so that the user can simply press Enter
//   confirmButton.focus();
//
//   // Return a promise that resolves when confirmed, else rejects
//   return new Promise((resolve, reject) => {
//     cancelButton.addEventListener('click', hideModal);
//     confirmButton.addEventListener('click', () => {
//       dialogPromiseReject = null; // Reset this
//       hideModal();
//       resolve();
//     });
//     // This can be used to reject from other functions
//     dialogPromiseReject = reject;
//   });
// };