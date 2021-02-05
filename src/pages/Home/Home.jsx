import React from "react";
import { NavBar, Footer, Hero, Feature } from "../../components";

const Home = () => {
  return (
    <div className="font-primary">
      <NavBar />
      <Hero />
      <Feature />
      <Footer />
    </div>
  );
};

export default Home;
