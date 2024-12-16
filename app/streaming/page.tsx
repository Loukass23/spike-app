import { FetchResult } from "@/types/rickandmorty";
import { Suspense } from "react";
import CharactersStreaming from "./characters-streaming";

export const getCharactersPromise = () => {
  const promise: Promise<FetchResult> = fetch("https://rickandmortyapi.com/api/character").then(response => response.json());
  return promise;
}

export default async function StreamingPage() {

  // we do not await for the promise to resolve as we are only using the data for the UI
  const charactersPromise = getCharactersPromise()

  return (
    <div>
      <h4>Using Suspense Component </h4>
      {/* Any content wrapped in a <Suspense> boundary will be streamed */}
      <Suspense fallback={<p>Suspense Loading...</p>}>
        <CharactersStreaming charactersPromise={charactersPromise} />
      </Suspense>


      {/* <h4>Using loading file </h4>
      <CharactersStreaming charactersPromise={charactersPromise} /> */}
    </div>
  );
}
