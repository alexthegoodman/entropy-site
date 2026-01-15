"use client";

import { ClientOnly } from "@/components/ClientOnly";
import EntropyChatWASM from "@/components/EntropyChat";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <ClientOnly>
        <EntropyChatWASM />
      </ClientOnly>
    </div>
  );
}
