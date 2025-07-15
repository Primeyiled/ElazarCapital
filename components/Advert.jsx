import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdCheck } from "react-icons/md";
import TransitionWrapper from "./TransitionWrapper";

const Advert = () => {
  return (
    <div className="" style={{ backgroundImage: "url(/bgBlue.png)" }}>
      <div className="py-20 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row-reverse lg:justify-start gap-8 w-full items-center">
          <div className="grid gap-6 w-full">
            <TransitionWrapper>
              <h2 className="font-bold text-3xl py-6 lg:text-5xl/[4rem]">
                Start Trading with ElazarCapital in Just a Few Steps
              </h2>
            </TransitionWrapper>
            <TransitionWrapper>
              <p className="text-[#a0cdcd] md:text-lg lg:w-[400px]">
                We’ve made it simple. From registration to withdrawal,
                ElazarCapital puts you in control of your financial journey —
                securely and efficiently.
              </p>
            </TransitionWrapper>

            <div className="grid gap-6">
              <TransitionWrapper>
                <div className="flex items-start gap-6">
                  <p className="bg-[#03A6A6] size-8 p-2 rounded-full flex justify-center items-center">
                    <MdCheck className="font-bold text-sm" />
                  </p>
                  <div className="grid gap-4">
                    <h3 className="font-bold text-lg">Create Your Account</h3>
                    <p className="text-[#a0cdcd] md:text-lg lg:w-[400px]">
                      Sign up in minutes and verify your email to gain instant
                      access to global financial markets.
                    </p>
                  </div>
                </div>
              </TransitionWrapper>

              <TransitionWrapper>
                <div className="flex items-start gap-6">
                  <span className="bg-[#03A6A6] size-8 p-2 rounded-full flex justify-center items-center">
                    <MdCheck className="font-bold text-sm" />
                  </span>
                  <div className="grid gap-4">
                    <h3 className="font-bold text-lg">Fund Your Wallet</h3>
                    <p className="text-[#a0cdcd] md:text-lg lg:w-[400px]">
                      Choose from flexible deposit plans and payment methods
                      tailored to your convenience.
                    </p>
                  </div>
                </div>
              </TransitionWrapper>

              <TransitionWrapper>
                <div className="flex items-start gap-6">
                  <span className="bg-[#03A6A6] size-8 p-2 rounded-full flex justify-center items-center">
                    <MdCheck className="font-bold text-sm" />
                  </span>
                  <div className="grid gap-4">
                    <h3 className="font-bold text-lg">Withdraw Your Profits</h3>
                    <p className="text-[#a0cdcd] md:text-lg lg:w-[400px]">
                      Once your plan matures, you can withdraw funds directly to
                      your wallet — fast and hassle-free.
                    </p>
                  </div>
                </div>
              </TransitionWrapper>
            </div>

            <TransitionWrapper>
              <div className="mt-16">
                <Link
                  href="/register"
                  className="bg-redColor rounded-xl py-4 px-8 font-semibold"
                >
                  Get Started
                </Link>
              </div>
            </TransitionWrapper>
          </div>

          <div className="mt-10 w-full">
            <Image
              width={500}
              height={500}
              src="/phone2.png"
              alt="Phone showing app interface"
              className="lg:w-[450px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advert;
