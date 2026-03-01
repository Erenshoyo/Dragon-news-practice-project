import React from "react";
import swimmingImage from "../../assets/swimming.png";
import classImage from "../../assets/class.png";
import playgroundImage from "../../assets/playground.png";

const Qzone = () => {
  return (
    <div className="bg-base-200 p-3 space-y-8">
      <h2 className="font-semibold">QZone</h2>
      <div className="flex flex-col justify-center items-center gap-5 pb-5">
        <img src={swimmingImage} alt="" />
        <img src={classImage} alt="" />
        <img src={playgroundImage} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
