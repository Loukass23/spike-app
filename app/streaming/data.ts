import { Character } from "@/types";

export const getCharactersPromise = async () => {
    const promise = fetch("https://rickandmortyapi.com/api/character")
    // DEMO only artificially delay promise for 2 seconds
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return promise;
}

export const getCharacterPromise = async (id: string) => {
    const promise = fetch(`https://rickandmortyapi.com/api/character/${id}`).then(response => response.json()) as Promise<Character>

    // DEMO only! artificially delay promise for various time
    await new Promise((resolve) => setTimeout(resolve, 3000 * parseInt(id)));

    return promise;
}