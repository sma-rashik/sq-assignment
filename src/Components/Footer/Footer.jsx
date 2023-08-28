import React from "react";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" lg:px-4">
      <footer className="footer items-center px-4 pb-1">
        <div className="items-center grid-flow-col">
          <p className="flex items-center gap-2 text-gray-500">
            {" "}
            <span>© 2023, made with</span>
            <span className="text-red-500">
              <FaHeart></FaHeart>
            </span>
            <span>by PixinVent</span>
          </p>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end text-gray-500">
          <a>License</a>
          <a>More Themes</a>
          <a>Documentation</a>
          <a>Support</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
