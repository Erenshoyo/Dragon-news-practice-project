import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import userImg from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => alert("Log out successful"))
      .catch((error) => alert(error.code, error.message));
  };

  return (
    <div className="flex justify-between items-center md:grid md:grid-cols-3">
      {/* LEFT */}
      <div>
        {user && (
          <>
            Welcome, <span className="font-semibold">{user.displayName}</span>
          </>
        )}
      </div>

      {/* CENTER → DESKTOP MENU */}
      <div className="hidden md:flex gap-3 justify-center text-accent">
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

      {/* RIGHT */}
      <div className="flex justify-end items-center gap-3">
        {/* ✅ MOBILE — NOT LOGGED IN */}
        {!user && (
          <div className="flex justify-between items-center gap-3 md:hidden">
            <NavLink className="px-2 py-1 rounded-md text-accent" to="/">
              Home
            </NavLink>
            <Link to="/auth/login" className="btn btn-primary px-4">
              Login
            </Link>
          </div>
        )}

        {/* ✅ MOBILE — LOGGED IN (avatar dropdown) */}
        {user && (
          <div className="dropdown dropdown-end md:hidden">
            <label tabIndex={0} className="cursor-pointer">
              <img
                className="w-9 rounded-full"
                src={user.photoURL || userImg}
                alt="user"
              />
            </label>

            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-2"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/career">Career</Link>
              </li>

              <div className="divider my-1"></div>

              <li>
                <button onClick={handleLogOut}>Log out</button>
              </li>
            </ul>
          </div>
        )}

        {/* ✅ DESKTOP AVATAR + BUTTON */}
        <div className="hidden md:flex items-center gap-3">
          <img
            className="w-9 rounded-full"
            src={user ? user.photoURL : userImg}
            alt="user"
          />

          {user ? (
            <button onClick={handleLogOut} className="btn btn-primary px-6">
              Log out
            </button>
          ) : (
            <Link to="/auth/login" className="btn btn-primary px-6">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
