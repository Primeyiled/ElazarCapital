import React from "react";
import TransitionWrapper from "./TransitionWrapper";
import Link from "next/link";

const CTA = () => {
  return <div
        style={{ backgroundImage: "url(/bgAbout.png)" }}
        className="py-28 lg:py-48 px-8 bg-center bg-cover my-20"
      >
        <div className="max-w-7xl mx-auto">
          <TransitionWrapper>
            <h2 className="font-bold text-3xl lg:text-5xl/[4rem] max-w-2xl text-white">
              Ready to Grow Your Wealth With Us?
            </h2>
          </TransitionWrapper>
          <TransitionWrapper>
            <p className="py-10 text-[#a0cdcd] lg:w-[400px] text-lg">
              Our financial experts are standing by to help you make the most of
              your investments.
            </p>
          </TransitionWrapper>
          <TransitionWrapper>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/register"
                className="bg-redColor hover:bg-red-700 py-4 px-6 rounded-lg transition-colors duration-300"
              >
                Open an Account
              </Link>
             
            </div>
          </TransitionWrapper>
        </div>
      </div>
};

export default CTA;
