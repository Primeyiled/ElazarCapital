import React from "react";
import Navbar from "./Navbar";

const Heading = ({page, title, tab}) => {
  return <div>
    <Navbar/>
    <div className="text-center py-20 px-8">
        <p className="text-redColor py-6">{page}</p>
        <h1 className="text-5xl md:text-7xl font-bold max-w-3xl mx-auto">{title}</h1>
        <p className="py-8 flex gap-4 justify-center">Home <span>|</span> <span className="text-gray-500">{tab}</span></p>
        </div>    
  </div>;
};

export default Heading;
