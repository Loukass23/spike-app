"use client"; // CSR requires this directive

import Characters from "@/components/Characters";
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
        <div>
            <h1>Client Side Rendering</h1>

            {characters ? <Characters characters={characters} /> :
                <p>Characters Loading..</p>
            }
        </div>
    );
}
