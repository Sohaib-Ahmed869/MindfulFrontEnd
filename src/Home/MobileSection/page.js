import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination, EffectFade } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import ChatBotImage from "../../Assets/Chatbot.png";
import OtherImage from "../../Assets/Progress.png";
import LessonImage from "../../Assets/Lesson.png";
import mobiles from "../../Assets/mobiles.png";
import "./ImageScroller.css";
import useIntersectionObserver from "../../useInteractionObserver";

// Install necessary Swiper modules
SwiperCore.use([Mousewheel, Pagination]);

const data = [
  {
    image: ChatBotImage,
    title: "Friendly Chatbot",
    content:
      "Redefining mental wellness with a minimalist and soft dashboard: your partner in the fight against anxiety and depression",
  },
  {
    image: LessonImage,
    title: "Customized Lessons",
    content:
      "Redefining mental wellness with a minimalist and soft dashboard: your partner in the fight against anxiety and depression",
  },
  {
    image: OtherImage,
    title: "Daily Progress",
    content:
      "Redefining mental wellness with a minimalist and soft dashboard: your partner in the fight against anxiety and depression",
  },
];

const settings = {
  slidesPerView: 1,
  spaceBetween: 0,
  mousewheel: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
};

const ImageScroller = () => {
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver({
    threshold: 0.0,
  });

  const [activeImage, setActiveImage] = useState(data[0].image); // Initial image set to the first item
  const [imageKey, setImageKey] = useState(0); // Key to force re-render

  const changeImage = (swiper) => {
    setActiveImage(data[swiper.activeIndex].image);
    setImageKey((prevKey) => prevKey + 1); // Increment key to trigger re-render
  };
  return (
    // <div className="containermain mb-60">
    //   <img src={activeImage} alt="Display" className="image fade-in" key={imageKey} />
    //   <Swiper
    //     {...settings}
    //     onSlideChange={changeImage}
    //     className=" swuper flex justify-end text-left h-full"
    //   >
    //     {data.map((item, index) => (
    //       <SwiperSlide key={index} className="flex w-full h-96">
    //         <div className="text text-left" key={imageKey}>
    //           <div className="flex flex-col subtext2">
    //             <h3 className="text-4xl font-bold py-3">{item.title}</h3>
    //             <p className="text-2xl leading-10 mt-10 font-normal ">
    //               {item.content}
    //             </p>
    //           </div>
    //         </div>
    //       </SwiperSlide>
    //     ))}
    //   </Swiper>
    // </div>
    <div className={`p-52 pt-0 pb-10 mt-36 ${hasIntersected ? "fade-in" : ""}`} ref={ref}>
      <img src={mobiles} alt="mobiles" className="w-full" />
    </div>
  );
};

export default ImageScroller;
