import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="max-w-[800px] h-screen m-auto ">
      <div className="h-[85%]  flex-col items-center mt-[3rem] p-11">
        <h1 className="text-6xl  font-normal text-red-500">Sign Up</h1>
        <form className="max-w-[1200] h-[800px] py-4  mx-auto">
          <div className="flex items-center mb-6 mt-9">
            <div className="w-2/3">
              <input
                className="bg-white border-2 border-gray-300 rounded-full w-full py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-red-500"
                id="inline-full-name"
                type="text"
                placeholder="Username"
              />
            </div>
          </div>
          <div className="flex items-center mb-6 mt-9">
            <div className="w-2/3">
              <input
                className="bg-white border-2 border-gray-300 rounded-full w-full py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-red-500"
                id="inline-full-name"
                type="text"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="flex items-center mb-6 mt-9">
            <div className="w-2/3">
              <input
                className="bg-white border-2 border-gray-300 rounded-full w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-500"
                id="inline-full-name"
                type="text"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="flex items-center mb-6 mt-9">
            <div className="w-2/3">
              <input
                className="bg-white border-2 border-gray-300 rounded-full w-full py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-red-500"
                type="password"
                placeholder="Confirm Password"
              />
            </div>
          </div>
          <div className="flex items-center mb-6 mt-9">
            <label className="text-gray-500 font-bold">
              <input className="mr-2" type="checkbox" />
              <span className="text-sm">
                I read and agree to Terms & Conditions
              </span>
            </label>
          </div>

          <div className="flex-col items-center">
            <div className=" w-[460px]">
              <button
                className="w-full py-2.5 mt-24 shadow bg-red-500 px-10  hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white text-3xl font-normal rounded-full"
                type="button"
              >
                SIGN UP
              </button>
            </div>
            <div className="mt-10">
              Already have an account?
              <Link to="/login">
                <button className="ml-2"> Log in</button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
