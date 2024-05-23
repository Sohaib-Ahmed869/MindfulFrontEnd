import React from "react";
import PlayStore from "../Assets/PlayStore.png";
import AppStore from "../Assets/appstore.png";

const Footer = () => {
  return (
    <div className="flex border-t border-gray-300 py-10 items-center justify-end flex-row">
      <p className="text-center text-lg mr-10">Available on</p>
      <img src={AppStore} className="h-10 mr-10" alt="appstore" />
      <img src={PlayStore} className="h-10 mr-20" alt="playstore" />
    </div>
  );
};

export default Footer;
