"use client";
import Heading from "@/components/Heading";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaBitcoin,
  FaEthereum,
  FaShieldAlt,
  FaRocket,
  FaCoins,
  FaChartLine,
} from "react-icons/fa";
import { GiCrystalBall, GiMoneyStack } from "react-icons/gi";
import Image from "next/image";
import TransitionWrapper from "@/components/TransitionWrapper";
import CountUp from "react-countup";
import Footer from "@/components/Footer";
import { CryptoPlans } from "@/constants/data";
import Link from "next/link";
import { MdCheck } from "react-icons/md";
import CryptoChart from "@/components/CryptoChart";

const CryptoPage = () => {
  const [activeTab, setActiveTab] = useState("fun-facts");

  const cryptoFacts = [
    {
      icon: <FaBitcoin className="text-3xl text-orange-500" />,
      title: "The Pizza That Cost $500M",
      content:
        "In 2010, someone paid 10,000 BTC for two pizzas. Today, that Bitcoin would be worth hundreds of millions!",
    },
    {
      icon: <FaEthereum className="text-3xl text-purple-500" />,
      title: "More Than Just Money",
      content:
        "Ethereum introduced smart contracts, enabling everything from digital art (NFTs) to decentralized apps.",
    },
    {
      icon: <GiCrystalBall className="text-3xl text-blue-500" />,
      title: "Predicting the Future",
      content:
        "Crypto has created millionaires overnight, but the real winners are those who understand the technology.",
    },
  ];

  return (
    <section className="">
      <div>
        <Heading
          page="Crypto World"
          title="Welcome to the Exciting Universe of Digital Money"
          tab="Crypto Investment"
        />
      </div>

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

      {/* Fun Intro Section */}
      <div className="max-w-7xl mx-auto px-8 py-16 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Crypto Isn't Just <span className="text-redColor">Investment</span>
            <br />
            It's a <span className="text-redColor">Revolution</span>
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Digital currencies are changing how the world thinks about money.
            While you explore this fascinating space, our experts handle the
            complex trading aspects for you. Sit back and watch your crypto
            journey unfold!
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/register" className="bg-redColor hover:bg-redColor/80 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
              Get Started
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
            src="/crypto.jpg"
            alt="Cryptocurrency"
            width={600}
            height={400}
            className="rounded-xl shadow-2xl"
          />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -bottom-6 -left-6 bg-darkColor p-4 rounded-lg shadow-lg border border-gray-800"
          >
            <FaBitcoin className="text-4xl text-orange-400" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            className="absolute -top-6 -right-6 bg-darkColor p-4 rounded-lg shadow-lg border border-gray-800"
          >
            <FaEthereum className="text-4xl text-purple-400" />
          </motion.div>
        </motion.div>
      </div>

      {/* Fun Facts Section */}
      <div className="bg-greenColor py-16">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Did You Know? <span className="text-redColor">Crypto Trivia</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {cryptoFacts.map((fact, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="bg-darkColor/50 p-6 rounded-xl border border-gray-700"
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

      {/* How It Works - Simple Version */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">
          How <span className="text-redColor">Crypto Magic</span> Happens
        </h2>
        <p className="text-gray-400 mb-12 text-center max-w-2xl mx-auto">
          While you enjoy learning about crypto, our team works behind the
          scenes
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaCoins className="text-4xl text-redColor" />,
              title: "You Explore",
              desc: "Discover the exciting world of digital currencies",
            },
            {
              icon: <GiMoneyStack className="text-4xl text-redColor" />,
              title: "We Handle",
              desc: "Our experts manage all the complex trading decisions",
            },
            {
              icon: <FaChartLine className="text-4xl text-redColor" />,
              title: "Together We Grow",
              desc: "Watch your crypto potential unfold effortlessly",
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

      {/* Crypto Spotlight */}
      <div className="bg-gradient-to-r from-[#0f2027] via-[#1d4d4e] to-greenColor py-16">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Crypto <span className="text-redColor">Spotlight</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <FaBitcoin className="text-orange-400" />
                Bitcoin: Digital Gold
              </h3>
              <p className="text-gray-300 mb-6">
                The original cryptocurrency that started it all. Bitcoin
                introduced blockchain technology and changed how we think about
                money. Limited to 21 million coins, it's become a store of value
                much like gold.
              </p>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3 mt-8">
                <FaEthereum className="text-purple-400" />
                Ethereum: The World Computer
              </h3>
              <p className="text-gray-300">
                More than just currency, Ethereum enables smart contracts that
                power decentralized applications, NFTs, and the entire DeFi
                (Decentralized Finance) movement.
              </p>
            </div>
            <div className="relative h-64 md:h-96">
              <Image
                src="/crypto2.jpg"
                alt="Bitcoin and Ethereum"
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
                Your Crypto is{" "}
                <span className="text-redColor">Safe With Us</span>
              </h2>
              <p className="text-gray-300 mb-6">
                While crypto can be complex to secure, we've got you covered.
                Our multi-layered security approach means you can explore the
                crypto world with peace of mind.
              </p>
              <ul className="space-y-4">
                {[
                  "Cold storage for digital assets",
                  "Bank-grade encryption",
                  "24/7 monitoring",
                  "Regular security audits",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <FaShieldAlt className="text-redColor mt-1 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-64 md:h-80">
              <Image
                src="/cryptoSecurity.jpg"
                alt="Crypto Security"
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
            Our <span className="text-redColor">Crypto Investment</span> Plans
          </h1>
        </TransitionWrapper>

        <TransitionWrapper>
          <p className="text-center text-[#a0cdcd] mb-12 max-w-2xl mx-auto">
            Let our experts navigate the crypto markets for you with these
            tailored plans
          </p>
        </TransitionWrapper>

        <div className="flex flex-wrap justify-center gap-8">
          {CryptoPlans.map((plan) => (
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
                  className="bg-redColor text-white py-3 px-8 rounded-xl font-semibold hover:bg-red-600 transition-colors"
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
                      <span className="bg-[#03A6A6] size-5 rounded-full flex justify-center items-center mt-1 flex-shrink-0">
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
            All plans include 24/7 monitoring by our crypto experts and
            institutional-grade security.
          </p>
        </TransitionWrapper>
      </div>

      <div className="w-full h-[400px] lg:h-[500px] max-w-4xl mx-auto px-8 my-10">
        <CryptoChart />
      </div>

      {/* Future of Crypto */}
      <div className="bg-greenColor py-16 mb-20">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            The Future is <span className="text-redColor">Digital</span>
          </h2>
          <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
            From decentralized finance to Web3 and beyond, cryptocurrencies are
            building the foundation of tomorrow's internet. While the technology
            evolves, we'll handle the complexities so you can enjoy being part
            of this revolution.
          </p>
          <div className="flex justify-center">
            <Link href="/register"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-redColor hover:bg-redColor/80 text-white py-3 px-8 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
            >
              <FaRocket /> Get Started
            </Link>
          </div>
        </div>
      </div>

      

      <Footer />
    </section>
  );
};

export default CryptoPage;
