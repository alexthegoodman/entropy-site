"use client";

import { ClientOnly } from "@/components/ClientOnly";
import EntropyChatWASM from "@/components/EntropyChat";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <ClientOnly>
        <h1>Embed WASM Here</h1>
        <EntropyChatWASM />
      </ClientOnly>
    </div>
  );
}
