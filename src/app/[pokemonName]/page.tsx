import { getPokemon, getEvolution } from "../lib/PokeAPI";
import Image from "next/image";
import audio from "next/image";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { useState } from "react";

export default async function PokemonPage({ params } : { params: { pokemonName: string } }) {
    const { pokemonName } = params;
    const pokemonObject = await getPokemon(pokemonName);
    const EvolutionObject = await getEvolution(pokemonObject.id);
    if (parseInt(pokemonObject.id) == 1) {
        var prevPokemon = 151
    } else {
        var prevPokemon = parseInt(pokemonObject.id)-1
    }
    if (parseInt(pokemonObject.id) == 151) {
        var nextPokemon = 1
    } else {
        var nextPokemon = parseInt(pokemonObject.id)+1
    }
    return (
        <>
        <div className="relative inline-flex items-center flex-wrap">
        <div className="inline-flex items-center">
            <a className="next" href={"/"+prevPokemon}><ChevronLeftIcon className="w-full h-full"/></a>
                <Image loading="lazy" className="m-10 border-double border-3 border-secondary rounded-3xl bg-tertiary relative" width="400" height="400" src={pokemonObject.sprites.other['official-artwork'].front_default} alt={"Picture of "+{pokemonName}}></Image>
            <a className="next" href={"/"+nextPokemon}><ChevronRightIcon className="w-full h-full"/></a>
        </div>
        <div className="max-w-xs p-10">
        <h1 className="capitalize">Name: {pokemonObject.species.name}</h1>
        <p>Type: {pokemonObject.types[0].type.name}</p>
        <p>Genus: {EvolutionObject.genera[7].genus}</p>
        { EvolutionObject.evolves_from_species ? <p className="capitalize">Evolves from: {EvolutionObject.evolves_from_species.name}</p> : null }
        <p>Description: {EvolutionObject.flavor_text_entries[7].flavor_text}</p>
        <audio autoPlay controls className="hidden">
            <source
            id="audio-player"
            src={pokemonObject.cries.legacy}
            type="audio/mp3"
            />
        </audio>
        </div>
        </div>
        </>
    )
}
