import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  MdCheck,
  MdCreditCard,
  MdPhonelinkSetup,
  MdSmartScreen,
} from "react-icons/md";

const Benefits = () => {
  return (
    <div className="py-20 px-6 max-w-7xl mx-auto ">
      <div className="text-center">
        <h1 className="font-bold text-3xl lg:text-6xl xl:max-w-2xl mx-auto">
          Discover the Benefits in your Financial Control
        </h1>
        <p className=" py-6 text-[#a0cdcd]">
          Explore the advantages that Plax has to offer in the world of personal
          finance
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 mt-10">
        <div className="bg-[#222E2E] md:bg-transparent py-14 px-6 text-center flex flex-col items-center gap-8 rounded-[2.5rem]">
          <MdPhonelinkSetup className="text-4xl" />
          <h2 className="font-bold text-xl ">Personalized Budgets</h2>
          <p className="text-[#a0cdcd] text-md md:text-lg">
            Create realistic and personalized budgets with Plax, adapted to your
            financial goals and needs.
          </p>
          <Link href="/" className="text-redColor font-semibold">
            Viwe More
          </Link>
        </div>
        <div className="bg-[#1D615F] py-14 px-6 text-center flex flex-col items-center gap-8 rounded-[2.5rem]">
          <MdCreditCard className="text-4xl" />
          <h2 className="font-bold text-xl ">Debt Control</h2>
          <p className="text-[#a0cdcd] text-md md:text-lg">
            Know your debt capacity and effectively manage debt payments,
            avoiding additional charges.
          </p>
          <Link href="/" className="text-redColor font-semibold">
            Viwe More
          </Link>
        </div>
        <div className="bg-[#222E2E] md:bg-transparent py-14 px-6 text-center flex flex-col items-center gap-8 rounded-[2.5rem]">
          <MdSmartScreen className="text-4xl" />
          <h2 className="font-bold text-xl ">Financial Organization</h2>
          <p className="text-[#a0cdcd] text-md md:text-lg">
            Plax allows you to organize your finances with up to 7 sections,
            giving you a map of how your moves.
          </p>
          <Link href="/" className="text-redColor font-semibold">
            Viwe More
          </Link>
        </div>
      </div>

      <div className="mt-20">
        <div className="flex flex-col lg:flex-row-reverse lg:justify-start gap-8 w-full items-center">
          <div className="grid gap-4 w-full">
            <h2 className="font-bold text-3xl py-6 lg:text-5xl">
              Optimize finances for balance
            </h2>
            <p className="text-[#a0cdcd] md:text-lg lg:w-[400px]">
              From more precise control of your expenses to effective planning
              of financial goals, gives you the necessary tools to achieve
              successful
            </p>
            <div className="mt-16">
              <Link
                href="/"
                className="bg-redColor rounded-xl py-4 px-8 font-semibold"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="mt-10 w-full">
            <Image
              width={500}
              height={500}
              src="/woman.png"
              alt=""
              className="lg:w-[450px]"
            />
          </div>
        </div>
      </div>

      <div className="mt-20 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-start gap-8 w-full items-center">
          <div className="grid gap-6 w-full">
            <h2 className="font-bold text-3xl py-6 lg:text-5xl">
              Smart, simple financial planner.
            </h2>
            <p className="text-[#a0cdcd] md:text-lg lg:w-[400px]">
              Whether you’re looking to plan for retirement, save for your
              child’s education, or invest in your future, we have the expertise
              and tools to help you succeed.
            </p>
            <div className="grid gap-6">
              <p className="flex items-center gap-4 font-bold text-lg">
                {" "}
                <span className="bg-[#03A6A6] size-8 rounded-full flex justify-center items-center">
                  <MdCheck className="font-bold text-sm" />
                </span>{" "}
                Variety of transfer methods
              </p>
              <p className="flex items-center gap-4 font-bold text-lg">
                {" "}
                <span className="bg-[#03A6A6] size-8 rounded-full flex justify-center items-center">
                  <MdCheck className="font-bold text-sm" />
                </span>{" "}
                Multicurrency global account
              </p>
            </div>
            <div className="mt-16">
              <Link
                href="/"
                className="bg-redColor rounded-xl py-4 px-8 font-semibold"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="mt-10 w-full flex lg:justify-end">
            <Image
              width={500}
              height={500}
              src="/phone.png"
              alt=""
              className="lg:w-[450px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
