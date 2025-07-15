"use client";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import TransitionWrapper from "@/components/TransitionWrapper";
import { FrequentlyAskedQ } from "@/constants/data";
import Link from "next/link";
import { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";



const Page = () => {
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
      <div
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
                href="#"
                className="bg-redColor hover:bg-red-700 py-4 px-6 rounded-lg transition-colors duration-300"
              >
                Open an Account
              </Link>
              <Link
                href="#"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-darkColor py-4 px-6 rounded-lg transition-colors duration-300"
              >
                Schedule a Call
              </Link>
            </div>
          </TransitionWrapper>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
