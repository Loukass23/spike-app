import { Character } from '@/types'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import React from 'react'

async function getCharacter(id: string) {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`, {
    cache: 'force-cache',
  })
  const character: Character = await res.json()
  if (!character) notFound()
  return character
}

export async function generateStaticParams() {
  const { results: characters } = await fetch('https://rickandmortyapi.com/api/character').then((res) => res.json())
  return characters.map((character: Character) => ({
    id: String(character.id),
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const character = await getCharacter(id)

  return {
    name: character.name,
  }
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params
  const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
  const character = await response.json() as Character
  return (
    <div>
      <h1>{character.name}</h1>
      <Image src={character.image} alt={character.name} width={300} height={300} />
    </div>
  )
}
