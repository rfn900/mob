import Head from "next/head";
import Nav from "../components/Nav";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="w-screen overflow-hidden">
      <Head>
        <title>MARSian Oline Group</title>
        <meta name="description" content="Homepage for MARSian Online Group" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Hero />
    </div>
  );
}
