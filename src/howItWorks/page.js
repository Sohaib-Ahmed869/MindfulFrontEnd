import React from "react";
import { BiPlay } from "react-icons/bi";
import { FaCircle } from "react-icons/fa";
import arrow3 from "../Assets/arrow3.png";
import './page.css'
const steps = [
  {
    title: "Step 1",
    content: "Download the MetaMindful app",
  },
  {
    title: "Step 2",
    content: "Engage with our chatbot for intuitive concepts and exercises.",
  },
  {
    title: "Step 3",
    content: "Get real-time feedback to progress effectively.",
  },
];
const HowItWorks = () => {
  return (
    <div className="w-full p-10 pt-0 flex mainpart">
      <div className="w-1/2 div1">
        <p></p>
        <img
            src={arrow3}
            alt="arrow"
            className="absolute mt-36 arrow"
            style={{ left: "30%" }}
          />
      </div>
      <div className="flex items-center div2">
        <div className="text-left p-5 pt-0">
          <h1 className=" text-6xl font-bold leading-none hero-heading">
            Here's how it works
          </h1>
          <div className="justify-between mt-2 flex">
            <div className="flex flex-col">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col hero-heading">
                  <h3
                    className="text-2xl font-bold pb-0 pt-4"
                    style={{ color: "#A7C18E" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-2xl leading-10 mt-1 flex items-center hero-subheading">
                    <FaCircle size={5} className="mr-2" /> {step.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
