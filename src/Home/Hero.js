import React from "react";
import HeroImage from "../Assets/heropic.png";
import AppStore from "../Assets/appstore.png";
import { BiPlay } from "react-icons/bi";
import arrow1 from "../Assets/arrow1.png";
import "./Hero.css";
const Hero = () => {
  const [email, setEmail] = React.useState("");

  const handleBookDemo = () => {
    //do the email validation
    if (!email) {
      alert("Please enter an email address!");
      return;
    }
    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email address!");
      return;
    }

    // Save email to local storage
    localStorage.setItem("email", email);
    alert("Demo booked successfully!");
    setEmail(""); // Clear input after saving
    //in new tab open the link to google form
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSf8pyT8RWYrovK_KGruN7VWtFQpabFkEhVLtlj5BI91aQEAKg/viewform",
      "_blank"
    );
  };
  return (
    <div className="hero w-full p-20 pt-0">
      <div className="flex justify-between items-center herocontainer ">
        <div className="hero-text w-1/2 text-left p-5 pt-0">
          <h1 className="hero-heading text-6xl font-bold leading-none  slide-in-left">
             <span style={{ color: "#A7C18E" }}> Hey there !</span> 
           {" "}
               Are you struggling with mindfulness?
            
          </h1>
          <img src={arrow1} alt="arrow" className="absolute mt-36 arrow slide-in-top" style={{left:"40%"}}/>
          <p className="text-2xl hero-subheading mt-10  slide-in-left">
          You understand the power of mindfulness, but constantly struggling to understand and incorporate it into your life with traditional approaches.
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
        <div className="w-1/2 hero-image flex items-center justify-center mt-0 pt-0 slide-in-right">
          <img src={HeroImage} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
