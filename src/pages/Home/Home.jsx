import React from "react";
import { NavBar, Footer, Hero, Feature, Service } from "../../components";

const Home = () => {
  return (
    <div className="font-primary">
      <NavBar />
      <Hero />
      <Feature />
      <Service />
      <Footer />
    </div>
  );
};

export default Home;
