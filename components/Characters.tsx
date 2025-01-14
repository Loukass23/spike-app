import { Character } from '@/types';
import Link from 'next/link';
import React from 'react'


async function Characters({ characters }: { characters: Character[] }) {
  return (
    <div>
      <h2>changing:</h2>
      <ul>
        {characters.map((character) => {
          return <li key={character.id}>
            <p>foo</p>
            <Link href={`/characters/${character.id}`}>{character.name}</Link>
          </li>
        })}
      </ul>
    </div>
  )
}

export default Characters