import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import {
  CarouselImageOne,
  CarouselImageThree,
  CarouselImageTwo,
} from "../../assets";

const Hero = () => {
  return (
    <div className="w-full h-auto flex">
      <Carousel
        autoPlay
        infiniteLoop
        swipeable
        interval={3000}
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        renderIndicator={(clickHandler, isSelected) => {
          if (isSelected) {
            return (
              <div
                onClick={clickHandler}
                className="rounded-lg w-7 h-4 mx-2 inline-block bg-primary"
              />
            );
          } else {
            return (
              <div
                onClick={clickHandler}
                className="rounded-full w-4 h-4 mx-2 inline-block bg-gray-400"
              />
            );
          }
        }}
      >
        <div className="w-full">
          <img
            src={CarouselImageOne}
            style={{ height: 445 }}
            className="w-full h-full object-cover relative"
          />
          <div className="absolute m-auto bottom-16 container xl:px-24 px-5 left-0 right-0">
            <h1 className="text-white text-left sm:text-4xl text-3xl font-bold mb-7">
              Get a head start
            </h1>
            <p className="text-white text-left sm:text-base text-sm sm:leading-7 leading-6">
              Driver Jempolan in Indonesian means top drivers. We ensure the
              quality of our driver-partners through a thorough recruitment
              process, followed by a comprehensive on-boarding module and
              safe-driving training program from Rifat Drive Labs. Check out our
              Driver Jempolan stories and First-Aid and Anti Sexual Harassment
              Training from Bengkel Belajar Mitra (BBM)
            </p>
          </div>
        </div>
        <div className="w-full">
          <img
            src={CarouselImageTwo}
            style={{ height: 445 }}
            className="w-full h-full object-cover relative"
          />
          <div className="absolute m-auto bottom-16 container xl:px-24 px-5 left-0 right-0">
            <h1 className="text-white text-left sm:text-4xl text-3xl font-bold mb-7">
              Need Help ? Find The Solution
            </h1>
            <p className="text-white text-left sm:text-base text-sm sm:leading-7 leading-6">
              Yes, all the information you need is available on our In-app Help
              page, because as a SuperApp we are committed to provide you with
              solutions to all complications. So, you don't need to manually
              contact Gojek's Call Center or email our Customer Service
              anymore!.For urgent issues such as fraud, you can also immediately
              contact our Call Center from there.
            </p>
          </div>
        </div>
        <div className="w-full">
          <img
            src={CarouselImageThree}
            style={{ height: 445 }}
            className="w-full h-full object-cover relative"
          />
          <div className="absolute m-auto bottom-16 container xl:px-24 px-5 left-0 right-0">
            <h1 className="text-white text-left sm:text-4xl text-3xl font-bold mb-7">
              Treat Some Plates, Get You New Mates
            </h1>
            <p className="text-white text-left sm:text-base text-sm sm:leading-7 leading-6">
              It's time for you to be free from the complicated drama of topping
              up credit and data! Moreover, the process of topping up on GoPulsa
              is really fast, it doesn't take up to a minute. Not only credit,
              you can also fill data packages on GoPulsa. So, don't skip the
              GoPulsa promo because there are many promotions!
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
