import React from "react";
import { Link } from "react-router-dom";
import { HiDeviceMobile } from "react-icons/hi";
import { MdEmail } from "react-icons/md";

const ForgotSection = () => {
  return (
    <div className="flex-col mt-14">
      <Link to="/forgot-by-sms">
        <div className="flex max-w-[500px] p-9  rounded-3xl shadow-md">
          <HiDeviceMobile style={{ fontSize: "120px" }} />
          <div className="flex-col ml-10 mt-3">
            <p className="font-semibold text-lg">Send via SMS:</p>
            <p className="mt-5 text-3xl">******431</p>
          </div>
        </div>
      </Link>
      <Link to="/forgot-by-email">
        <div className="flex max-w-[500px] p-8  rounded-3xl shadow-md mt-10">
          <MdEmail style={{ fontSize: "120px" }} />
          <div className="flex-col ml-10 mt-3">
            <p className="font-semibold text-lg">Send via E-mail:</p>
            <p className="mt-5 text-3xl">******ek@gmail.com</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ForgotSection;
