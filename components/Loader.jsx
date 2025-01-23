"use client";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-redColor h-screen fixed inset-0 z-[100] grid place-items-center">
      <div className="">
        <h1 className="text-3xl xl:text-[5rem] flex font-bold text-white">
          {progress}%
        </h1>
        <p className="text-white pt-10">Please Wait...</p>
      </div>
    </div>
  );
};

export default Loader;
