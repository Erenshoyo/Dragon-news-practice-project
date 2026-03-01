import React, { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const [err, setErr] = useState("");
  const { logIn, user, facebookSignIn, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  if (user) return <Navigate to={from} replace></Navigate>;

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then(() => {
        // Signed in
        alert("Login successful.");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        // alert(errorCode, errorMessage);
        setErr(errorCode);
      });
  };

  const handleFacebookLogIn = () => {
    facebookSignIn()
      .then(() => {
        // console.log(result.user);
      })
      .catch(() => {
        // // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;

        // console.log(errorCode, errorMessage);
      });
  };

  const handleGoogleLogIn = () => {
    googleSignIn()
      .then(() => {
        // console.log(result.user);
      })
      .catch(() => {
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;

        // console.log(errorCode, errorMessage);
      });
  };
  return (
    <div className="my-44 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-sm p-8">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Login your account
        </h2>

        <hr className="mb-6" />

        {/* Form */}
        <form onSubmit={handleLogIn} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email address
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-2 bg-gray-100 rounded-md outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 bg-gray-100 rounded-md outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
            <p className="text-accent text-[12px] hover:text-secondary cursor-pointer">
              Forgot password?
            </p>
          </div>
          {err && (
            <p className="text-center text-[12px] text-secondary">{err}</p>
          )}

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-gray-700 hover:bg-gray-800 text-white py-2 rounded-md font-medium transition"
          >
            Login
          </button>
        </form>
        <div className="flex flex-col gap-1 mt-4">
          {/* Google */}
          <button
            onClick={handleGoogleLogIn}
            className="btn bg-white hover:bg-[#d72050] hover:text-white text-black border-[#d72050]"
          >
            <FcGoogle />
            Login with Google
          </button>

          {/* Facebook */}
          <button
            onClick={handleFacebookLogIn}
            className="btn bg-white hover:bg-[#403f3f] hover:text-white border-[#403f3f]"
          >
            <FaFacebook size={15} />
            Login with Facebook
          </button>
        </div>
        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-5">
          Don’t Have An Account ?{" "}
          <Link
            to="/auth/register"
            className="text-red-500 font-medium cursor-pointer hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
