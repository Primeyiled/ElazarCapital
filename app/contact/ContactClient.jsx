"use client";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import TransitionWrapper from "@/components/TransitionWrapper";
import Link from "next/link";
import React, { useState } from "react";
import { MdEmail, MdLocationOn, MdPhone, MdSend } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import CountUp from "react-countup";
import CTA from "@/components/CTA";

const ContactClient = () => {
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
        setFormData({ name: "", email: "", phoneNo: "", message: "" });
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
          title="We're Here to Help You Grow Your Wealth"
          tab="Contact us"
        />
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] py-16">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-8 text-center">
          <TransitionWrapper>
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                $<CountUp end={5000000} enableScrollSpy={true} />+
              </h1>
              <p className="text-lg opacity-80">Assets Managed</p>
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

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <TransitionWrapper>
            <div className="bg-greenColor rounded-xl p-6 border border-[#2a2a42]">
              <h2 className="text-2xl font-bold text-white mb-6">
                Send Us a Message
              </h2>
              <form className="grid gap-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-4 rounded-lg bg-[#222E2E] text-white border border-[#2a2a42] focus:border-redColor outline-none"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-4 rounded-lg bg-[#222E2E] text-white border border-[#2a2a42] focus:border-redColor outline-none"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phoneNo" className="block text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phoneNo"
                    name="phoneNo"
                    value={formData.phoneNo}
                    onChange={handleChange}
                    className="w-full p-4 rounded-lg bg-[#222E2E] text-white border border-[#2a2a42] focus:border-redColor outline-none"
                    placeholder="+1 (555) 123-4567"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-4 rounded-lg bg-[#222E2E] text-white border border-[#2a2a42] focus:border-redColor outline-none h-40"
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-redColor hover:bg-red-700 text-white py-4 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <MdSend className="text-xl" />
                    </>
                  )}
                </button>
                {message && (
                  <p
                    className={`mt-2 ${
                      message.includes("success")
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {message}
                  </p>
                )}
              </form>
            </div>
          </TransitionWrapper>

          {/* Contact Information */}
          <TransitionWrapper>
            <div className="space-y-8">
              <div className="bg-greenColor rounded-xl p-6 border border-[#2a2a42]">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MdLocationOn className="text-redColor text-2xl mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        Our Headquarters
                      </h3>
                      <p className="text-gray-300">
                        TechNova Sp. z o.o., ul. Polna 18, 30-002 Kraków, Małopolskie, Poland
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MdEmail className="text-redColor text-2xl mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        Email Us
                      </h3>
                      <p className="text-gray-300">support@elazarcapital.com</p>
                    </div>
                  </div>
                  {/* <div className="flex items-start gap-4">
                    <MdPhone className="text-redColor text-2xl mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        Call Us
                      </h3>
                      <p className="text-gray-300">+1 (239) 203-8946</p>
                    </div>
                  </div> */}
                  {/* <div className="flex items-start gap-4">
                    <FaWhatsapp className="text-redColor text-2xl mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        WhatsApp
                      </h3>
                      <p className="text-gray-300">+1 (239) 203-8946</p>
                    </div>
                  </div> */}
                </div>
              </div>

              <div className="bg-greenColor rounded-xl p-6 border border-[#2a2a42]">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Business Hours
                </h2>
                <div className="space-y-4">
                  <div className="flex justify-between gap-2 text-gray-300">
                    <span>Monday - Friday</span>
                    <b>9:00 AM - 6:00 PM (EST)</b>
                  </div>
                  <div className="flex justify-between gap-2 text-gray-300">
                    <span>Saturday</span>
                    <b>10:00 AM - 4:00 PM (EST)</b>
                  </div>
                  <div className="flex justify-between gap-2 text-gray-300">
                    <span>Sunday</span>
                    <b>Closed</b>
                  </div>
                </div>
              </div>
            </div>
          </TransitionWrapper>
        </div>
      </div>

      {/* CTA Section */}
      <CTA/>
      <Footer />
    </div>
  );
};

export default ContactClient;
