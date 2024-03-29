import Image from "next/image";
import { PokemonGrid } from "./components/pokemon-grid";
import { getPokemonList } from "./lib/PokeAPI";



export default async function Home() {
  const pokemonList = await getPokemonList();
  return (
    <>
    <PokemonGrid pokemonList={pokemonList}/><PokemonGrid pokemonList={pokemonList}/>
    </>
  );
}