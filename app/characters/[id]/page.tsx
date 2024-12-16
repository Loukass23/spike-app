import { Character } from '@/types/rickandmorty'
import Image from 'next/image'
import React from 'react'

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

const CharacterDetails = async ({ params, searchParams }: Props) => {
  console.log({ params, searchParams });
  const response = await fetch(`https://rickandmortyapi.com/api/character/${params.id}`);
  const result = await response.json() as Character;
  if (response.ok) return (
    <div>
      <h1>{result.name}</h1>
      <Image src={result.image} alt={result.name} width={300} height={300} />
    </div>
  )
  return <p>Something went wrong....</p>
}

export default CharacterDetails