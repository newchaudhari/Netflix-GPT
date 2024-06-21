import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="text-white">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="Background"
        />
      </div>
      <form className="w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 rounded text-white bg-opacity-80">
        <h1 className="text-3xl font-bold py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <input
          type="text"
          placeholder="Email or mobile number"
          className="p-4 my-4 w-full bg-gray-900 border bg-opacity-30 border-gray-300 rounded"
        />
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Fullname"
            className="p-4 my-4 w-full bg-gray-900 border bg-opacity-30 border-gray-300 rounded"
          />
        )}

        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-900 border bg-opacity-30 border-gray-300 rounded"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer font-bold" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up now."
            : "Already registered! Sign In now."}
        </p>
      </form>
    </div>
  );
};

export default Login;