import { Character } from "@/types";


export default async function CharactersPage() {
    const data = await fetch("https://rickandmortyapi.com/api/character");
    const { results: characters } = await data.json() as { results: Character[] }
    return (
        <ul>
            {characters.map((character) => (
                <li key={character.id}>{character.name}</li>
            ))}
        </ul>
    );
}