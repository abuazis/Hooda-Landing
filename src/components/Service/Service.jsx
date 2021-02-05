import React from "react";
import { IcBuy, IcFlash, IcFood, IcToday, IcTomorrow } from "../../assets";

const Service = () => {
  return (
    <div className="container m-auto xl:px-24 md:px-10 px-8 flex flex-col pt-20 pb-24">
      <h1 className="lg:text-4xl text-3xl font-bold mb-12">
        Service Available
      </h1>
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        <div className="lg:w-full h-auto flex flex-col py-8 justify-start items-center rounded-lg shadow-xl">
          <div className="bg-primary w-28 h-28 flex flex-col mb-8 pt-1 justify-center items-center rounded-3xl">
            <img src={IcToday} className="w-12 h-12 mb-2" />
            <h1 className="font-semibold text-white">Today</h1>
          </div>
          <p className="text-xs px-4 text-center leading-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis
            integer aenean cursus iaculis erat iyeso luge vestibulum.
          </p>
        </div>
        <div className="lg:w-full h-auto flex flex-col py-8 justify-start items-center rounded-lg shadow-xl">
          <div
            style={{ backgroundColor: "#28AAE1" }}
            className="w-28 h-28 flex flex-col mb-8 pt-1 justify-center items-center rounded-3xl"
          >
            <img src={IcTomorrow} className="w-12 h-12 mb-2" />
            <h1 className="font-semibold text-white">Tomorrow</h1>
          </div>
          <p className="text-xs px-4 text-center leading-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis
            integer aenean cursus iaculis erat iyeso luge vestibulum.
          </p>
        </div>
        <div className="lg:w-full h-auto flex flex-col py-8 justify-start items-center rounded-lg shadow-xl">
          <div
            style={{ backgroundColor: "#90278E" }}
            className="w-28 h-28 flex flex-col mb-8 pt-1 justify-center items-center rounded-3xl"
          >
            <img src={IcFlash} className="w-12 h-12 mb-2" />
            <h1 className="font-semibold text-white">Flash</h1>
          </div>
          <p className="text-xs px-4 text-center leading-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis
            integer aenean cursus iaculis erat iyeso luge vestibulum.
          </p>
        </div>
        <div className="lg:w-full h-auto flex flex-col py-8 justify-start items-center rounded-lg shadow-xl">
          <div
            style={{ backgroundColor: "#FFC612" }}
            className="w-28 h-28 flex flex-col mb-8 pt-1 justify-center items-center rounded-3xl"
          >
            <img src={IcBuy} className="w-12 h-12 mb-2" />
            <h1 className="font-semibold text-white">Buy</h1>
          </div>
          <p className="text-xs px-4 text-center leading-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis
            integer aenean cursus iaculis erat iyeso luge vestibulum.
          </p>
        </div>
        <div className="lg:w-full h-auto flex flex-col py-8 justify-start items-center rounded-lg shadow-xl">
          <div
            style={{ backgroundColor: "#EC297B" }}
            className="w-28 h-28 flex flex-col mb-8 pt-1 justify-center items-center rounded-3xl"
          >
            <img src={IcFood} className="w-12 h-12 mb-2" />
            <h1 className="font-semibold text-white">Food</h1>
          </div>
          <p className="text-xs px-4 text-center leading-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis
            integer aenean cursus iaculis erat iyeso luge vestibulum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
