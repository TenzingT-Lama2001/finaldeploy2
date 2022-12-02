import React from "react";
import InfoTracking from "../assets/info_tracking.png";

const Section1 = () => {
  return (
    <>
      <div className="relative flex  gap-3 mt-32 px-28 h-screen  ">
        <img src={InfoTracking} alt="" width={1200} height={100} />
        <div className="flex flex-col w-1/2  mr-28  items-end mb-5 ">
          <h2 className="font-bold text-3xl mb-3">
            Our business management <br />
            software includes
          </h2>
          <ul className="ml-0 text-xl font-medium  ">
            <li> User management </li>
            <li> Attendance system</li>
            <li>Staff management </li>
            <li> Subscription management</li>
            <li>Revenue management </li>
            <li>Expense management </li>
            <li>Time view graph </li>
            <li>Database auto-backup</li>
            <li>Monthly software update</li>
            <li>Yearly software upgrade </li>
          </ul>
        </div>
      </div>
      <div className="flex-col absolute top-[10%] left-10 ">
        <div className="h-[12px] w-[12px] bg-blue-800 rounded-full mt-7"></div>
        <div className=" h-[12px] w-[12px] bg-blue-800 rounded-full mt-7"></div>
        <div className=" h-[12px] w-[12px] bg-blue-800 rounded-full mt-7"></div>
        <div className=" h-[12px] w-[12px] bg-blue-800 rounded-full mt-7"></div>
        <div className=" h-[12px] w-[12px] bg-blue-800 rounded-full mt-7"></div>
      </div>
    </>
  );
};

export default Section1;
