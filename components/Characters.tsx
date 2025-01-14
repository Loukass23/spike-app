import { Character } from '@/types';
import Link from 'next/link';
import React from 'react'
import Image from 'next/image'


async function Characters({ characters }: { characters: Character[] }) {
  return (
    <div>
      <h2>Characters:</h2>
      <ul>
        {characters.map((character) => {
          return <li key={character.id}>
            <Image src={character.image} alt={character.name} width={300} height={300} />
            <Link href={`/characters/${character.id}`}>{character.name}</Link>
          </li>
        })}
      </ul>
    </div>
  )
}

export default Characters