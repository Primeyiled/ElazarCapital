"use client";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import TransitionWrapper from "@/components/TransitionWrapper";
import Link from "next/link";
import React, { useState } from "react";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNo: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Message sent successfully!");
        setFormData({ name: "", email: "", phoneNo: "", message: "" }); // Clear the form
      } else {
        setMessage(data.message || "Failed to send message.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div>
        <Heading
          page="Contact Us"
          title="Connect with Us: We are Here to Help You"
          tab="Contact us"
        />
      </div>
      <div className="max-w-7xl mx-auto px-8">
        <TransitionWrapper>
          <form className="my-20 grid gap-8" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-8">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="p-5 w-full rounded-xl text-darkColor placeholder:text-darkColor placeholder:font-semibold text-sm outline-none"
                placeholder="Name"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="p-5 w-full rounded-xl text-darkColor placeholder:text-darkColor placeholder:font-semibold text-sm outline-none"
                placeholder="Email"
                required
              />
            </div>
            <div className="grid gap-8">
              <input
                type="number"
                name="phoneNo"
                value={formData.phoneNo}
                onChange={handleChange}
                className="p-5 w-full rounded-xl text-darkColor placeholder:text-darkColor placeholder:font-semibold text-sm outline-none"
                placeholder="Phone Number"
                required
              />
            </div>
            <div className="grid gap-8">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="p-5 w-full rounded-xl text-darkColor placeholder:text-darkColor placeholder:font-semibold text-sm outline-none h-80"
                placeholder="Message"
                required
              ></textarea>
            </div>

            <div className="flex justify-start">
              <button
                type="submit"
                className="bg-redColor py-3 px-4 font-semibold rounded-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
            {message && <p className="text-white mt-4">{message}</p>}
          </form>
        </TransitionWrapper>

        <TransitionWrapper>
          <div className="grid gap-2">
            <h3 className="flex items-center gap-4 font-bold text-[22px] pb-4 text-white">
              We are available on the following channels:
            </h3>
            <p className="text-md text-[#898d96]">
              Address: 999 Rue du Cherche-Midi, 7755500666 Paris, France
            </p>
            <p className="text-md text-[#898d96]">
              Telephone: +001 (808) 555-0111
            </p>
            <p className="text-md text-[#898d96]">Fax: +001 (808) 555-0112</p>
            <p className="text-md text-[#898d96]">
              Email: support@plax.network
            </p>
          </div>
        </TransitionWrapper>
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

export default Page;
