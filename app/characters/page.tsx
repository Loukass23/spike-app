import Characters from "@/components/Characters";
import { Character } from "@/types";
import Link from "next/link";


export default async function CharactersPage() {
    const data = await fetch("https://rickandmortyapi.com/api/character",
        // {
        //     cache: 'no-cache' 
        // }
    );
    const { results: characters } = await data.json() as { results: Character[] }
    return (
        // <ul>
        //     {characters.map((character) => (
        //         <li key={character.id}><Link href={`/characters/${character.id}`}>{character.name} </Link></li>
        //     ))}
        // </ul>
        <Characters characters={characters} />
    );
}