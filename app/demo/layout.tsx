import Head from "next/head";

export default function Layout() {
    return (
        <>
            <Head>
                <link rel="modulepreload" href="https://stunts.b-cdn.net/entropy-chat-d94bd7e2ee5724d1.js" crossOrigin="anonymous" integrity="sha384-IPf0Pk2uPVJGlzs6ehER77hdfGvz6KsFtH0Qn0uE7LNC/AqDmKIF0dx+wXTEWcMx"/><link rel="preload" href="https://stunts.b-cdn.net/entropy-chat-d94bd7e2ee5724d1_bg.wasm" crossOrigin="anonymous" integrity="sha384-3HsUuNZOoSd5WOAh+6GyzYRIQAx3D+hQJOWYIbFn3k/6slxOVgg0wQB0JhDiRayI" as="fetch" type="application/wasm"/>
            </Head>
        </>
    )
}