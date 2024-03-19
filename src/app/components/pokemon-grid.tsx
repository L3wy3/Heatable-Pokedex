"use client"
import React from "react";
import { useState } from "react";
import { PokemonCard } from "./pokemon-card";


interface PokemonGridProps {
    pokemonList: any
}


export function PokemonGrid({ pokemonList } : PokemonGridProps) {
    const [ searchText, setSearhText ] = useState("");
    return (
        <>
                <div className="inline-flex flex-wrap justify-center">
                
                {pokemonList.map((pokemon : any) => {
                    return (
                        <PokemonCard name={pokemon.name} />
                    )
                })}
                </div>
        </>
    )
}