import React, { useState } from "react";
import { MdCheck, MdClose } from "react-icons/md";

export const SuccessMessages = ({data, isOpen, status}) => {
    
  return (
    <div className= {status ? "fixed flex justify-center items-center h-screen w-full z-50" : "hidden"}>
        <div className="bg-darkColor h-screen w-full absolute z-0 opacity-90"></div>

      <div className="bg-white rounded-xl p-10 w-[80%] text-darkColor md:w-[50%] lg:w-[30%] max-w-[90%] z-10 relative">
        <MdClose className="absolute right-0 -top-10 text-white text-3xl cursor-pointer" onClick={isOpen}/>
        <div className="grid place-items-center">
            <div className="rounded-full p-4 border-2 border-green-600">
                <MdCheck className="text-5xl text-green-600"/>

            </div>
                <h2 className="text-green-600 font-bold text-xl py-4 md:text-2xl">Success</h2>
                <p className="text-center pt-4">{data}</p>

                <button className="mt-20 bg-darkColor text-white py-2 px-8 rounded-lg text-sm">Home</button>
        </div>
      </div>
    </div>
  );
};

export const ErrorMessages = ({data, isOpen, status}) => {
    
  return (
    <div className= {status ? "fixed flex justify-center items-center h-screen w-full z-[1000]" : "hidden"}>
        <div className="bg-darkColor h-screen w-full absolute z-0 opacity-90"></div>

      <div className="bg-white rounded-xl p-10 w-[80%] text-darkColor md:w-[50%] lg:w-[30%] max-w-[90%] z-10 relative">
        <MdClose className="absolute right-0 -top-10 text-white text-3xl cursor-pointer" onClick={isOpen}/>
        <div className="grid place-items-center">
            <div className="rounded-full p-4 border-2 border-red-600">
                <MdClose className="text-5xl text-red-600"/>

            </div>
                <h2 className="text-red-600 font-bold text-xl py-4 md:text-2xl">Opps</h2>
                <p className="text-center pt-4">{data}</p>

                <button className="mt-20 bg-darkColor text-white py-2 px-8 rounded-lg text-sm" onClick={isOpen}>Try again</button>
        </div>
      </div>
    </div>
  );
};
