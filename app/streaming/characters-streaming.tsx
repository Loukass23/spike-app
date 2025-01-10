
import { use } from "react";
import Characters from '@/components/Characters';
import { FetchResult } from "@/types";
import { getCharactersPromise } from "./data";
// Client Component streaming data from the server 

export default function CharactersStreaming() {
    const charactersPromise = getCharactersPromise()
    const { results: characters } = use(charactersPromise)
    return (
        <div>
            <Characters characters={characters} />
        </div>
    )
}

