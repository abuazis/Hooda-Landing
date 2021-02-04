import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CarouselImageOne } from "../../assets";

const Hero = () => {
  /// Render komponen JSX
  return (
    /// Pembungkus untuk komponen [Carousel]
    <div className="w-full h-auto flex">
      {/* Panggil komponen carousel beserta props yang dibutuhkan */}
      <Carousel
        autoPlay
        infiniteLoop
        swipeable
        interval={1500}
        showArrows={false}
        showThumbs={false}
      >
        <div className="w-full">
          <img
            src={CarouselImageOne}
            style={{ height: 445 }}
            className="w-full h-full"
          />
        </div>
        <div className="w-full h-full">
          <img
            src={CarouselImageOne}
            style={{ height: 445 }}
            className="w-full h-full"
          />
        </div>
        <div className="w-full h-full">
          <img
            src={CarouselImageOne}
            style={{ height: 445 }}
            className="w-full h-full"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
