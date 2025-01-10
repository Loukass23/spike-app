"use client";
import Characters from "@/components/Characters";
// CSR requires this directive

import { Character } from "@/types";
import { useState, useEffect } from "react";

export default function Home() {
    const [characters, setCharacters] = useState<Character[]>([])

    useEffect(() => {
        async function fetchCharacters() {
            const res = await fetch("https://rickandmortyapi.com/api/character")
            const { results } = await res.json()
            setCharacters(results)
        }
        fetchCharacters()
    }, [])


    return (
        <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <h1 className="text-3xl mb-8">Client Side Rendering</h1>
            {characters.map((character) => {
                return <p className="text-2xl" key={character.id}>{character.name}</p>
            })}

            {/* We cannot call a server component directly from a CSR page. */}
            <Characters characters={characters} />

        </div>
    );
}
