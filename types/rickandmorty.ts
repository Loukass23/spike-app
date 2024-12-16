export type NotOK = {
  error: string
}

export type FetchResult = {
  info: Info
  results: Character[]
}

export type Info = {
  count: number
  pages: number
  next: string | null
  prev: string | null
}

export type Character = {
  id: number
  name: string
  status: "Alive" | "Dead" | "unknown"
  species: string
  type: string
  gender: "Female" | "Male" | "Genderless" | "unknown"
  origin: {
    name: string
    url: string
  }
  location: {
    name: string
    url: string
  }
  image: string
  episode: string[]
  url: string
  created: string
}