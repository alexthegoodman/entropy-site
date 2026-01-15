import Head from "next/head";

import type { Metadata } from "next";

export const metadata: Metadata = {
  other: {
    modulepreload: "https://stunts.b-cdn.net/entropy-chat-a4f06f49d058dc5a.js",
    preload: "https://stunts.b-cdn.net/entropy-chat-a4f06f49d058dc5a_bg.wasm",
  }
};

export default function Layout({ children = null }) {
    return (
        <>
            {children}
            <link rel="stylesheet" href="https://stunts.b-cdn.net/styles-2af90ff31767fd1c.css" />
        </>
    )
}