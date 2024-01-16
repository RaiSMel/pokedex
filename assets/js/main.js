import dom from "./dom.js";
import createPokemon from "./pokemon.js";
import api from "./request-api.js";

const buttonLoadMore = document.getElementById('pc__loadMore');
const modalClose = document.querySelector('.modal__close');
const limit = 20;
let offset = 0;

const createPokemons = () => {

api.getPokemons(offset, limit)
    .then(pokemons => pokemons.map(createPokemon))
    .then(pokemon => pokemon.map(dom.createPokemonLi))
    .then(pokemonLi => pokemonLi.map(poke => dom.pokeAppend(poke)))
}

createPokemons(offset, limit);

buttonLoadMore.addEventListener('click', () => {
    offset += limit;
    createPokemons(offset, limit);
})

modalClose.addEventListener('click', dom.closeModal)

export default createPokemons;