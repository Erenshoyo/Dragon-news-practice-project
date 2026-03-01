import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";
const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <img src={logo} alt="" />
      <p className="text-accent">Journalism Without Fear and Favour</p>
      <p className="font-semibold text-accent text-lg">{format(new Date(), "EEEE, MMMM dd, yyyy")}</p>
    </div>
  );
};

export default Header;