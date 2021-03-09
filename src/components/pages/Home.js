import React from "react";
import "../../App.css";
import Cards from "../card/Cards";
import Footer from "../footer/Footer";
import Hero from "../hero/Hero";

function Home() {
  return (
    <>
      <Hero />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
