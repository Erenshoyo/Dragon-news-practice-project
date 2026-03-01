import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import userImg from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("Log out successful");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert(errorCode, errorMessage);
      });
  };
  return (
    <div className="grid grid-cols-3 items-center">
      <div className="">
        {user ? (
          <>
            Welcome, <span className="font-semibold">{user.displayName}</span>
          </>
        ) : (
          "" // Or null
        )}
      </div>
      <div className="flex gap-3 justify-center text-accent">
        <NavLink className="px-2 py-1 rounded-md" to="/">
          Home
        </NavLink>
        <NavLink className="px-2 py-1 rounded-md" to="/about">
          About
        </NavLink>
        <NavLink className="px-2 py-1 rounded-md" to="/career">
          Career
        </NavLink>
      </div>
      <div className="flex justify-end items-center gap-3">
        <img
          className="w-9 rounded-full"
          src={`${user ? user.photoURL : userImg}`}
          alt=""
        />
        {user ? (
          <button onClick={handleLogOut} className="btn btn-primary px-8">
            Log out
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-8">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
