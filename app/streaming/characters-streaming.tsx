
import { use } from "react";
import Characters from '@/components/Characters';
import { getCharactersPromise } from "./data";
// Client Component streaming data from the server 

export default function CharactersStreaming() {
    const charactersPromise = getCharactersPromise().then(response => response.json())
    const { results: characters } = use(charactersPromise)
    return (
        <div>
            <Characters characters={characters} />
        </div>
    )
}

