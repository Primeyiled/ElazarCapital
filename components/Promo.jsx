import Link from "next/link";
import React from "react";

const Promo = () => {
  return (
    <div
      className=""
      style={{ background: "linear-gradient(0deg, #b3d4d8, #deece8)" }}
    >
      <div className="py-20 lg:py-40 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row-reverse lg:justify-start gap-8 w-full items-center">
          <div className="grid gap-6 w-full place-items-center">
            <h2 className="font-bold text-3xl py-6 lg:text-5xl text-center max-w-2xl mx-auto text-greenColor">
              Your financial peace of mind is our Total priority
            </h2>
            <p className="text-gray-500 md:text-lg lg:w-[400px] text-center">
              At Plax, we understand the importance of the security and privacy
              of your financial data.
            </p>

            <div className="mt-16">
              <Link
                href="/"
                className="bg-redColor rounded-xl py-6 px-8 font-semibold"
              >
                Explore More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;
