import React, { useRef, useEffect } from "react";
import "./WhoWeAre.css";

import WhoWeAreImage from "../../Assets/whoweAre.png";
import CardDecorImage from "../../Assets/cardDecor.png";
import img1 from "../../Assets/img1.png";
import img2 from "../../Assets/img2.png";
import img3 from "../../Assets/img3.png";
import img4 from "../../Assets/img4.png";

const data = [
  {
    image: img1,
    title: "Proven Practices for Transformative Mindfulness Experiences",
  },
  {
    image: img2,
    title: "Our Mindfulness Coach Adapts to Your Progress",
  },
  {
    image: img3,
    title: "Partnering for Lasting Mindfulness Success",
  },
  {
    image: img4,
    title: "Supporting Your Journey to Present, Mindful Living",
  },
];

const WhoWeAre = () => {
  return (
    <div className="container flex flex-col justify-center mx-auto mb-20 mt-20 w-full herocontainer">
      <div className="items-center flex mx-auto ml-10 whoweare">
        <img src={WhoWeAreImage} alt="Who We Are" className="h-28" />
      </div>
      <div className="w-full cardcontainer">
        <div className="flex flex-row p-10 cardcontainer2">
          {data.map((item, index) => (
            <div className="flex flex-col bg-white rounded-3xl shadow-xl card p-10 m-10 w-1/4">
                <img src={item.image} alt="Card Decor" className="h-24 w-24 " />
                <h2 className="text-xl font-bold">{item.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
