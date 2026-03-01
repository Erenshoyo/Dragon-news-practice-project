import React from "react";
import SocialLogin from "./SocialLogin";
import FindUs from "./FindUs";
import Qzone from "./Qzone";

const RightAside = () => {
  return (
    <div>
      <div className="flex flex-col space-y-8">
        <SocialLogin></SocialLogin>
        <FindUs></FindUs>
        <Qzone></Qzone>
      </div>
    </div>
  );
};

export default RightAside;
