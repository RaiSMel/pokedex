import apiSetings from './request-api.js';
import { createPokemonModal } from "./pokemon.js"

const dom = {};

const modalPokemon = (res) => {
    const maxPoints = [255, 190,230, 194, 230, 180]
    const modal = document.querySelector('.modal');
    const hp = document.querySelector('.modal__name');
    const id = document.querySelector('.modal__id');
    const modalImg = document.querySelector('.modal__container-picture img');
    const types = document.querySelector('.modal__container-types');
    const stats = document.querySelectorAll('.modal__stats');

    modal.classList.remove(modal.classList.item(1));
    modal.classList.add(res.type);
    hp.innerHTML = `${res.name}` ;
    id.innerHTML = `${res.id}` ;
    modalImg.src = `${res.imgUrl}`;
    types.innerHTML = (res.types.map(type => `<span class="modal__type ${res.type}">${type}</span>` )).join('');
    let count = 0;
    stats.forEach(stats => {
        stats.querySelector(".modal__point").innerHTML = res.stats[count];
        stats.querySelector(".modal__percentage--filling").style.width = `${(((100*res.stats[count])/maxPoints[count])/100)*140}px`;

        count++;
    })

}

const createModal = (res) => {
    modalPokemon(createPokemonModal(res))
    const modal = document.querySelector('#container-modal');
    modal.style = `display: flex;
                   top: ${window.scrollY}px;`
    document.body.style.overflow = "hidden";
}

dom.closeModal = () => {
    const modal = document.querySelector('#container-modal');
    modal.style = 'display: none;';
    document.body.style.overflow = "auto";
}


dom.createPokemonLi = (pokemon) => {
    const pokemonLi = document.createElement("li");
    pokemonLi.classList.add("pc__pokemon");
    pokemonLi.classList.add(pokemon.type);
    pokemonLi.setAttribute('data-id', pokemon.id)
    pokemonLi.innerHTML = `
    <div class="pc__card">
    <header class="pc__headercontainer">
        <h2 class="pc__name">${pokemon.name}</h2>
        <p class="pc__id">#${pokemon.id}</p>
    </header>
    <div class="pc__types">
            ${pokemon.types.map(pokeType => `
                <span class="pc__type ${pokeType}">
                    <p class="pc__type--text">${pokeType}</p>
                </span>`).join('')}
    </div>
    <img src="${pokemon.imgUrl}" alt="pokemon ${pokemon.name}" class="pc__img">
    `;
    return pokemonLi;
}

let teste = (e) => {
    let pokemon = e.target.closest('[data-id]').dataset.id;
    let pokemonDetails = {
        url: `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
    }
    apiSetings.getPokemonDetails(pokemonDetails)
        .then(res => createModal(res))
}

dom.pokeAppend = (pokemon) => {
    document.querySelector("#pc__list").appendChild(pokemon);
    pokemon.onclick = teste;
}



export default dom;