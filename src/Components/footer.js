import React from "react";
import PlayStore from "../Assets/PlayStore.png";
import AppStore from "../Assets/appstore.png";
import "./footer.css";

const Footer = () => {
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
    <div className="flex py-10 items-center justify-center flex-col ">
      <p className="text-center text-3xl hero-heading2 mt-5">Download Now</p>
      <p className="text-center text-lg hero-subheading2 mt-5">
        Break the cycle of confusion and unsuccessful practices. Master
        mindfulness principles and seamlessly <br></br>integrate them into your life with
        MetaMindful. Download Now (CTA)
      </p>
      <input
              type="text"
              placeholder="abc@gmail.com"
              className="input p-2 w-2/3 border border-gray-300 rounded-xl mt-5"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
      <button
        className="py-3 px-7 rounded-full text-gray-800 items-center font-semibold mt-5"
        style={{ border: "1px solid #A7C18E", backgroundColor: "#A7C18E" }}
        onClick={handleBookDemo}
      >
        <p className="">Book a demo</p>
      </button>
      <p className="text-center text-lg mt-5">Available on</p>
      <img src={AppStore} className="h-10 mt-2 cursor-pointer" alt="appstore" />
    </div>
  );
};

export default Footer;
