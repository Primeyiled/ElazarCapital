"use client";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import TransitionWrapper from "@/components/TransitionWrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CountUp from "react-countup";
import {
  MdCalculate,
  MdCheck,
  MdPublic,
  MdSecurity,
  MdStar,
  MdTrendingUp,
  MdDevices,
} from "react-icons/md";

const page = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <div>
        <Heading
          page="About Us"
          title="More than a Platform, a Financial Revolution"
          tab="About us"
        />
      </div>

      {/* Who We Are Section */}
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-8 gap-10 lg:gap-32 mt-20 items-center">
        <div className="w-full order-2 lg:order-1">
          <TransitionWrapper>
            <h2 className="text-3xl lg:text-5xl/[4rem] text-white font-bold">
              Who We Are
            </h2>
          </TransitionWrapper>
          <TransitionWrapper>
            <p className="py-10 md:text-xl/[2rem]">
              ElazarCapital is a regulated broker and financial services
              provider for traders across the world. We are one of the fastest
              growing online brokers with an asset index of over 1,000 stocks,
              forex, commodities and indices available as CFDs. Our platforms
              provide instant access to global markets via desktop, smartphone
              or other mobile devices.
            </p>
          </TransitionWrapper>
          <div className="grid gap-6">
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
            width={600}
            height={600}
            src="/about.png"
            alt="ElazarCapital trading platform"
            className="rounded-xl"
          />
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] py-16 mt-20">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-8 text-center">
          <TransitionWrapper>
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                $<CountUp end={5000000} enableScrollSpy={true} />+
              </h1>
              <p className="text-lg opacity-80">Assets Under Management</p>
            </div>
          </TransitionWrapper>
          <TransitionWrapper>
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                <CountUp end={35000} enableScrollSpy={true} />+
              </h1>
              <p className="text-lg opacity-80">Active Investors</p>
            </div>
          </TransitionWrapper>
          <TransitionWrapper>
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                <CountUp end={1000} enableScrollSpy={true} />+
              </h1>
              <p className="text-lg opacity-80">Investment Products</p>
            </div>
          </TransitionWrapper>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-[#f2fafa] py-32">
        <div className="max-w-7xl mx-auto px-8">
          <TransitionWrapper>
            <h2 className="text-greenColor text-3xl lg:text-5xl/[4rem] font-bold mb-20">
              Why ElazarCapital?
            </h2>
          </TransitionWrapper>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <TransitionWrapper>
                <p className="text-[#898d96] text-xl leading-relaxed mb-8">
                  ElazarCapital combines professional expertise with
                  cutting-edge technology to deliver a premium trading
                  experience. Our reputation for financial competence, integrity
                  and honesty is built through constant innovation and
                  commitment to our clients.
                </p>
              </TransitionWrapper>
              <Image
                width={400}
                height={400}
                src="/about2.png"
                alt="Why choose ElazarCapital"
                className="rounded-xl object-cover size-50 "
              />
            </div>

            <div className="space-y-8">
              {[
                {
                  icon: <MdSecurity className="text-3xl" />,
                  title: "Trust & Integrity",
                  content:
                    "We maintain the highest standards of financial ethics and transparency.",
                },
                {
                  icon: <MdTrendingUp className="text-3xl" />,
                  title: "Continuous Innovation",
                  content:
                    "Regular investment in technology ensures you get the best trading tools.",
                },
                {
                  icon: <MdPublic className="text-3xl" />,
                  title: "Global Perspective",
                  content:
                    "Access to international markets with localized support.",
                },
                {
                  icon: <MdCalculate className="text-3xl" />,
                  title: "Client-Centric Approach",
                  content:
                    "Your success is our priority with personalized account management.",
                },
              ].map((item, index) => (
                <TransitionWrapper key={index}>
                  <div className="flex gap-6 items-start">
                    <span className="bg-redColor text-white p-3 rounded-full">
                      {item.icon}
                    </span>
                    <div>
                      <h3 className="text-2xl font-bold text-greenColor mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[#898d96]">{item.content}</p>
                    </div>
                  </div>
                </TransitionWrapper>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-[#222E2E] text-white py-32">
        <div className="max-w-7xl mx-auto px-8">
          <TransitionWrapper>
            <h2 className="text-3xl lg:text-5xl/[4rem] font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-[#a0cdcd] max-w-3xl mb-20">
              The principles that guide every decision we make and every
              interaction we have with our clients.
            </p>
          </TransitionWrapper>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Transparency",
                description:
                  "Clear pricing, no hidden fees, and open communication.",
                icon: "🔍",
              },
              {
                title: "Security",
                description:
                  "Bank-level encryption and strict regulatory compliance.",
                icon: "🛡️",
              },
              {
                title: "Innovation",
                description:
                  "Constantly evolving to bring you cutting-edge tools.",
                icon: "💡",
              },
              {
                title: "Integrity",
                description: "We do what's right, not just what's profitable.",
                icon: "🤝",
              },
              {
                title: "Excellence",
                description:
                  "Relentless pursuit of the best trading experience.",
                icon: "⭐",
              },
              {
                title: "Community",
                description: "Building financial literacy and trader success.",
                icon: "🌍",
              },
            ].map((value, index) => (
              <TransitionWrapper key={index}>
                <div className="bg-[#1D615F] p-8 rounded-xl h-full">
                  <span className="text-4xl mb-4 inline-block">
                    {value.icon}
                  </span>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              </TransitionWrapper>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div
        style={{ backgroundImage: "url(/bgBlue.png)" }}
        className="py-28 px-8"
      >
        <div className="max-w-5xl mx-auto">
          <h1 className="font-bold text-3xl lg:text-6xl/[5rem] mb-6">
            "At ElazarCapital, transparency is not just a promise; It is the
            cornerstone of our relationship with you. We believe that trust is
            built with clear policies and coherent actions."
          </h1>
          <p className="text-xl">- ElazarCapital Team</p>
        </div>
      </div>

      {/* CTA Section */}
      <div
        style={{ backgroundImage: "url(/bgAbout.png)" }}
        className="py-28 lg:py-48 px-8 bg-center bg-cover my-20"
      >
        <div className="max-w-7xl mx-auto">
          <TransitionWrapper>
            <h2 className="font-bold text-3xl lg:text-5xl/[4rem] max-w-2xl">
              Ready to experience the ElazarCapital difference?
            </h2>
          </TransitionWrapper>
          <TransitionWrapper>
            <p className="py-10 text-[#a0cdcd] lg:w-[400px] text-lg">
              Join our global community of traders today.
            </p>
          </TransitionWrapper>
          <TransitionWrapper>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/register"
                className="bg-redColor py-4 px-8 rounded-lg font-medium text-lg hover:bg-red-600 transition"
              >
                Open Account
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white py-4 px-8 rounded-lg font-medium text-lg hover:bg-white hover:text-greenColor transition"
              >
                Contact Us
              </Link>
            </div>
          </TransitionWrapper>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
