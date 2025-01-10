import { Suspense } from "react";
import CharactersStreaming from "./characters-streaming";
import CharacterStreaming from "./character-streaming";



export default function StreamingPage() {





  return (
    <div className="flex items-center justify-evenly justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>
        <h4 className="text-3xl mb-8">Using loading file </h4>
        <CharactersStreaming />
      </div>
      <div >
        {/* Any content wrapped in a <Suspense> boundary will be streamed */}
        <h4 className="text-3xl mb-8">Using Suspense Component </h4>
        <Suspense fallback={<p>Charater 1 Loading...</p>}>
          <CharacterStreaming id="1" />
        </Suspense>
        <Suspense fallback={<p>Suspense Loading...</p>}>
          <CharacterStreaming id="2" />
        </Suspense>
        <Suspense fallback={<p>Suspense Loading...</p>}>
          <CharacterStreaming id="3" />
        </Suspense>
      </div>
    </div>
  );
}
