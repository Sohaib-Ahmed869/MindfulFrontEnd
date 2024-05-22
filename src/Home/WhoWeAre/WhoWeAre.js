import React, { useRef, useEffect } from "react";
import "./WhoWeAre.css";
import { ParallaxLayer, Parallax } from "@react-spring/parallax";

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
    title: "Your Path, Your Pace",
    content:
      "Starting with the smallest steps, we help you navigate your mindfulness journey at your own pace, ensuring you find the perfect balance for your practice",
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

const DataComponent = ({ title, content, offset }) => {
  return (
    <ParallaxLayer offset={offset} speed={0.5} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div className="mb-5 cards p-10">
        <img src={CardDecorImage} alt="Card Decor" className="py-5" />
        <div className="text-left">
          <h3 className="text-4xl font-bold py-3 border-r-4 border-gray-500">
            {title}
          </h3>
          <p className="text-2xl leading-10 mt-10 font-normal subtext">
            {content}
          </p>
        </div>
      </div>
    </ParallaxLayer>
  );
};

const WhoWeAre = () => {
  return (
    <div className="container flex justify-center mb-20 mt-20 w-full">
      <div className="w-1/3 items-center flex mx-auto ml-20">
        <img src={WhoWeAreImage} alt="Who We Are" className="h-96" />
      </div>
      <div className="w-2/3" style={{ height: "60vh"}}>
        <Parallax pages={5} style={{width: "1000px", height: "60vh", overflowY: "auto", overflowX: "hidden",backgroundColor: "#F5FCE7" ,scrollbarWidth: "none"}}>
          {data.map((item, index) => (
            <DataComponent
              key={index}
              title={item.title}
              content={item.content}
              offset={index}

            />
          ))}
        </Parallax>
      </div>
    </div>
  );
};

export default WhoWeAre;
