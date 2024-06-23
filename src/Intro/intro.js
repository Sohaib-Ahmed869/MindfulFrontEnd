import React from "react";
import phone from "../Assets/phone.png";
import { BiPlay } from "react-icons/bi";
import './intro.css'
const Intro = () => {
  return (
    <div className="hero w-full p-10 pt-0 cont">
      <div className="flex items-center herocontainer">
        <div className="w-1/3 hero-image flex items-center justify-center mt-0 pt-0">
          <img src={phone} alt="hero" className="mob"/>
        </div>
        <div className="hero-text w-2/4 text-left p-5 pt-0">
          <h1 className="hero-heading text-6xl font-bold leading-none">
            Introducing !
          </h1>
          <h1
            className="hero-heading text-6xl font-bold leading-none mt-3"
            style={{ color: "#A7C18E" }}
          >
            {" "}
            Meta Mindful
          </h1>
          <p className="text-2xl hero-subheading mt-10">
            Our AI chatbot transforms mindfulness into a tangible skill.
            Developed by mindfulness coaches, AI professionals, and
            psychologists, MetaMindful creates an effective personalized
            learning experience.
          </p>
          
          {/* <div className="justify-between mt-10 flex">
            <input
              type="text"
              placeholder="abc@gmail.com"
              className="input p-2 w-2/3 border border-gray-300 rounded-xl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="btn py-3 px-4 rounded-xl text-white flex items-center"
              onClick={handleBookDemo}
            >
              <p className="pr-2">Book a demo</p>{" "}
              <BiPlay className="ml-1 text-2xl" />
            </button>
          </div>
          <div className="flex justify-center mx-auto mt-20">
            <p className="text-lg mt-5 mr-5">Available on App Store only</p>
            <img src={AppStore} className="w-1/4" alt="appstore" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Intro;
