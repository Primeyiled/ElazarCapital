import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div>
      <div>
        <Heading
          page="Contact Us"
          title="Connect with Us: We are Here to Help You"
          tab="Contact us"
        />
      </div>

      <form className="max-w-7xl mx-auto px-8 my-20 grid gap-8">
        <div className="grid md:grid-cols-2 gap-8">
          <input
            type="text"
            name="name"
            className="p-5 w-full rounded-xl text-darkColor placeholder:text-darkColor placeholder:font-semibold text-sm outline-none"
            placeholder="Name"
          />
          <input
            type="email"
            name="email"
            className="p-5 w-full rounded-xl text-darkColor placeholder:text-darkColor placeholder:font-semibold text-sm outline-none"
            placeholder="Email"
          />
        </div>
        <div className="grid gap-8">
          <input
            type="number"
            name="phoneNo"
            className="p-5 w-full rounded-xl text-darkColor placeholder:text-darkColor placeholder:font-semibold text-sm outline-none"
            placeholder="Phone Number"
          />
        </div>
        <div className="grid gap-8">
          <textarea
            id=""
            name="message"
            className="p-5 w-full rounded-xl text-darkColor placeholder:text-darkColor placeholder:font-semibold text-sm outline-none h-80"
            placeholder="Message"
          ></textarea>
        </div>

        <div className="flex justify-start">
          <button className="bg-redColor py-3 px-4 font-semibold rounded-lg">
            Send Message
          </button>
        </div>
      </form>

      <div
        style={{ backgroundImage: "url(/bgAbout.png)" }}
        className="py-28 lg:py-48 px-8 bg-center bg-cover my-20 "
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="font-bold text-3xl lg:text-5xl/[4rem] max-w-2xl">
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
      <Footer />
    </div>
  );
};

export default Page;
