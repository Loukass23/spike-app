import { Character } from '@/types/rickandmorty';
import Link from 'next/link';
import React from 'react'


async function Characters({ characters }: { characters: Character[] }) {
  return (
    <div>
      <h2>Characters:</h2>
      <ul>
        {characters.map((character) => {
          return <li key={character.id}>
            <Link href={`/characters/${character.id}`}>{character.name}</Link>
          </li>
        })}
      </ul>
    </div>
  )
}

export default Characters