import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="py-20 xl:pt-36 bg-greenColor px-8">
      <div className=" max-w-7xl mx-auto">
        <div className="flex justify-between md:items-center flex-col md:flex-row gap-12 md:gap-0 xl:mt-18">
          <div className="grid gap-24 ">
            <h1 className="text-2xl font-bold">Plax</h1>
            <div className="flex flex-col lg:flex-row gap-8 tracking-[.05rem] text-gray-300 text-md">
              <Link href="" className="">
                Home
              </Link>
              <Link href="">About Us</Link>
              <Link href="">Contact Us</Link>
              <Link href="">Services</Link>
              <Link href="">Pricing</Link>
            </div>
          </div>

          <div className="text-gray-300 grid gap-6">
            <p>999 Rue du Cherche-Midi, 7755500666 Paris, France</p>
            <p>+001 (808) 555-0111</p>
            <p>support@plax.network</p>
          </div>
        </div>
        <br />
        <br />
        <hr className="border-gray-600 border" />
        <br />
        <br />
        <div>
          <p className="text-gray-300">© 2024 Plax Finance & Fintech Design </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
