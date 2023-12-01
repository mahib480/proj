import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="relative flex pt-5">
        <div className=" absolute top-[-100px] right-[-170px]  z-[-2] max-w-[700px]">
            <img src="/circle.png" alt="" />
        </div>
        <div className="flex flex-col justify-content-center items-start mt-10 gap-2 mx-20">
        <p className="px-3 py-2 bg-red-100 rounded-full durarion-2 flex items-center justify-center">Not just another ‘online’ matrimony app</p>
          <h1 className="primary-heading max-w-[600px] font-bold "> 
            Find Love Like Never Before
          </h1>
         <p className="text-gray-600 max-w-[500px] mt-4">Marriage is knowing each other’s buttons and pressing them repeatedly when bored. Here to help find the buttons!</p>
         <div className="flex flex-row gap-2 mt-10">
          <button className="bg-black text-white px-2 py-2 rounded-md">
            App Store
          </button>
          <button className="bg-black text-white px-2 py-2 rounded-md">
            Google Play
          </button>
          </div>
        </div>
        <div className="w-max-[600px]  flex-1 ">
          <img src="/hero.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;