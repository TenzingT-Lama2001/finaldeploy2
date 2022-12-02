import React from "react";
import { MdEmail } from "react-icons/md";
const ForgotByMail = () => {
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
        <div className="flex-col  w-[800px] mt-10  ">
          <div className="  w-[30%] mx-auto">
            <MdEmail style={{ fontSize: "180px" }} />
          </div>

          <h2 className="mt-10 text-center text-2xl ml-2 ">
            Enter your e-mail address
          </h2>
          <div className=" w-[50%] mx-auto ">
            <input
              className="bg-gray-300 mt-10 border-2 border-gray-300 rounded-xl py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-red-500 w-full ml-5 "
              type="text"
            />
          </div>
          <button
            className="w-[80%] py-2.5 mt-24 shadow bg-blue-500 px-10  hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white text-3xl font-normal rounded-full mx-auto ml-20"
            type="button"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotByMail;
