import React, { useContext } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../provider/AuthProvider";

const SocialLogin = () => {
  const { facebookSignIn, googleSignIn, user } = useContext(AuthContext);
  const handleFacebookLogIn = () => {
    facebookSignIn()
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
  const handleGoogleLogIn = () => {
    googleSignIn()
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
  return (
    <div className="justify-end ">
      {user ? (
        <></>
      ) : (
        <>
          {" "}
          <h2 className="font-bold mb-3">Login With:</h2>
          <div className="flex flex-col gap-3">
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
        </>
      )}
    </div>
  );
};

export default SocialLogin;
