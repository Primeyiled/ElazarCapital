import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdCheck } from "react-icons/md";

const Advert = () => {
  return (
    <div className="" style={{ backgroundImage: "url(/bgBlue.png)" }}>
      <div className="py-20 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row-reverse lg:justify-start gap-8 w-full items-center">
          <div className="grid gap-6 w-full">
            <h2 className="font-bold text-3xl py-6 lg:text-5xl">
              Discover How Plax Works to Transform your Finances
            </h2>
            <p className="text-[#a0cdcd] md:text-lg lg:w-[400px]">
              From creating budgets to detailed e xpense tracking,
            </p>
            <div className="grid gap-6">
              <div className="flex items-start gap-6 ">
                {" "}
                <p className="bg-[#03A6A6] size-8 p-2 rounded-full flex justify-center items-center">
                  <MdCheck className="font-bold text-sm" />
                </p>{" "}
                <div className="grid gap-4">
                  <h3 className="font-bold text-lg">
                    Variety of transfer methods
                  </h3>
                  <p className="text-[#a0cdcd] md:text-lg lg:w-[400px]">
                    Design custom budgets that fit your financial goals and
                    lifestyle.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6 ">
                {" "}
                <span className="bg-[#03A6A6] size-8 p-2 rounded-full flex justify-center items-center">
                  <MdCheck className="font-bold text-sm" />
                </span>{" "}
                <div className="grid gap-4">
                  <h3 className="font-bold text-lg">
                    Multicurrency global account
                  </h3>
                  <p className="text-[#a0cdcd] md:text-lg lg:w-[400px]">
                    Identify areas of savings and maximize your capacity to
                    accumulate resources for future goals.
                  </p>
                </div>
              </div>
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
          <div className="mt-10 w-full">
            <Image
              width={500}
              height={500}
              src="/phone2.png"
              alt=""
              className="lg:w-[450px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advert;
