import React from "react";
import Background from "../assets/Background.png";
import Line from "../assets/line1.png";
import HeroCard from "../sections/HeroCard";
import Section2 from "../sections/Section2";
import SearchIcon from "@mui/icons-material/Search";
import Profile from "../assets/profile.jpg";
import Section1 from "../sections/Section1";
const Home = () => {
  return (
    <>
      <main
        className=" h-screen relative bg-gradient-to-r
      from-[#CACCFC] to-[#FFD484]"
      >
        <section className="grid place-items-center p-20 relative font-bold text-[60px]">
          <div className="">
            <h2 className="">Minimalizm is</h2>
            <h2 className="">Our priority</h2>
            <img
              src={Line}
              className="absolute top-[73%] left-[47%]"
              width={250}
              height={230}
            />
          </div>
        </section>

        <section className="grid place-items-center text-sm font-normal mb-16 mt-[-20px]">
          <div className="">
            <p className="font-semibold text-lg">
              Get your system organized to help your business
              <br />
              grow with our next generation technology.
            </p>
          </div>
        </section>

        {/* <div className="w-[900px] h-[497px] bg-slate-100 flex justify-center items-center">
         
      </div> */}
        <img
          src={Background}
          className="absolute bottom-0 z-0 bg-cover w-full h-full "
        />

        <div className="flex absolute left-[25%] bottom-0">
          <div className="bg-white h-[400px] w-[250px] z-10 rounded-t-xl shadow-md">
            <div className=" bg-blue-800 h-[35px] w-[95%] mt-5 rounded-xl mx-auto shadow-md"></div>
          </div>
          <div className="relative bg-white h-[400px] w-[850px] z-10 rounded-t-xl ml-10 shadow-md  ">
            <div className=" w-[20%] absolute right-20 top-[-10px]">
              <input
                className=" bg-gray-300 mt-10 border-2 border-gray-300 rounded-xl py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-red-500  "
                type="text"
                placeholder="Search here"
              />
            </div>
            <div className="grid grid-cols-3 gap-10 mt-32">
              <div className="flex items-center bg-slate-100 w-[250px] h-[100px]  ml-5 rounded-xl">
                <img
                  src={Profile}
                  width={55}
                  height={45}
                  className="rounded-full ml-3"
                />
                <div className="flex-col ml-5">
                  <p>Namrata Sahi</p>
                  <p>Admin</p>
                </div>
              </div>
              <div className="flex items-center bg-slate-100 w-[250px] h-[100px]  rounded-xl">
                <img
                  src={Profile}
                  width={55}
                  height={45}
                  className="rounded-full ml-3"
                />
                <div className="flex-col ml-5">
                  <p>Namrata Sahi</p>
                  <p>Admin</p>
                </div>
              </div>
              <div className="flex items-center bg-slate-100 w-[250px] h-[100px] mr-9  rounded-xl">
                <img
                  src={Profile}
                  width={55}
                  height={45}
                  className="rounded-full ml-3"
                />
                <div className="flex-col ml-5">
                  <p>Namrata Sahi</p>
                  <p>Admin</p>
                </div>
              </div>
              <div className="flex items-center bg-slate-100 w-[250px] h-[100px] ml-5   rounded-xl">
                <img
                  src={Profile}
                  width={55}
                  height={45}
                  className="rounded-full ml-3"
                />
                <div className="flex-col ml-5">
                  <p>Namrata Sahi</p>
                  <p>Admin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Section1 />
      <Section2 />
    </>
  );
};

export default Home;
