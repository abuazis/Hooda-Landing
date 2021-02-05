import React from "react";
import { FeatureImageOne, FeatureImageTwo } from "../../assets";

const Feature = () => {
  return (
    <div className="lg:px-40 sm:px-32 px-12 flex flex-col pt-20 pb-24">
      <div className="flex lg:flex-row flex-col-reverse mb-28 justify-center items-center">
        <div className="flex flex-col">
          <h1 className="text-5xl font-bold mb-7">Staple Goods Program</h1>
          <p className="text-base leading-8">
            Beneficiaries receive staple goods packages consisting of basic
            needs such as rice, cooking oil, and instant foods. As of May 24th
            2020, we have distributed 455,000 staple goods vouchers for our
            driver-partners via Alfamart. In this program free meals are
            provided for healthcare workers. As of May 24th 2020, we have
            distributed 176,000 free meal packages for healthcare workers at 15
            hospitals across the Jabodetabek area. which also helps them earn
            additional income. As of May 24th 2020, we have distributed 640,000
            family meals vouchers. at specially selected micro, small, and
            medium sized enterprises.{" "}
          </p>
        </div>
        <div className="lg:mr-20 mr-0 mb-20" />
        <div className="relative sm:ml-0 ml-7">
          <div className="bg-primary rounded-lg sm:w-96 sm:h-96 w-72 h-72" />
          <img
            src={FeatureImageOne}
            className="rounded-lg object-cover absolute top-7 right-7 sm:w-96 sm:h-96 w-72 h-72"
          />
        </div>
      </div>
      <div className="flex lg:flex-row-reverse flex-col-reverse justify-center items-center">
        <div className="flex flex-col">
          <h1 className="text-5xl font-bold mb-7">Family Meals Workers</h1>
          <p className="text-base leading-8">
            This program provides distributed free meal vouchers to
            beneficiaries who can redeem them at specially selected micro,
            small, and medium sized enterprises, which also helps them earn
            additional income. As of May 24th 2020, we have distributed 640,000
            family meals vouchers. Beneficiaries receive staple goods packages
            consisting of basic needs such as rice, cooking oil, and instant
            foods. As of May 24th 2020, we have distributed 455,000 staple goods
            vouchers for our driver-partners via Alfamart. In this program free
            meals are provided for healthcare. at specially selected micro,
            small, and medium sized enterprises.{" "}
          </p>
        </div>
        <div className="lg:mr-20 mr-0 mb-20" />
        <div className="relative sm:mr-0 mr-7">
          <div className="bg-primary rounded-lg sm:w-96 sm:h-96 w-72 h-72" />
          <img
            src={FeatureImageTwo}
            className="rounded-lg object-cover absolute top-7 left-7 sm:w-96 sm:h-96 w-72 h-72"
          />
        </div>
      </div>
    </div>
  );
};

export default Feature;
