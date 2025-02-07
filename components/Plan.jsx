"use client";
import {
  Dailyplans,
  Monthlyplans,
  plans,
  TwoYearsplans,
  Yearlyplans,
} from "@/constants/data";
import Link from "next/link";
import React, { useState } from "react";
import { MdCheck } from "react-icons/md";
import TransitionWrapper from "./TransitionWrapper";

const Plan = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [plans, setPlans] = useState(Monthlyplans);

  const handleToggle = (index) => {
    setActiveIndex(index);
    if (index === 0) {
      setPlans(Dailyplans);
    } else if (index === 1) {
      setPlans(Monthlyplans);
    } else if (index === 2) {
      setPlans(Yearlyplans);
    } else if (index === 3) {
      setPlans(TwoYearsplans);
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
            Plax has the perfect plan to help you achieve your financial goals.
          </p>
        </TransitionWrapper>
      </div>

      <div className="flex flex-wrap gap-10 mt-10">
        <div className="w-full bg-greenColor rounded-full p-2">
          <div className="flex justify-between items-center gap-1 xs:gap-8 text-xs lg:text-lg">
            {["Daily", "Monthly", "Yearly", "2 Years"].map((plan, index) => (
              <span
                key={index}
                onClick={() => handleToggle(index)}
                className={
                  activeIndex === index
                    ? "bg-white text-greenColor p-1 xs:p-4 lg:p-6 rounded-full w-full text-center font-semibold duration-700"
                    : "text-white p-4 lg:p-6 rounded-full w-full text-center font-semibold cursor-pointer"
                }
              >
                {plan}
              </span>
            ))}
          </div>
        </div>

        {plans.map((plan, index) => (
          <div
            key={index}
            className={`py-14 px-6 text-center flex flex-col items-center gap-8 rounded-[2.5rem] w-full md:w-[350px] bg-[${plan.backgroundColor}]`}
          >
            <TransitionWrapper>
              <h2 className="font-bold text-xl">{plan.title}</h2>
            </TransitionWrapper>
            <TransitionWrapper>
            <p className="text-[#a0cdcd] text-md md:text-lg">
              {plan.description}
            </p>
            <h2 className="font-bold text-4xl">
              {plan.price} <span className="text-gray-500 text-sm">/month</span>
            </h2>
            </TransitionWrapper>
            <Link
              href="/"
              className="bg-redColor text-white py-3 px-8 rounded-xl font-semibold"
            >
              Choose a plan
            </Link>
            <TransitionWrapper>
            <div className="grid gap-6">
              {plan.features.map((feature, idx) => (
                <p
                  key={idx}
                  className="flex items-center gap-4 text-md text-[#a0cdcd]"
                >
                  <span className="bg-[#03A6A6] size-6 rounded-full flex justify-center items-center">
                    <MdCheck className="font-bold text-sm" />
                  </span>{" "}
                  {feature}
                </p>
              ))}
            </div>
            </TransitionWrapper>
            
           
            <br />
            <Link href="/register" className="text-redColor font-semibold">
              Get Started
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plan;
