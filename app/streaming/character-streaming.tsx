
import { use } from "react";
import Image from 'next/image'
import { getCharacterPromise } from "./data";
// Client Component streaming data from the server 

export default function CharactersStreaming({ id }: { id: string }) {
    const characterPromise = getCharacterPromise(id)
    const character = use(characterPromise)
    return (
        <div>
            <h1>{character.name}</h1>
            <Image src={character.image} alt={character.name} width={300} height={300} />
        </div>
    )
}

