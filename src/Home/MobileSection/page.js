import React, { useState, useEffect, useRef } from "react";
import ChatBotImage from "../../Assets/Chatbot.png";
import OtherImage from "../../Assets/Iphone.png";
import "./ImageScroller.css"; // Assume some basic styling for .container, .image, .text, and .slide
const data = [
  {
    title: "Friendly Chatbot",
    content:
      "Redefining mental wellness with a minimalist and soft dashboard: your partner in the fight against anxiety and depression",
  },
  {
    title: "Customized Lessons",
    content:
      "Redefining mental wellness with a minimalist and soft dashboard: your partner in the fight against anxiety and depression",
  },
  {
    title: "Daily Progress ",
    content:
      "Redefining mental wellness with a minimalist and soft dashboard: your partner in the fight against anxiety and depression",
  },
];
const ImageScroller = () => {
  const [activeImage, setActiveImage] = useState(ChatBotImage);
  const slidesRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveImage(entry.target.getAttribute("data-image"));
          }
        });
      },
      {
        root: null, // relative to the viewport
        rootMargin: "0px",
        threshold: 0.5, // trigger when 50% of the element is visible
      }
    );

    slidesRef.current.forEach((slide) => {
      observer.observe(slide);
    });

    return () => {
      slidesRef.current.forEach((slide) => {
        observer.unobserve(slide);
      });
    };
  }, []);

  return (
    <div className="p-0">
      <div className="container1">
        <img src={activeImage} className="image" alt="Display" />
        <div className="text" style={{ backgroundColor: "#F5FCE7" }}>
          <div
            ref={(el) => (slidesRef.current[0] = el)}
            data-image={ChatBotImage}
            className="slide"
            
          >
            <div className="text-left p-0">
              <h3 className="text-4xl font-bold py-3 border-r-4 border-gray-500">
                {data[0].title}
              </h3>
              <p className="text-2xl leading-10 mt-10 font-normal subtext">
                {data[0].content}
              </p>
            </div>
          </div>
          <div
            ref={(el) => (slidesRef.current[1] = el)}
            data-image={OtherImage}
            className="slide"
          >
            <div className="text-left">
              <h3 className="text-4xl font-bold py-3 border-r-4 border-gray-500">
                {data[1].title}
              </h3>
              <p className="text-2xl leading-10 mt-10 font-normal subtext">
                {data[1].content}
              </p>
            </div>
          </div>
          <div
            ref={(el) => (slidesRef.current[2] = el)}
            data-image={OtherImage}
            className="slide"
          >
            <div className="text-left">
              <h3 className="text-4xl font-bold py-3 border-r-4 border-gray-500">
                {data[2].title}
              </h3>
              <p className="text-2xl leading-10 mt-10 font-normal subtext">
                {data[2].content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageScroller;
