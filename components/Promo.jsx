import Link from "next/link";
import React from "react";
import TransitionWrapper from "./TransitionWrapper";

const Promo = () => {
  return (
    <div
      className=""
      style={{ background: "linear-gradient(0deg, #b3d4d8, #deece8)" }}
    >
      <div className="py-20 lg:py-40 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row-reverse lg:justify-start gap-8 w-full items-center">
          <div className="grid gap-6 w-full place-items-center">
            <TransitionWrapper>
              <h2 className="font-bold text-3xl py-6 lg:text-5xl/[4rem] text-center max-w-2xl mx-auto text-greenColor">
                Your financial peace of mind is our Total priority
              </h2>
            </TransitionWrapper>
            <TransitionWrapper>
              <p className="text-gray-500 md:text-lg lg:w-[400px] text-center">
                At ElazarCapital, we understand the importance of the security
                and privacy of your financial data.
              </p>
            </TransitionWrapper>
            <TransitionWrapper>
              <div className="mt-16">
                <Link
                  href="/"
                  className="bg-redColor rounded-xl py-6 px-8 font-semibold"
                >
                  Explore More
                </Link>
              </div>
            </TransitionWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;
