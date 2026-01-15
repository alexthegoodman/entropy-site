import Head from "next/head";

import type { Metadata } from "next";

export const metadata: Metadata = {
  other: {
    modulepreload: "https://stunts.b-cdn.net/entropy-chat-d94bd7e2ee5724d1.js",
    preload: "https://stunts.b-cdn.net/entropy-chat-d94bd7e2ee5724d1_bg.wasm",
  }
};

export default function Layout({ children = null }) {
    return (
        <>
            {children}
        </>
    )
}