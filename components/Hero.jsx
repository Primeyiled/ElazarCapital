"use client";
import Link from "next/link";
import React, { useRef, useEffect } from "react";
import { MdArrowForward } from "react-icons/md";
import { gsap } from "gsap";
import { useSelector } from "react-redux";
import CryptoMarquee from "./CryptoMarquee";
import GoogleTranslate from "./GoogleTranslate";

const Hero = () => {
  const { loading } = useSelector((state) => state.message);

  const heroTextRef = useRef(null);
  const heroSubtextRef = useRef(null);
  const heroButtonRef1 = useRef(null); // Ref for the first button
  const heroButtonRef2 = useRef(null); // Ref for the second button

  useEffect(() => {
    if (!loading) {
      // Ensure initial styles are set before animations
      gsap.set(
        [heroTextRef.current, heroSubtextRef.current, heroButtonRef1.current, heroButtonRef2.current],
        {
          opacity: 1,
          y: 0,
        }
      );

      // Animation for the main text
      gsap.from(heroTextRef.current, {
        y: -50,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.5,
        clearProps: "all", // Reset all animated properties after the animation
      });

      // Animation for the subtext
      gsap.from(heroSubtextRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 1,
        clearProps: "all", // Reset all animated properties after the animation
      });

      // Animation for the first button
      gsap.from(heroButtonRef1.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        delay: 1.5,
        clearProps: "all", // Reset all animated properties after the animation
      });

      // Animation for the second button
      gsap.from(heroButtonRef2.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        delay: 1.5,
        clearProps: "all", // Reset all animated properties after the animation
      });
    }
  }, [loading]);

  return (
    <div className="w-full flex justify-center items-center relative py-10 md:py-32">
      <div className="max-w-3xl px-4 overflow-hidden">
        <div className="">
          <GoogleTranslate />
        </div>

        <div className="">
          <CryptoMarquee />
        </div>

        <br />

        {/* Main Heading */}
        <h1
          ref={heroTextRef}
          className="font-bold text-6xl lg:text-[5rem] bg-gradient-to-r from-[#97CECF] to-white text-transparent bg-clip-text leading-tight mb-2"
        >
          Invest for the Future.
        </h1>

        {/* Subtext */}
        <p
          ref={heroSubtextRef}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10"
        >
          Work with all the necessary information and tools to boost money flow
          from your capital investment using SwizzFunds!
        </p>

        {/* Call-to-Action Button */}
        <div className="flex items-center gap-4">
          <Link
            ref={heroButtonRef1} // Use heroButtonRef1 for the first button
            href="/register"
            className="bg-redColor text-white py-4 px-8 md:py-5 md:px-10 font-semibold flex gap-2 rounded-lg items-center hover:bg-red-600 transition-all duration-300 whitespace-nowrap"
          >
            Get Started <MdArrowForward className="size-5" />
          </Link>
          <Link
            ref={heroButtonRef2} // Use heroButtonRef2 for the second button
            href="/login"
            className="bg-white text-darkColor py-4 px-8 md:py-5 md:px-10 font-semibold flex gap-2 rounded-lg items-center hover:bg-gray-600 transition-all duration-300 whitespace-nowrap"
          >
            Log in <MdArrowForward className="size-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;