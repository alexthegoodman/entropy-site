"use client";

import Script from "next/script";

export default function EntropyChatWASM() {
    return (
        <>
        <Script>
                {`
                console.info("Hello WASM!");
                `}
            </Script>
<div id="leptos-container"></div>
  
<Script type="module">
{`import init, * as bindings from 'https://stunts.b-cdn.net/entropy-chat-d94bd7e2ee5724d1.js';
const wasm = await init({ module_or_path: 'https://stunts.b-cdn.net/entropy-chat-d94bd7e2ee5724d1_bg.wasm' });


window.wasmBindings = bindings;
console.info("Dispatch WASM!");

dispatchEvent(new CustomEvent("TrunkApplicationStarted", {detail: {wasm}}));
`}
</Script>
        </>
    )
}