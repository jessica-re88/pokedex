
const pokeApi = {}

function convertPokeApiDetailToPokemon(pokemonsDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokemonsDetail.id
    pokemon.name = pokemonsDetail.name


    const types = pokemonsDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokemonsDetail.sprites.other.dream_world.front_default

    // NOVO: Adiciona detalhes
    pokemon.height = pokemonsDetail.height;
    pokemon.weight = pokemonsDetail.weight;
    pokemon.baseExp = pokemonsDetail.base_experience;
    pokemon.species = pokemonsDetail.species.name;
    
    // NOVO: Habilidades
    pokemon.abilities = pokemonsDetail.abilities.map(slot => slot.ability.name);

    // NOVO: Estatísticas (Stats)
    pokemon.stats = pokemonsDetail.stats.reduce((acc, stat) => {
        acc[stat.stat.name] = stat.base_stat;
        return acc;
    }, {});
    
    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
    .then((response) => response.json())
    .then(convertPokeApiDetailToPokemon);
}


pokeApi.getPokemons = (offset = 0, limit = 5 ) => {

    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then(response => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
    }

    // poke-api.js (ADICIONAR)
    pokeApi.getPokemonById = (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`
    return fetch(url)
        .then(response => response.json())
        .then(convertPokeApiDetailToPokemon);
}
            
            
    
