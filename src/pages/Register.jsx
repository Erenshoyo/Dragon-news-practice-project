import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { user, createUser, setUser, updateUser } = useContext(AuthContext);
  const [err, setErr] = useState("");

  if (user) {
    return <Navigate to="/"></Navigate>;
  }
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    if (name.length === 0) {
      setErr("Provide your name.");
      return;
    } else {
      setErr("");
    }
    const imageURL = form.imageURL.value;
    if (imageURL === "") {
      setErr("Provide Image URL.");
      return;
    } else {
      setErr("");
    }
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: imageURL })
        .then(() => {
          setUser({ ...user, displayName: name, photoURL: imageURL });
        })
        .catch(() => {
          // console.log(error);
          setUser(user);
        });
        // console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        // alert(errorCode, errorMessage);
        setErr(errorCode);
      });
  };

  return (
    <div className="my-34 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-sm p-8">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Register your account
        </h2>

        <hr className="mb-6" />

        {/* Form */}
        <form onSubmit={handleRegister} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Your name
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 bg-gray-100 rounded-md outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          {/* Image */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Photo URL
            </label>
            <input
              name="imageURL"
              type="text"
              placeholder="Enter your image URL"
              className="w-full px-4 py-2 bg-gray-100 rounded-md outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

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
          </div>
          {err && <p className="text-secondary">{err}</p>}
          {/* Button */}
          <button
            type="submit"
            className="w-full bg-gray-700 hover:bg-gray-800 text-white py-2 rounded-md font-medium transition"
          >
            Register
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-5">
          Already have an account?{" "}
          <Link
            to="/auth/login"
            className="text-red-500 font-medium cursor-pointer hover:underline"
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Register;
