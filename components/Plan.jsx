"use client";
import {
  CryptoPlans,
  Dailyplans,
  EstatePlans,
  ForexPlans,
  GoldPlans,
  Monthlyplans,
  plans,
  SilverPlans,
  StockPlans,
  TwoYearsplans,
  Yearlyplans,
} from "@/constants/data";
import Link from "next/link";
import React, { useState } from "react";
import { MdCheck } from "react-icons/md";
import TransitionWrapper from "./TransitionWrapper";

const Plan = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [plans, setPlans] = useState(CryptoPlans);

  const handleToggle = (index) => {
    setActiveIndex(index);
    if (index === 0) {
      setPlans(CryptoPlans);
    } else if (index === 1) {
      setPlans(EstatePlans);
    } else if (index === 2) {
      setPlans(GoldPlans);
    } 
  };

  return (
    <div className="py-20 lg:py-28 px-6 max-w-7xl mx-auto ">
      <div className="text-center">
        <TransitionWrapper>
          <h1 className="font-bold text-3xl lg:text-6xl/[5rem] xl:max-w-2xl mx-auto">
            Choose your Plan and Transform your Finances
          </h1>
        </TransitionWrapper>
        <TransitionWrapper>
          <p className=" py-6 text-[#a0cdcd]">
            ElazarCapital has the perfect plan to help you achieve your
            financial goals.
          </p>
        </TransitionWrapper>
      </div>

      <div className="flex flex-wrap gap-10 mt-10">
        <div className="w-full bg-greenColor rounded-full p-2">
          <div className="flex justify-between items-center gap-1 xs:gap-8 text-xs lg:text-lg overflow-x-auto">
            {["Crypto Plans", "Real Estate Plans","Gold Plans"].map(
              (plan, index) => (
                <span
                  key={index}
                  onClick={() => handleToggle(index)}
                  className={
                    activeIndex === index
                      ? "bg-white text-greenColor p-2 xs:p-4 lg:p-6 rounded-xl w-full text-center font-semibold duration-700 whitespace-nowrap"
                      : "text-white p-4 lg:p-6 rounded-xl w-full text-center font-semibold cursor-pointer whitespace-nowrap"
                  }
                >
                  {plan}
                </span>
              )
            )}
          </div>
        </div>

        {plans.map((plan, index) => (
          <div
            key={plan.id} // Using plan.id instead of index is better if available
            className={`py-14 px-6 text-center flex flex-col items-center gap-8 rounded-[2.5rem] w-full md:w-[350px]`}
            style={{ backgroundColor: plan.backgroundColor }} // Using style instead of template literal for dynamic colors
          >
            <TransitionWrapper>
              <h2 className="font-bold text-xl">{plan.title}</h2>
            </TransitionWrapper>

            <TransitionWrapper>
              <div className="text-[#a0cdcd] text-md md:text-lg">
                <p>Investment Range:</p>
                <p>
                  {plan.Minimum} - {plan.Maximum}
                </p>
              </div>
            </TransitionWrapper>

            <Link
              href="/"
              className="bg-redColor text-white py-3 px-8 rounded-xl font-semibold"
            >
              Get Started
            </Link>

            <TransitionWrapper>
              <div className="grid gap-6">
                {/* Convert features object to array for mapping */}
                {Object.entries(plan.features).map(([key, value], idx) => (
                  <p
                    key={key} // Using feature key as unique identifier
                    className="flex items-center gap-4 text-md text-[#a0cdcd]"
                  >
                    <span className="bg-[#03A6A6] size-6 rounded-full flex justify-center items-center">
                      <MdCheck className="font-bold text-sm" />
                    </span>
                    {`${key.replace(/([A-Z])/g, " $1")}: ${value}`}
                    {/* Converts "DailyProfit" to "Daily Profit" */}
                  </p>
                ))}
              </div>
            </TransitionWrapper>
{/* 
            <br />
            <Link href="/register" className="text-redColor font-semibold">
              Get Started
            </Link> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plan;
