"use client";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import TransitionWrapper from "@/components/TransitionWrapper";
import { FrequentlyAskedQ } from "@/constants/data";
import Link from "next/link";
import { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";



const FAQClient = () => {
 const [activeIndex, setActiveIndex] = useState(null);
 
   const toggleFAQ = (index) => {
     setActiveIndex(activeIndex === index ? null : index);
   };

  return (
    <div>
      <div>
        <Heading
          page="Frequently Asked Questions"
          title="Explore Our Frequently Asked Questions"
          tab="FAQ"
        />
      </div>


      <div className="max-w-7xl mx-auto px-4 py-10">
        <TransitionWrapper>
          <div className="faq-item grid lg:grid-cols-2 gap-8  xl:gap-x-16 duration-1000">
            {FrequentlyAskedQ &&
              FrequentlyAskedQ.map((faq, index) => (
                <div key={index}>
                  <div
                    className="text-white text-md xl:text-xl -tracking-tight flex justify-between items-center "
                    onClick={() => toggleFAQ(index)}
                  >
                    {faq.title}

                    <span
                      className={`size-12 p-4 rounded-lg grid place-items-center   transition-transform duration-300 ${
                        activeIndex === index
                          ? "rotate-90 bg-redColor text-white"
                          : "bg-white text-darkColor"
                      }`}
                    >
                      <MdArrowForwardIos />
                    </span>
                  </div>
                  {activeIndex === index && (
                    <div className=" leading-8 py-4 transition-all duration-300 ease-in-out opacity-100">
                      <p className="text-[#e5e7eb]">{faq.desc}</p>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </TransitionWrapper>
      </div>

      {/* CTA Section */}
      <CTA/>

      <Footer />
    </div>
  );
};

export default FAQClient;
