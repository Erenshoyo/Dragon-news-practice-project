import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const FindUs = () => {
  return (
    <div className="">
      <h2 className="font-semibold ">Find Us On:</h2>
      <div className="join join-vertical gap-2 w-full">
        <button className="btn join-item justify-start bg-base-100 ">
          <FaFacebookSquare />
          Facebook
        </button>
        <button className="btn join-item justify-start bg-base-100 ">
          <BsTwitterX />
          Twitter
        </button>
        <button className="btn join-item justify-start bg-base-100 ">
          <FaSquareInstagram />
          Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
