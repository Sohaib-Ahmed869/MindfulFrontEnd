import React, { useRef, useEffect } from "react";
import "./WhoWeAre.css";

import WhoWeAreImage from "../../Assets/whoweAre.png";
import CardDecorImage from "../../Assets/cardDecor.png";

const data = [
  {
    title: "Proven Practices for Transformative Mindfulness Experiences",
    content:
      "We designed MetaMindful to help you stay mindful effortlessly. It's all about making mindfulness accessible and enjoyable for everyone.",
  },
  {
    title: "Our Mindfulness Coach Adapts to Your Progress",
    content:
      "We're here to refine your mindfulness practice, customizing it to your evolving needs and progress.",
  },
  {
    title: "Partnering for Lasting Mindfulness Success",
    content:
      "Let's support your mindfulness journey by fostering accountability and cultivating the right mindset for lasting growth.",
  },
  {
    title: "Supporting Your Journey to Present, Mindful Living",
    content:
      "We get how crucial it is to stay in the moment and focus on what really counts. That's why we're here to give you the tools and guidance you need to keep your attention where it counts.",
  },
];

const WhoWeAre = () => {
  return (
    <div className="container flex justify-center mb-20 mt-20 w-full herocontainer">
      <div className="w-1/3 items-center flex mx-auto ml-36 whoweare">
        <img src={WhoWeAreImage} alt="Who We Are" className="h-96" />
      </div>
      <div className="w-2/3 card">
        <div className="flex flex-col p-10">
          {data.map((item, index) => (
            <div className="flex mt-4 bg-white rounded-3xl px-4 py-8 shadow-xl">
              <div className="ml-4">
                <h2 className="text-xl font-bold">{item.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
