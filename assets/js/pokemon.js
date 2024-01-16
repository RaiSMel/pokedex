class Pokemon {
    name;
    id;
    imgUrl;
    type;
    types;

    constructor(name, id, type, types, imgUrl) {
        this.name = name;
        this.id = id;
        this.type = type;
        this.types = types;
        this.imgUrl = imgUrl;
    }
}

class PokemonModal {
    name;
    id;
    imgUrl;
    type;
    types;
    stats;

    constructor(name, id , type, types, imgUrl, stats){
        this.name = name;
        this.id = id;
        this.type = type;
        this.types = types;
        this.imgUrl = imgUrl;
        this.stats = stats;
    }
}

export const createPokemonModal = (pokemon) => {
    const types = pokemon.types.map(pokeType => pokeType.type.name);
    const stats = pokemon.stats.map(pokeType => pokeType.base_stat);

    return pokemon = new PokemonModal(pokemon.name, pokemon.id, types[0], types, pokemon.sprites.other.showdown.front_default, stats);
}

const createPokemon = (pokemon) =>{
    const types = pokemon.types.map(pokeType => pokeType.type.name);
    return pokemon = new Pokemon(pokemon.name, pokemon.id, types[0], types, pokemon.sprites.other.showdown.front_default);
}

export default createPokemon;