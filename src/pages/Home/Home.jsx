import React from "react";
import { NavBar, Footer, Hero } from "../../components";

const Home = () => {
  return (
    <div className="font-primary">
      <NavBar />
      <Hero />
      <p>Halaman Home</p>
      <Footer />
    </div>
  );
};

export default Home;
