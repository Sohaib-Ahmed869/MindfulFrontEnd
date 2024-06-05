import React from "react";
import HeroImage from "../Assets/Hero.png";
import AppStore from "../Assets/appstore.png";
import { BiPlay } from "react-icons/bi";
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
    <div className="hero w-full p-10 pt-0">
      <div className="flex justify-between items-center herocontainer min-h-screen">
        <div className="hero-text w-1/2 text-left p-5">
          <h1 className="hero-heading text-8xl font-bold leading-none">
            Your <span style={{ color: "#A7C18E" }}>Guide</span> to Serenity in
            the <span style={{ color: "#A7C18E" }}>Digital Age</span>
          </h1>
          <p className="text-2xl hero-subheading mt-10">
            Redefining mental wellness: your partner in the fight against
            anxiety and depression
          </p>
          <div className="justify-between mt-10 flex">
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
          </div>
        </div>
        <div className="w-1/2 hero-image flex items-center justify-center">
          <img src={HeroImage} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
