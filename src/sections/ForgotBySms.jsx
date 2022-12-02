import React from "react";
import { MdEmail } from "react-icons/md";
import { HiDeviceMobile } from "react-icons/hi";
const ForgotBySms = () => {
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
        <div className="flex-col  w-[800px] mt-10 ">
          <div className="  w-[25%] mx-auto">
            <HiDeviceMobile style={{ fontSize: "180px" }} />
          </div>

          <h2 className="mt-10 text-center text-2xl">
            Enter the 4-digit recovery code
          </h2>
          <div className=" flex  ">
            <input
              className="w-[5%] ml-60 mr-10 bg-gray-300 mt-10 border-2 border-gray-300 rounded-xl py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-red-500  "
              type="text"
            />
            <input
              className="w-[5%] mr-10 bg-gray-300 mt-10 border-2 border-gray-300 rounded-xl py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-red-500  "
              type="text"
            />
            <input
              className="w-[5%] mr-10 bg-gray-300 mt-10 border-2 border-gray-300 rounded-xl py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-red-500  "
              type="text"
            />
            <input
              className="w-[5%] mr-10 bg-gray-300 mt-10 border-2 border-gray-300 rounded-xl py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-red-500  "
              type="text"
            />
          </div>
          <button
            className="w-[80%] py-2.5 mt-24 mx shadow bg-blue-500 px-10  hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white text-3xl font-normal rounded-full mx-auto ml-20"
            type="button"
          >
            Enter
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotBySms;
