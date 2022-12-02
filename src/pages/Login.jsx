import React from "react";
import { Link } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import { BsApple, BsFacebook } from "react-icons/bs";

const Login = () => {
  return (
    <div className="max-w-[800px] h-screen mx-auto">
      <div className="h-[85%] flex-col items-center  p-11 ml-20 ">
        <h1 className="text-6xl  font-normal text-blue-500 ml-20 ">Sign In</h1>
        <form className="max-w-[1200] h-auto py-4  ">
          <div className="flex items-center mb-6 mt-9 ml-20 ">
            <div className="w-[90%]">
              <input
                className="bg-white border-2 border-gray-300 rounded-full w-full py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-red-500"
                id="inline-full-name"
                type="text"
                placeholder="Username"
              />
            </div>
          </div>
          <div className="flex items-center mb-6 mt-9 ml-20 ">
            <div className="w-[90%]">
              <input
                className="bg-white border-2 border-gray-300 rounded-full w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-500"
                id="inline-full-name"
                type="text"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="flex items-center mb-6 mt-9 ml-20 ">
            <div className="flex justify-between w-full  ">
              <div>Remember me</div>

              <Link to="/forgot-password">
                <button className="mr-14 text-blue-500">
                  Forgot Password?
                </button>
              </Link>
            </div>
          </div>
          <div className="flex-col mb-10 ml-20 ">
            <div className=" w-[460px]">
              <button
                className="w-full py-2.5  mx-auto mt-24 shadow bg-blue-500 px-10  hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white text-3xl font-normal rounded-full"
                type="button"
              >
                SIGN IN
              </button>
            </div>
            <div className="mt-10">
              New to the website?
              <Link to="/register">
                <button className="ml-5 text-red-500"> Sign up Now</button>
              </Link>
            </div>
          </div>
          <div className="flex-col rounded-xl max-w-[500px] h-auto p-9 bg-zinc-100 mx-auto">
            <div className="text-center mb-5 mt-2">Or sign-in with</div>
            <div className="flex justify-around mt-5">
              <BsFacebook style={{ color: "#1773EA", fontSize: "3rem" }} />
              <FcGoogle style={{ fontSize: "3rem" }} />
              <BsApple style={{ fontSize: "3rem" }} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
