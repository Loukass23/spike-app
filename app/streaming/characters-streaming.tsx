"use client";

import { use } from "react";
import Characters from '@/components/Characters';
import { FetchResult } from "@/types";
// Client Component streaming data from the server 

export default function CharactersStreaming({ charactersPromise }: { charactersPromise: Promise<FetchResult> }) {
    const { results: characters } = use(charactersPromise)
    return (
        <div>
            <Characters characters={characters} />
        </div>
    )
}

