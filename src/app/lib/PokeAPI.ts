const POKEMON_API = "https://pokeapi.co/api/v2/"

export async function getPokemonList() {
    const response = await fetch(POKEMON_API + "pokemon?limit=151*offset=140");
    const initialPokemon = await response.json();
    return initialPokemon.results;
}

export async function getPokemonTypeList(type:string) {
    const response = await fetch(POKEMON_API + "type/" + type);
    const typePokemon = await response.json();
    return typePokemon.results;
}

export async function getPokemon(name:string) {
    const response = await fetch(POKEMON_API + "pokemon/" + name)
    const data = await response.json();
    return data;
}

export async function getInfo(order:string) {
    const response = await fetch(POKEMON_API + "pokemon-species/" + order)
    const data = await response.json();
    return data;
}
