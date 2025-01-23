import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdArrowForward, MdPlayArrow } from "react-icons/md";

const Hero = () => {
  return (
    <div className="w-full h-full 2xl:h-[100vh]   px-4 xl:px-20 flex justify-center items-center">
      <div className="xl:flex justify-between items-center max-w-7xl mx-auto pt-20 xl:py-6 gap-10">
        <div className=" xl:w-[800px] 2xl:w-full">
          <div className="font-bold text-[3.2rem] inline-block bg-gradient-to-r from-[#97CECF]  to-white text-transparent bg-clip-text md:text-7xl lg:text-[6rem] leading-snug text-center xl:text-left">
            Control & balance your
            <span className="inline-block align-middle">
              <Image
                src="/heroAsset.png"
                alt="hero-icon"
                width={500}
                height={500}
                className="w-[70px] md:w-[120px] inline-block align-middle mx-2 mb-5"
              />
            </span>
            finances
          </div>
          <div className="flex gap-8 flex-col xl:flex-row just-center items-center mt-10">
            <Link
              href="/register"
              className="bg-redColor text-white py-4 px-6 md:py-6 font-semibold flex gap-2 rounded-lg items-center"
            >
              Get Started <MdArrowForward className="size-5" />
            </Link>
            {/* <Link
              href="/demo"
              className="flex gap-2 text-gray-300 font-semibold items-center"
            >
              Watch tutorial <MdPlayArrow className="size-5" />
            </Link> */}
          </div>
        </div>

        <div className="mt-6 xl:mt-0 w-full flex lg:justify-end justify-center">
          <img
            src="/hand.png"
            alt="hero-image"
            className="w-full xl:w-[600px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
