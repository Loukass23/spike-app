import Link from "next/link";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <h1 className="text-3xl">Next.js and Git</h1>


      <Link href="/characters">Static Site Generation</Link>
      <Link href="/client">Client Side Rendering</Link>
      <Link href="/streaming">Server Side Streaming</Link>

    </div>
  );
}
