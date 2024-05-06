/**
 * Використовуємо https://pokeapi.co/ та створимо сторінку перегляду покемонів
 */
const BASE_URL = 'https://pokeapi.co/api/v2/';

function fetchPokemon(pokemonId) {
  return fetch(`${BASE_URL}pokemon/${pokemonId}`).then(response => {
    if (!response.ok) {
      throw new Error(
        'Упс, щось пішло не так і ми не знайшли вашого покемона!'
      );
    }

    return response.json();
  });
}

function onSearch(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const searchQuery = form.elements.query.value;
  // console.log(searchQuery);

  loader.classList.remove('is-hidden');
  // Робимо запит за покемоном
  fetchPokemon(searchQuery)
    .then(renderPokemonCard)
    .catch(onFetchError)
    .finally(() => {
      form.reset();
      loader.classList.add('is-hidden');
    });

  // Ver. 1
  // fetchPokemon(searchQuery)
  //   .then(pokemon => {
  //     renderPokemonCard(pokemon);
  //   })
  //   .catch(error => {
  //     // console.log(error);
  //     onFetchError(error);
  //   })
  //   .finally(() => {
  //     form.reset();
  //   });
  // form.reset();
}

const cardContainer = document.querySelector('.card-container');
const searchForm = document.querySelector('.search-form');
const loader = document.querySelector('.loader');

searchForm.addEventListener('submit', onSearch);

function renderPokemonCard({ name, sprites, weight, height, abilities }) {
  // console.log(abilities);
  const abilityListItems = abilities
    .map(({ ability }) => `<li class="list-group-item">${ability.name}</li>`)
    .join('');

  const markup = `<div class="card">
   <div class="card-img-top">
     <img src="${sprites.front_default}" alt="${name}">
   </div>
   <div class="card-body">
     <h2 class="card-title">Ім'я: ${name}</h2>
     <p class="card-text">Вага: ${weight}</p>
     <p class="card-text">Зростання: ${height}</p>

     <p class="card-text"><b>Уміння</b></p>
     <ul class="list-group">${abilityListItems}</ul>
   </div>
</div>`;
  cardContainer.innerHTML = markup;
}

function onFetchError(error) {
  alert(error);
}
