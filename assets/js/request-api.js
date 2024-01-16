const apiSettings = {}; // object of the function

apiSettings.getPokemonDetails = (pokemon) => {
    return fetch(pokemon.url)   // make the request to the server
        .then(detailsResponse => detailsResponse.json()) // get the response and transform to json
}

apiSettings.getPokemons = (offset, limit) => {

    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`

    return fetch(url) // make the request to the server
        .then(response => response.json()) // get the response and transform to json
        .then(pokemons => pokemons.results) // get the request results  
        .then(pokemon => pokemon.map(apiSettings.getPokemonDetails)) // map all the pokemons and use as loop to make another request
        .then(pokemonsResponse => Promise.all(pokemonsResponse)) // wait until all the resquest results come back as a array of jsons
}

export default apiSettings;