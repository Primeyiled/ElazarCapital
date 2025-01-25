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
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-3xl xl:text-[5rem] flex font-bold text-white">
          {progress}%
        </h1>
        <p className="text-white md:pt-10 pt-4">Please Wait...</p>
      </div>
    </div>
  );
};

export default Loader;
