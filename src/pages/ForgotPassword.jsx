import React from "react";

import ForgotSection from "../sections/ForgotSection";
const ForgotPassword = () => {
  return (
    <div className="h-screen m-auto ">
      <div className="max-w-[900px] h-[800px] m-auto  py-10 px-32 ">
        <div>
          <h1 className="text-6xl font-semibold text-blue-700 mt-16">
            Forgot Password?
          </h1>
        </div>
        <div>
          <p className=" w-[300px] mt-16 font-medium text-xl">
            Please select one of the contact methods to reset your password.
          </p>
        </div>
        <ForgotSection />
      </div>
    </div>
  );
};

export default ForgotPassword;
