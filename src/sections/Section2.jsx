import React from "react";
import Linux from "../assets/linux.png";
import Mac from "../assets/mac.png";
import Windows from "../assets/windows.png";

const Section2 = () => {
  return (
    <section className="max-w-full my-10 h-screen mt-48">
      <div className="max-w-[1000px] h-[700px] p-10 m-auto shadow-md mt-10 ">
        <h2 className="font-bold text-3xl text-center p-5 ">
          Download software
        </h2>
        <p className="font-normal text-center p-6  max-w-[600px] mx-auto">
          Choose one of the platform to install the software. Users needs to be
          subscribed to the service in order to use the application
        </p>

        <div className="flex justify-around py-8 mt-10">
          <div>
            <img
              src={Windows}
              alt=""
              className="w-[150px] h-[200px] object-contain"
            />
            <button className="rounded-3xl bg-green-400 font-semibold text-white py-2 px-7 my-3 text-center">
              Download
            </button>
          </div>
          <div>
            <img
              src={Mac}
              alt=""
              className="w-[150px] h-[200px] object-contain"
            />
            <button className="rounded-3xl bg-green-400 font-semibold text-white py-2 px-7 my-3 text-center">
              Download
            </button>
          </div>
          <div>
            <img
              src={Linux}
              alt=""
              className="w-[150px] h-[200px] object-contain"
            />
            <button className="rounded-3xl bg-green-400 font-semibold text-white py-2 px-7 my-3 text-center">
              Download
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
