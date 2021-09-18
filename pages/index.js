import Head from "next/head";
import Nav from "../components/homepage/Nav";
import Hero from "../components/homepage/Hero";
import AboutStats from "../components/homepage/AboutStats";
import { useState } from "react";
import Carousel from "../components/homepage/Carousel";
import About from "../components/homepage/About";
import Brands from "../components/homepage/Brands";
import Contactus from "../components/homepage/Contactus";
import Footer from "../components/homepage/Footer";

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
