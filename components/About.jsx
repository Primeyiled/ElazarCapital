import React from "react";
import { motion } from "framer-motion";
import TransitionWrapper from "./TransitionWrapper";
import Image from "next/image";
import Link from "next/link";
import { MdDevices, MdStar, MdTrendingUp } from "react-icons/md";

const About = () => {
  return (
    <div className="py-20 px-6 max-w-7xl mx-auto">
      <TransitionWrapper className="py-10 ">
        <h1 className="font-bold text-lg text-gray-300 text-center">
          Who We Are
        </h1>
        <h1 className="font-bold text-3xl lg:text-6xl/[5rem] text-center">
          About Us
        </h1>
      </TransitionWrapper>
      <br />

      <div className="grid lg:grid-cols-2 gap-10 mt-10 mb-20">
        <div>
          <TransitionWrapper>
            <p className="py-10 md:text-xl/[2rem]">
              We're a community-driven investment hub built for people who
              believe in smarter money decisions. At ElazarCapital, we simplify
              the complex world of finance, offering tools and support to help
              you take control of your financial journey. No confusing jargon,
              no outdated systems, just transparent, intuitive investing
              designed for the way you live and grow today.
            </p>
          </TransitionWrapper>
          <TransitionWrapper>
            <Link
              href="/about"
              className="bg-redColor rounded-xl py-4 px-8 font-semibold"
            >
              Learn More
            </Link>
          </TransitionWrapper>
          <div className="grid gap-4 mt-10">
            {[
              {
                icon: <MdDevices className="text-2xl" />,
                title: "Multi-Platform Access",
                description: "Trade seamlessly across all your devices",
              },
              {
                icon: <MdTrendingUp className="text-2xl" />,
                title: "Diverse Assets",
                description: "1,000+ instruments across multiple markets",
              },
              {
                icon: <MdStar className="text-2xl" />,
                title: "Regulated Broker",
                description: "Compliant with international financial standards",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-6">
                <span className="bg-[#03A6A6] size-10 rounded-full flex justify-center items-center p-2">
                  {item.icon}
                </span>
                <div>
                  <h3 className="font-bold text-xl pb-2">{item.title}</h3>
                  <p className="text-md">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full order-1 lg:order-2">
          <Image
            width={500}
            height={500}
            src="/about.png"
            alt="ElazarCapital trading platform"
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
