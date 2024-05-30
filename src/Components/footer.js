import React from "react";
import PlayStore from "../Assets/PlayStore.png";
import AppStore from "../Assets/appstore.png";

const Footer = () => {
  return (
    <div className="flex border-t border-gray-300 py-10 items-center justify-end flex-row footer">
      <p className="text-center text-lg mr-10">Available on</p>
      <img src={AppStore} className="h-10 mr-10 cursor-pointer" alt="appstore" />
    </div>
  );
};

export default Footer;
