import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="py-20 xl:pt-36 bg-greenColor px-8">
        <div className=" max-w-7xl mx-auto">
          <div className="flex justify-between md:items-center flex-col md:flex-row gap-12 md:gap-0 xl:mt-18">
            <div className="grid gap-24 ">
              <div className="space-y-2=">
                <Image
                  width={55}
                  height={55}
                  src="/logo.png"
                  alt="ElazarCapital_logo"
                  className="size-50"
                />
                <h1 className="text-2xl font-bold">ElazarCapital</h1>
              </div>
              <div className="flex flex-col lg:flex-row gap-8 tracking-[.05rem] text-gray-300 text-md">
                <Link href="/" className="">
                  Home
                </Link>
                <Link href="/about">About Us</Link>
                <Link href="/contact">Contact Us</Link>
                <Link href="/services">Services</Link>
                <Link href="/frequently-asked-questions">FAQ</Link>
              </div>
            </div>

            <div className="text-gray-300 grid gap-6">
              <p>999 Rue du Cherche-Midi, 7755500666 Paris, France</p>
              <p>+001 (808) 555-0111</p>
              <p>support@elazarcapital.com</p>
            </div>
          </div>
          <br />
          <br />
          <hr className="border-gray-600 border" />
          <br />
          <br />
          <div className="flex justify-between items-center flex-col lg:flex-row">
            <p className="text-gray-300">
              © 2025 ElazarCapital | All rights reserved.
            </p>
            <div className="space-x-4 text-gray-300 text-[15px] mt-10 lg:mt-0">
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms-of-services">Terms of Services</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
