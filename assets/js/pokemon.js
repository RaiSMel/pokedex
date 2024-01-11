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

const createPokemon = (pokemon) =>{
    const types = pokemon.types.map(pokeType => pokeType.type.name);
    return pokemon = new Pokemon(pokemon.name, pokemon.id, types[0], types, pokemon.sprites.other.showdown.front_default);
}

export default createPokemon;