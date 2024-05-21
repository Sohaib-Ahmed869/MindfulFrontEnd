import React from "react";
import HeroImage from "../Assets/Hero.png";
import AppStore from "../Assets/appstore.png";
import { BiPlay } from "react-icons/bi";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="container hero">
      <div className="flex justify-between items-center">
        <div className="ml-20 hero-text w-1/2 text-left p-5">
          <h1 className="hero-heading text-8xl font-bold leading-none">   
            Your <span className="text-emerald-300">Guide</span> to Serenity in
            the <span className="text-emerald-300">Digital Age</span>
          </h1>
          <p className="text-2xl hero-subheading mt-10">
            Redefining mental wellness: your partner in the fight against
            anxiety and depression
          </p>
          <div className="justify-between mt-10 flex">
            <input
              type="text"
              placeholder="abc@gmail.com"
              className="input p-2 w-2/3 border border-gray-300 rounded-xl"
            />
            <button className="btn py-3 px-4 rounded-xl text-white flex items-center">
              <p className="pr-2">Book a demo</p> <BiPlay className="ml-1 text-2xl" />
            </button>
          </div>
          <div className="flex justify-center mx-auto mt-20">
            <p className="text-lg mt-5 mr-5">Available on App Store only</p>
            <img src={AppStore} className="w-1/4" alt="appstore" />
          </div>
        </div>
        <div
          className="hero-image justify-end flex"
          style={{ marginRight: "-10%" }}
        >
          <img src={HeroImage} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;