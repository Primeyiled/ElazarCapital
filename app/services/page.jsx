"use client";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import TransitionWrapper from "@/components/TransitionWrapper";
import {
  IconCreditCard,
  IconDiamond,
  IconShieldLock,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdCheck } from "react-icons/md";

const page = () => {
  return (
    <div>
      <div>
        <Heading
          page="Services"
          title="Adapted to your needs, discover what we have"
          tab="Services"
        />
      </div>

      <div className="flex max-w-7xl mx-auto px-8 gap-10 lg:gap-32 mt-20 items-center flex-col-reverse md:flex-row">
        <div className="w-full ">
          <TransitionWrapper>
            <h2 className="text-3xl lg:text-5xl/[4rem]  text-white font-bold">
              Freedom to send, request money globally
            </h2>
          </TransitionWrapper>

          <TransitionWrapper>
            <p className="py-10 md:text-xl/[2rem]">
              From sending money to friends and family to receiving payments
              from around the world, Plax Consumer offers you a simple and
              instant experience.
            </p>
          </TransitionWrapper>
          <TransitionWrapper>
            <div className="mt-2">
              <Link href="" className="bg-redColor py-4 px-6 rounded-lg">
                See Plans
              </Link>
            </div>
          </TransitionWrapper>
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

      <div className="flex max-w-7xl mx-auto px-8 gap-10 lg:gap-32 my-32 items-center flex-col-reverse md:flex-row-reverse">
        <div className="w-full ">
          <TransitionWrapper>
            <h2 className="text-3xl lg:text-5xl/[4rem]  text-white font-bold">
              Instant Financial Solutions for Global Businesses
            </h2>
          </TransitionWrapper>
          <TransitionWrapper>
            <p className="py-10 md:text-xl/[2rem]">
              From instant and secure transactions to the flexibility to adapt
              to global needs, Plax Enterprise offers a reliable platform to
              drive your company's financial growth.
            </p>
          </TransitionWrapper>
          <TransitionWrapper>
            <div className="mt-2">
              <Link href="" className="bg-redColor py-4 px-6 rounded-lg">
                See Plans
              </Link>
            </div>
          </TransitionWrapper>
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

      <div className="flex max-w-7xl mx-auto px-8 gap-10 lg:gap-32 my-32 items-center flex-col-reverse md:flex-row">
        <TransitionWrapper>
          <div className="w-full ">
            <h2 className="text-3xl lg:text-5xl/[4rem]  text-white font-bold">
              Financial Innovation, discover the Plax Virtual Card
            </h2>
            <p className="py-10 md:text-xl/[2rem]">
              Discover how this innovative tool boosts financial well-being and
              provides a safe and affordable alternative for financial inclusion
              in the region.
            </p>
            <div className="mt-2">
              <Link href="" className="bg-redColor py-4 px-6 rounded-lg">
                See Plans
              </Link>
            </div>
          </div>
        </TransitionWrapper>
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

      <div className="bg-[#f2fafa] py-32">
        <TransitionWrapper>
          <h2 className="max-w-2xl mx-auto text-greenColor text-3xl lg:text-5xl/[4rem] text-center font-bold">
            Innovation and Efficiency in Every Transaction
          </h2>
        </TransitionWrapper>

        <div className="flex max-w-7xl mx-auto px-8 gap-10 mt-20 flex-col lg:flex-row">
          <TransitionWrapper>
            <div className="text-darkColor grid gap-4">
              <IconCreditCard className="size-16 text-redColor" />
              <h3 className="text-[22px] font-semibold text-greenColor">
                Simplicity in Every Step
              </h3>
              <p className="text-[#898d96] text-lg">
                Experience the convenience of a simplified payment process, from
                creating your account
              </p>
            </div>
          </TransitionWrapper>

          <TransitionWrapper>
            <div className="text-darkColor grid gap-4">
              <IconShieldLock className="size-16 text-redColor" />
              <h3 className="text-[22px] font-semibold text-greenColor">
                Guaranteed Advanced Security
              </h3>
              <p className="text-[#898d96] text-lg">
                We implement cutting-edge security measures to protect your
                financial information at all times.
              </p>
            </div>
          </TransitionWrapper>

          <TransitionWrapper>
            <div className="text-darkColor grid gap-4">
              <IconDiamond className="size-16 text-redColor" />
              <h3 className="text-[22px] font-semibold text-greenColor">
                Unparalleled Efficiency
              </h3>
              <p className="text-[#898d96] text-lg">
                Fast, secure and reliable transactions that reflect our
                commitment to excellence every step of the way.
              </p>
            </div>
          </TransitionWrapper>
        </div>
      </div>

      <div className="py-44 px-8 bg-[#f2fafa]">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-bold text-3xl lg:text-6xl/[5rem] text-darkColor">
            "At Plax, transparency is not just a promise; It is the cornerstone
            of our relationship with you. We believe that trust is built with
            clear policies and coherent actions."
          </h1>
          <br />
          <p className="text-darkColor">- Plax Team</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-20 max-w-5xl mx-auto">
          <TransitionWrapper>
            <div className="flex gap-6">
              <span className="bg-[#03A6A6] size-8 rounded-full flex justify-center items-center p-2">
                <MdCheck className="font-bold text-sm" />
              </span>{" "}
              <div>
                <h3 className="flex items-center gap-4 font-bold text-[22px] pb-4 text-greenColor">
                  {" "}
                  Absolute Transparency:
                </h3>
                <p className="text-md text-[#898d96] text-lg">
                  Discover how transparency is ingrained in our culture,
                  providing our users with clarity and confidence in every
                  transaction.
                </p>
              </div>
            </div>
          </TransitionWrapper>
          <TransitionWrapper>
            <div className="flex gap-6">
              <span className="bg-[#03A6A6] size-8 rounded-full flex justify-center items-center p-2">
                <MdCheck className="font-bold text-sm" />
              </span>{" "}
              <div>
                <h3 className="flex items-center gap-4 font-bold text-[22px] pb-4 text-greenColor">
                  {" "}
                  Commitment to Safety:
                </h3>
                <p className="text-md text-[#898d96]">
                  Explore our unwavering commitment to security, ensuring every
                  transaction is conducted with the highest standards of
                  protection.
                </p>
              </div>
            </div>
          </TransitionWrapper>
        </div>
      </div>

      <div
        style={{ backgroundImage: "url(/bgAbout.png)" }}
        className="py-28 lg:py-48 px-8 bg-center bg-cover my-20 "
      >
        <div className="max-w-7xl mx-auto">
          <TransitionWrapper>
            <h2 className="font-bold text-3xl lg:text-5xl/[4rem] max-w-2xl">
              Discover the freedom of Total Financial Control
            </h2>
          </TransitionWrapper>
          <TransitionWrapper>
            <p className="py-10 text-[#a0cdcd] lg:w-[400px] text-lg">
              Join Plax and take the first step towards a more balanced and
              hassle-free financial life.
            </p>
          </TransitionWrapper>
          <TransitionWrapper>
            <div className="mt-8">
              <Link href="" className="bg-redColor py-4 px-6 rounded-lg">
                Get Started
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
