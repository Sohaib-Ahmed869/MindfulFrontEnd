import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Controller,
} from "swiper/modules";
import "swiper/css"; // basic Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import ChatBotImage from "../../Assets/Chatbot2.png";
import OtherImage from "../../Assets/Progress.png";
import LessonImage from "../../Assets/Lesson.png";

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

const ImageScroller2 = () => {
  return (
    <div className="containermain2">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Controller]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div  className="items-center flex flex-col justify-center h-screen mx-auto mt-0 pt-0">
              <img
                src={item.image}
                alt="Display"
                className=" Display text-center justify-center"
              />
              <div className="text">
                <h3 className="text-4xl font-bold py-3">{item.title}</h3>
                <p className="text-2xl mt-10">{item.content}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageScroller2;
