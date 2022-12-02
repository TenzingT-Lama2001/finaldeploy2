import React from "react";
import NearMeIcon from "@mui/icons-material/NearMe";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Divider from "@mui/material/Divider";
import Map from "../../assets/map.jpg";
const MainFooter = () => {
  return (
    <footer className="flex justify-around p-6 bg-zinc-100">
      <img src={Map} className="object-contain h-48 w-96" />
      <div className="flex-col">
        <div className="flex space-x-7">
          <NearMeIcon style={{ color: "blue" }} />

          <p>Budhanilkantha, Kathmandu, Nepal</p>
        </div>
        <div className="flex space-x-7 mt-5">
          <PhoneIcon style={{ color: "blue" }} />
          <p>9841878394, 977-1-4118745, 4110987</p>
        </div>
        <div className="flex space-x-7 mt-5">
          <EmailIcon style={{ color: "blue" }} />
          <p>solutiontube11@gmail.com</p>
        </div>

        <div className="flex space-x-9 mt-10">
          <FacebookIcon style={{ fontSize: 35 }} />
          <InstagramIcon style={{ fontSize: 35 }} />
          <TwitterIcon style={{ fontSize: 35 }} />
        </div>
      </div>
      <Divider orientation="vertical" flexItem />
      <div className="flex-col ">
        <h3 className="text-xl font-bold py-4">Get the latest update</h3>
        <p>
          Get to know the latest updates on the management software and
          invitations.
        </p>
        <form class="w-full max-w-sm mt-10">
          <div class="flex items-center border-b border-black py-2">
            <input
              class=" bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2  focus:outline-none"
              type="text"
              placeholder="Enter your email"
              aria-label="Enter your email"
            />
            <button
              class="flex-shrink-0  bg-white hover:bg-black hover:text-white border-white  text-sm border-4 text-black py-1 px-2 rounded"
              type="button"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </footer>
  );
};

export default MainFooter;
