"use client";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CountUp from "react-countup";
import { MdCalculate, MdCheck, MdPublic, MdSecurity } from "react-icons/md";

const page = () => {
  return (
    <div className="">
      <div>
        <Heading
          page="About Us"
          title="More than a Platform, a Financial Revolution"
          tab="About us"
        />
      </div>
      <div>
        <div className="flex max-w-7xl mx-auto px-8 gap-10 lg:gap-32 mt-20 items-center">
          <div className="w-full ">
            <h2 className="text-3xl lg:text-5xl  text-white font-bold">
              The Vision that drives our Team
            </h2>
            <p className="py-20 md:text-lg">
              Explore the foundations of Plax and how our purpose-driven start
              has shaped our identity. From initial challenges to realizing our
              vision of simplifying cross-border payments, this purposeful
              journey has led Plax to become a leading force in the financial
              revolution.
            </p>
            <div className="flex gap-6">
              <span className="bg-[#03A6A6] size-8 rounded-full flex justify-center items-center p-2">
                <MdCheck className="font-bold text-sm" />
              </span>{" "}
              <div>
                <h3 className="flex items-center gap-4 font-bold text-xl pb-4">
                  {" "}
                  Transformative Vision
                </h3>
                <p className="text-md">
                  Discover how Plax's initial vision was focused on transforming
                  the way people transact globally.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full">
            <Image
              width={500}
              height={500}
              src="/about.png"
              alt="about-asset"
              className=""
            />
          </div>
        </div>

        <div className="flex justify-between flex-col md:flex-row items-center gap-20 py-40 max-w-7xl mx-auto px-8">
          <div className="flex items-center flex-col">
            <h1 className="text-7xl xl:text-[6rem] flex font-bold text-redColor">
              <CountUp end={7} enableScrollSpy={true} />
              <span className="text-gray-500">M</span>
            </h1>
            <p className="font-semibold text-lg py-2">Registerd Users</p>
          </div>
          <div>
            <h1 className="text-7xl xl:text-[6rem] flex font-bold text-redColor">
              <CountUp end={1.6} decimals={1} enableScrollSpy={true} />
              <span className="text-gray-500">M</span>
            </h1>
            <p className="font-semibold text-lg py-2">Regular Users</p>
          </div>
          <div>
            <h1 className="text-7xl xl:text-[6rem] flex font-bold text-redColor">
              <CountUp end={170} enableScrollSpy={true} />
              <span className="text-gray-500">+</span>
            </h1>
            <p className="font-semibold text-lg py-2">
              Countries with our coverage
            </p>
          </div>
        </div>

        <div className="bg-[#f2fafa] py-28">
          <h2 className="max-w-2xl mx-auto text-greenColor text-3xl lg:text-5xl text-center font-bold">
            Our Strengths: The Trust Base of our users
          </h2>

          <div className="flex max-w-7xl mx-auto px-8 gap-10 mt-20 flex-col lg:flex-row">
            <div className="text-darkColor grid gap-4">
              <MdPublic className="text-6xl text-redColor" />
              <h3 className="text-xl font-semibold text-greenColor">
                Connected Global Network
              </h3>
              <p className="text-[#898d96]">
                Discover how our global network, spanning more than 170
                countries, facilitates international transactions and connects
                people around the world.
              </p>
            </div>
            <div className="text-darkColor grid gap-4">
              <MdSecurity className="text-6xl text-redColor" />
              <h3 className="text-xl font-semibold text-greenColor">
                Robust Security
              </h3>
              <p className="text-[#898d96]">
                Learn about the security standards that are at the heart of
                Plax, guaranteeing the protection of our users' financial and
                personal information.
              </p>
            </div>
            <div className="text-darkColor grid gap-4">
              <MdCalculate className="text-6xl text-redColor" />
              <h3 className="text-xl font-semibold text-greenColor">
                Continuous Innovation
              </h3>
              <p className="text-[#898d96]">
                Explore how constant innovation drives our growth, allowing us
                to offer advanced and accessible financial solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#f2fafa]">
          <div className="flex max-w-7xl mx-auto px-8 gap-10 lg:gap-32 py-20 items-center ">
            <div className="w-full">
              <Image
                width={500}
                height={500}
                src="/about2.png"
                alt="about-asset"
                className=""
              />
            </div>

            <div className="w-full ">
              <h2 className="text-3xl lg:text-5xl  text-greenColor font-bold">
                Our Values are foundations of Trust
              </h2>
              <p className="py-20 text-[#898d96]">
                Our values, from transparency to accountability, are the
                foundation of our organizational culture and reflect our
                unwavering.
              </p>
              <div className="flex gap-6">
                <span className="bg-[#03A6A6] size-8 rounded-full flex justify-center items-center p-2">
                  <MdCheck className="font-bold text-sm" />
                </span>{" "}
                <div>
                  <h3 className="flex items-center gap-4 font-bold text-xl pb-4 text-greenColor">
                    {" "}
                    Absolute Transparency:
                  </h3>
                  <p className="text-md text-[#898d96]">
                    Discover how transparency is ingrained in our culture,
                    providing our users with clarity and confidence in every
                    transaction.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="bg-[#03A6A6] size-8 rounded-full flex justify-center items-center p-2">
                  <MdCheck className="font-bold text-sm" />
                </span>{" "}
                <div>
                  <h3 className="flex items-center gap-4 font-bold text-xl pb-4 text-greenColor">
                    {" "}
                    Commitment to Safety:
                  </h3>
                  <p className="text-md text-[#898d96]">
                    Explore our unwavering commitment to security, ensuring
                    every transaction is conducted with the highest standards of
                    protection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{ backgroundImage: "url(/bgBlue.png)" }}
          className="py-28 px-8"
        >
          <div className="max-w-7xl mx-auto">
            <h1 className="font-bold text-3xl lg:text-6xl">
              "At Plax, transparency is not just a promise; It is the
              cornerstone of our relationship with you. We believe that trust is
              built with clear policies and coherent actions."
            </h1>
            <br />
            <p>- Plax Team</p>
          </div>
        </div>

        <div
          style={{ backgroundImage: "url(/bgAbout.png)" }}
          className="py-28 lg:py-48 px-8 bg-center bg-cover my-20"
        >
          <div>
            <h2 className="font-bold text-3xl lg:text-5xl max-w-2xl">
              Discover the freedom of Total Financial Control
            </h2>
            <p className="py-10 text-[#a0cdcd] lg:w-[400px] text-lg">
              Join Plax and take the first step towards a more balanced and
              hassle-free financial life.
            </p>
            <div className="mt-8">
              <Link href="" className="bg-redColor py-4 px-6 rounded-lg">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
