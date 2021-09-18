import Head from "next/head";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import AboutStats from "../components/AboutStats";
import { useState } from "react";
import Carousel from "../components/Carousel";
import About from "../components/About";
import Brands from "../components/Brands";
import Contactus from "../components/Contactus";
import Footer from "../components/Footer";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  return (
    <div className="w-screen overflow-hidden">
      <Head>
        <title>MARSian Oline Group</title>
        <meta name="description" content="Homepage for MARSian Online Group" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.1/css/swiper.css"
        />
      </Head>
      <Nav />
      <Hero />
      <AboutStats />
      <Carousel />
      <About />
      <Brands />
      <Contactus />
      <Footer />
    </div>
  );
}
