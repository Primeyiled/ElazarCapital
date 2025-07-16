"use client";
import Heading from "@/components/Heading";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCoins,
  FaChartLine,
  FaShieldAlt,
  FaRocket,
  FaGem,
  FaWeightHanging,
} from "react-icons/fa";
import { GiGoldBar, GiMoneyStack, GiCrystalBall  } from "react-icons/gi";
import Image from "next/image";
import TransitionWrapper from "@/components/TransitionWrapper";
import CountUp from "react-countup";
import Footer from "@/components/Footer";
import { GoldPlans } from "@/constants/data";
import Link from "next/link";
import { MdCheck } from "react-icons/md";
// import GoldChart from "@/components/GoldChart";

const GoldPage = () => {

  const goldFacts = [
    {
      icon: <GiGoldBar className="text-3xl text-white" />,
      title: "The Eternal Store of Value",
      content:
        "Gold has maintained its purchasing power for thousands of years, outlasting every currency in history.",
    },
    {
      icon: <FaWeightHanging className="text-3xl text-white" />,
      title: "All the Gold in the World",
      content:
        "All the gold ever mined would fit into a cube with sides of about 21 meters - that's smaller than a tennis court!",
    },
    {
      icon: <GiCrystalBall className="text-3xl text-white" />,
      title: "The Ultimate Safe Haven",
      content:
        "During economic crises, gold prices often rise as investors seek stability and security.",
    },
  ];

  return (
    <section className="">
      <div>
        <Heading
          page="Gold Investment"
          title="Secure Your Future with Timeless Wealth"
          tab="Gold Investment"
        />
      </div>

      <div className="bg-gradient-to-r from-[#caa735] via-[#E6C200] to-[#FFD700] py-16">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-8 text-center">
          <TransitionWrapper>
            <div className="text-black">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                $<CountUp end={2500000} enableScrollSpy={true} />+
              </h1>
              <p className="text-lg opacity-80">Gold Assets Managed</p>
            </div>
          </TransitionWrapper>
          <TransitionWrapper>
            <div className="text-black">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                <CountUp end={28000} enableScrollSpy={true} />+
              </h1>
              <p className="text-lg opacity-80">Satisfied Investors</p>
            </div>
          </TransitionWrapper>
          <TransitionWrapper>
            <div className="text-black">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                <CountUp end={50} enableScrollSpy={true} />+
              </h1>
              <p className="text-lg opacity-80">Years Combined Experience</p>
            </div>
          </TransitionWrapper>
        </div>
      </div>

      {/* Gold Value Proposition */}
      <div className="max-w-7xl mx-auto px-8 py-24 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Gold: The <span className="text-yellow-500">Original</span>
            <br />
            <span className="text-yellow-500">Wealth</span> Preservation
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            For millennia, gold has been the ultimate store of value. Unlike
            paper currencies that come and go, gold has maintained its worth
            through every crisis. Our experts help you navigate the gold markets
            with confidence and strategic insight.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/register" className="bg-yellow-600 hover:bg-yellow-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
              Start Investing
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <Image
            src="/gold2.jpg"
            alt="Gold Bars"
            width={600}
            height={400}
            className="rounded-xl shadow-2xl"
          />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -bottom-6 -left-6 bg-darkColor p-4 rounded-lg shadow-lg border border-gray-800"
          >
            <GiGoldBar className="text-4xl text-yellow-400" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            className="absolute -top-6 -right-6 bg-darkColor p-4 rounded-lg shadow-lg border border-gray-800"
          >
            <FaGem className="text-4xl text-yellow-300" />
          </motion.div>
        </motion.div>
      </div>

      {/* Gold Facts Section */}
      <div className="bg-gradient-to-r from-[#e2bb3b] to-[#af9504] py-16">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Golden Facts <span className="text-darkColor">You Should Know</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {goldFacts.map((fact, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="bg-darkColor/80 p-6 rounded-xl border border-gray-700"
              >
                <div className="flex justify-center mb-4">{fact.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center">
                  {fact.title}
                </h3>
                <p className="text-gray-300 text-center">{fact.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* How Gold Investment Works */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">
          How <span className="text-yellow-500">Gold Investment</span> Works
        </h2>
        <p className="text-gray-400 mb-12 text-center max-w-2xl mx-auto">
          Simple, secure, and time-tested wealth preservation
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <GiMoneyStack className="text-4xl text-yellow-500" />,
              title: "You Invest",
              desc: "Choose your preferred gold investment method",
            },
            {
              icon: <FaShieldAlt className="text-4xl text-yellow-500" />,
              title: "We Secure",
              desc: "Your gold is stored in high-security vaults",
            },
            {
              icon: <FaChartLine className="text-4xl text-yellow-500" />,
              title: "Your Wealth Grows",
              desc: "Benefit from gold's long-term appreciation",
            },
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-darkColor/50 p-6 rounded-xl border border-gray-700 text-center"
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-gray-300">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gold Investment Options */}
      <div className="bg-gradient-to-r from-[#0f2027] via-[#1d4d4e] to-[#2c5364] py-16">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Gold <span className="text-yellow-500">Investment</span> Options
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <GiGoldBar className="text-yellow-400" />
                Physical Gold
              </h3>
              <p className="text-gray-300 mb-6">
                Own actual gold bars and coins stored in secure, insured vaults.
                Physical gold provides tangible asset ownership and complete
                control.
              </p>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3 mt-8">
                <FaChartLine className="text-yellow-400" />
                Gold Securities
              </h3>
              <p className="text-gray-300">
                Invest in gold ETFs, mining stocks, and futures for more liquid
                exposure to gold prices without storage concerns.
              </p>
            </div>
            <div className="relative h-64 md:h-96">
              <Image
                src="/gold.jpg"
                alt="Gold Investment Options"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Security Section */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="bg-darkColor/50 rounded-xl p-8 md:p-12 border border-gray-700">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Your Gold is <span className="text-yellow-500">Fully Protected</span>
              </h2>
              <p className="text-gray-300 mb-6">
                We partner with the world's most secure vaults and storage
                facilities to ensure your gold investments are always safe.
              </p>
              <ul className="space-y-4">
                {[
                  "Allocated gold ownership",
                  "Fully insured storage",
                  "24/7 monitored facilities",
                  "Regular independent audits",
                  "Swiss vault options available",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <FaShieldAlt className="text-yellow-500 mt-1 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-64 md:h-80">
              <Image
                src="/goldVault.jpg"
                alt="Gold Vault Security"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-16">
        <TransitionWrapper>
          <h1 className="font-bold text-3xl lg:text-5xl text-center text-white mb-6">
            Our <span className="text-yellow-500">Gold Investment</span> Plans
          </h1>
        </TransitionWrapper>

        <TransitionWrapper>
          <p className="text-center text-[#a0cdcd] mb-12 max-w-2xl mx-auto">
            Choose the gold investment strategy that matches your financial goals
          </p>
        </TransitionWrapper>

        <div className="flex flex-wrap justify-center gap-8">
          {GoldPlans.map((plan) => (
            <motion.div
              key={plan.id}
              whileHover={{ y: -5 }}
              className={`py-10 px-6 text-center flex flex-col items-center gap-6 rounded-[2.5rem] w-full md:w-[350px]`}
              style={{ backgroundColor: plan.backgroundColor }}
            >
              <TransitionWrapper>
                <h2 className="font-bold text-xl text-white">{plan.title}</h2>
              </TransitionWrapper>

              <TransitionWrapper>
                <div className="text-[#a0cdcd]">
                  <p>Investment Range:</p>
                  <p className="font-medium">
                    {plan.Minimum} - {plan.Maximum}
                  </p>
                </div>
              </TransitionWrapper>

              <TransitionWrapper>
                <Link
                  href="/register"
                  className="bg-yellow-600 text-white py-3 px-8 rounded-xl font-semibold hover:bg-yellow-700 transition-colors"
                >
                  Get Started
                </Link>
              </TransitionWrapper>

              <TransitionWrapper>
                <div className="grid gap-4 w-full">
                  {Object.entries(plan.features).map(([key, value]) => (
                    <p
                      key={key}
                      className="flex items-start gap-3 text-sm text-[#a0cdcd] text-left"
                    >
                      <span className="bg-yellow-600 size-5 rounded-full flex justify-center items-center mt-1 flex-shrink-0">
                        <MdCheck className="font-bold text-xs" />
                      </span>
                      <span>
                        <span className="font-medium">
                          {key.replace(/([A-Z])/g, " $1")}:
                        </span>{" "}
                        {value}
                      </span>
                    </p>
                  ))}
                </div>
              </TransitionWrapper>
            </motion.div>
          ))}
        </div>

        <TransitionWrapper>
          <p className="text-center text-gray-400 mt-12">
            All plans include secure storage, insurance, and professional
            portfolio management.
          </p>
        </TransitionWrapper>
      </div>

      {/* <div className="w-full h-[400px] lg:h-[500px] max-w-4xl mx-auto px-8 my-10">
        <GoldChart />
      </div> */}

      {/* Why Gold Section */}
      <div className="bg-gradient-to-r from-[#D4AF37] to-[#FFD700] py-16 mb-20">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Why <span className="text-darkColor">Gold</span> Now?
          </h2>
          <p className="text-gray-800 mb-8 max-w-3xl mx-auto">
            In an era of economic uncertainty, gold remains the ultimate hedge
            against inflation and currency devaluation. As central banks
            worldwide continue to buy gold, smart investors are following their
            lead to protect and grow their wealth.
          </p>
          <div className="flex justify-center">
            <Link href="/register"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-darkColor hover:bg-darkColor/80 text-white py-3 px-8 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
            >
              <FaRocket /> Start Investing
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default GoldPage;