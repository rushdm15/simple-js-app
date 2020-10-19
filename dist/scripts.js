let pokemonRepository = (function() {
  let t = [],
    n = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  function o(n) {
    t.push(n);
  }
  function e(t) {
    let n = t.detailsUrl;
    return fetch(n)
      .then(function(t) {
        return t.json();
      })
      .then(function(n) {
        (t.imageUrl = n.sprites.front_default),
          (t.height = n.height),
          (t.types = n.types);
      })
      .catch(function(t) {
        console.error(t);
      });
  }
  function i(t) {
    e(t).then(function() {
      showModal(t);
    });
  }
  return {
    add: o,
    getAll: function() {
      return t;
    },
    addListItem: function(t) {
      let n = $('.pokemon-list'),
        o = $('<li></li>'),
        e = $('<button>' + t.name + '</button>');
      e.addClass('btn-primary'),
        e.attr('data-toggle', 'modal'),
        e.attr('data-target', '#pokemonModal'),
        o.append(e),
        n.append(o),
        e.on('click', function(n) {
          i(t);
        });
    },
    loadList: function() {
      return fetch(n)
        .then(function(t) {
          return t.json();
        })
        .then(function(t) {
          t.results.forEach(function(t) {
            o({ name: t.name, detailsUrl: t.url });
          });
        })
        .catch(function(t) {
          console.error(t);
        });
    },
    loadDetails: e,
    showDetails: i
  };
})();
function showModal(t) {
  let n = $('.modal-body'),
    o = $('.modal-title');
  o.empty(), n.empty();
  let e = $('<h1>' + t.name + '</h1>'),
    i = $('<p>Height: ' + t.height + '</p>'),
    a = $('<img class="modal-img" style="width:50%">');
  a.attr('src', t.imageUrl), o.append(e), n.append(a), n.append(i);
}
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(t) {
    pokemonRepository.addListItem(t);
  });
});
>>>>>>> master
