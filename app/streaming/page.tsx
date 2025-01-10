import { Suspense } from "react";
import CharactersStreaming from "./characters-streaming";
import { Character, FetchResult } from "@/types";

export const getCharactersPromise = () => {
  const promise = fetch("https://rickandmortyapi.com/api/character").then(response => response.json()) as Promise<FetchResult>;
  return promise;
}

export default function StreamingPage() {

  // we do not await for the promise to resolve as we are only using the data for the UI



  return (
    <div className="flex items-center justify-evenly justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div >

      {/* Any content wrapped in a <Suspense> boundary will be streamed */}
      <h4 className="text-3xl mb-8">Using Suspense Component </h4>
      <Suspense fallback={<p>Suspense Loading...</p>}>
        <CharactersStreaming />
      </Suspense>
      </div>

<div> 

      <h4 className="text-3xl mb-8">Using loading file </h4>
      {/* <CharactersStreaming charactersPromise={charactersPromise} /> */}
    </div>
</div>
  );
}
