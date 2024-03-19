import Image from 'next/image';

interface PokemonCardProps {
    name: string
}

export function PokemonCard({ name } : PokemonCardProps) {
    return (
        <>
            <a href={name} key={name + "Card"} >
                <div className="pokemon-card">
                    <span className="sprite"></span>
                    <p className="capitalize text-white hover:text-secondary">{name}</p>
                </div>
            </a>
        </>
    )
}