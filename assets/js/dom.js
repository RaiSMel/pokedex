const dom = {};

dom.createPokemonLi = (pokemon) => {
    const pokemonLi = document.createElement("li");
    pokemonLi.classList.add("pc__pokemon");
    pokemonLi.classList.add(pokemon.type);
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

let teste = () => console.log('a');

dom.pokeAppend = (pokemon) => {
    document.querySelector("#pc__list").appendChild(pokemon);
    pokemon.onclick = teste;
}



export default dom;