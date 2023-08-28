import React, { useEffect, useState } from "react";
import Navigation from "../Navigation/Navigation";
import Sidebar from "../Sidebar/Sidebar";
import Layerone from "../Layerone/Layerone";
import Layertwo from "../Layertwo/Layertwo";
import LayerThree from "../Layerthree/LayerThree";
import {
  FaArrowCircleUp,
  FaArrowRight,
  FaArrowUp,
  FaRegSun,
} from "react-icons/fa";

const Home = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="">
      <Navigation></Navigation>
      <Layerone></Layerone>
      <Layertwo></Layertwo>
      <LayerThree></LayerThree>
      <div className="sticky bottom-2 flex items-end justify-end mt-5 lg:mr-8">
        <button className="btn bg-red-600 btn-sm text-white">Buy Now</button>
        {showTopBtn && (
          <button
            onClick={goToTop}
            className="btn bg-blue-500 text-white rounded-full btn-sm ml-3"
          >
            <FaArrowUp></FaArrowUp>
          </button>
        )}
      </div>
      <div className="sticky bottom-1/2 flex items-end justify-end text-xl text-white rounded-l-lg">
        <button className="rounded-l-lg p-3 bg-blue-500">
          {" "}
          <FaRegSun></FaRegSun>
        </button>
      </div>
    </div>
  );
};

export default Home;
