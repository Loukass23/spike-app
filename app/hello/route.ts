// https://nextjs.org/docs/app/building-your-application/routing/route-handlers
export async function GET() {
    const res = await fetch('https://rickandmortyapi.com/api/character')
    const data = await res.json()

    return Response.json({ data })
}