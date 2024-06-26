import React from "react";
import { BiPlay } from "react-icons/bi";
import arrow2 from "../../Assets/arrow2.png";
import useIntersectionObserver from "../../useInteractionObserver";
import "./WhoWeAre.css";
const WhoWeAre = () => {
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver({
    threshold: 0.0,
  });

  return (
    <div className="hero2 w-full p-20 mb-20">
      <div className="flex justify-between items-center herocontainer">
        <div className={`hero-text w-2/5 text-left p-5 pt-0`}>
          <div
            ref={ref}
            className={` ${
              hasIntersected ? "slide-in-left" : ""
            }`}
          >
            {" "}
            <h1 className="hero-heading text-6xl font-bold leading-none">
              We feel you
            </h1>
            <p className="text-2xl hero-subheading mt-2">
              We know mastering mindfulness requires active learning and
              immediate feedback.
            </p>
          </div>

          <img
            src={arrow2}
            alt="arrow"
            className={`absolute arrow ${
              hasIntersected ? "slide-in-top" : ""
            }`}
            style={{ left: "40%" }}
          />
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

export default WhoWeAre;
