"use client";
import { FrequentlyAskedQ } from "@/constants/data";
import React, { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="py-20 lg:py-36 px-6 max-w-3xl mx-auto ">
      <div className="text-center">
        <h1 className="font-bold text-3xl lg:text-6xl xl:max-w-2xl mx-auto">
          Explore Our Frequently Asked Questions
        </h1>
        <p className=" py-8 text-[#a0cdcd] max-w-sm text-center mx-auto">
          Find quick and clear answers to the most common questions about Plax
        </p>
      </div>

      <div className="mt-20">
        <div className="faq-item grid gap-8 xl:gap-12 duration-1000">
          {FrequentlyAskedQ &&
            FrequentlyAskedQ.map((faq, index) => (
              <div key={index}>
                <div className=" font-bold text-white text-xl -tracking-tight flex justify-between items-center " onClick={() => toggleFAQ(index)}>
                  {faq.title}

                  <span  className={`size-12 rounded-lg grid place-items-center   transition-transform duration-300 ${
                      activeIndex === index ? "rotate-90 bg-redColor text-white" : "bg-white text-darkColor"
                    }`}>
                    <MdArrowForwardIos/>
                  </span>
                </div>
                {activeIndex === index && (
                  <div className=" leading-8 py-4 transition-all duration-300 ease-in-out opacity-100">
                    <p className="text-[#898d96]">
                      {faq.desc}
                    </p>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
