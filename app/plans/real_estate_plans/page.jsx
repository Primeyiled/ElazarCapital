"use client";
import Heading from "@/components/Heading";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaBuilding, 
  FaHome, 
  FaCity,
  FaChartLine,
  FaShieldAlt,
  FaHandshake
} from "react-icons/fa";
import { GiHouseKeys, GiProfit } from "react-icons/gi";
import Image from "next/image";
import TransitionWrapper from "@/components/TransitionWrapper";
import CountUp from "react-countup";
import Footer from "@/components/Footer";

const RealEstatePage = () => {
  const [activeTab, setActiveTab] = useState("benefits");

  const realEstateFacts = [
    {
      icon: <FaBuilding className="text-3xl text-blue-500" />,
      title: "The Empire State Building",
      content: "This iconic property was constructed during the Great Depression in just 410 days and was the world's tallest building for 40 years."
    },
    {
      icon: <GiHouseKeys className="text-3xl text-green-500" />,
      title: "Long-Term Value",
      content: "Real estate has historically doubled in value every 10 years on average, making it one of the most stable investments."
    },
    {
      icon: <FaCity className="text-3xl text-orange-500" />,
      title: "Urbanization Trend",
      content: "By 2050, 68% of the world population will live in urban areas, driving continuous demand for quality properties."
    }
  ];

  return (
    <section className="">
      <div>
        <Heading
          page="Real Estate Investment"
          title="Building Wealth Through Property Investments"
          tab="Real Estate"
        />
      </div>

      {/* Stats Banner */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 py-16">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-8 text-center">
          <TransitionWrapper>
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                $<CountUp end={250} enableScrollSpy={true} />M+
              </h1>
              <p className="text-lg opacity-80">Property Portfolio</p>
            </div>
          </TransitionWrapper>
          <TransitionWrapper>
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                <CountUp end={500} enableScrollSpy={true} />+
              </h1>
              <p className="text-lg opacity-80">Properties Acquired</p>
            </div>
          </TransitionWrapper>
          <TransitionWrapper>
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                <CountUp end={12} enableScrollSpy={true} />%
              </h1>
              <p className="text-lg opacity-80">Average Annual Return</p>
            </div>
          </TransitionWrapper>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-8 py-16 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Tangible Assets, <span className="text-blue-400">Lasting Value</span>
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Real estate remains one of the most reliable wealth-building vehicles. 
            Our experts identify high-potential properties across residential, 
            commercial, and development opportunities while you enjoy passive 
            ownership benefits.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
              Explore Properties
            </button>
            <button className="bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white py-3 px-6 rounded-lg font-semibold transition-colors">
              Investment Guide
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <Image
            src="/real-estate.jpg"
            alt="Luxury real estate"
            width={600}
            height={400}
            className="rounded-xl shadow-2xl"
          />
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -bottom-6 -left-6 bg-darkColor p-4 rounded-lg shadow-lg border border-gray-800"
          >
            <FaHome className="text-4xl text-blue-400" />
          </motion.div>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            className="absolute -top-6 -right-6 bg-darkColor p-4 rounded-lg shadow-lg border border-gray-800"
          >
            <GiProfit className="text-4xl text-green-400" />
          </motion.div>
        </motion.div>
      </div>

      {/* Market Insights Section */}
      <div className="bg-blue-900/50 py-16">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Real Estate <span className="text-blue-400">Market Insights</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {realEstateFacts.map((fact, index) => (
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

      {/* Investment Approach */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">
          Our <span className="text-blue-400">Investment Strategy</span>
        </h2>
        <p className="text-gray-400 mb-12 text-center max-w-2xl mx-auto">
          We combine market research, local expertise, and financial analysis to identify the best opportunities
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaHome className="text-4xl text-blue-400" />,
              title: "Residential",
              desc: "Luxury apartments, vacation homes, and high-demand rental properties"
            },
            {
              icon: <FaBuilding className="text-4xl text-blue-400" />,
              title: "Commercial",
              desc: "Office spaces, retail centers, and mixed-use developments"
            },
            {
              icon: <FaChartLine className="text-4xl text-blue-400" />,
              title: "Development",
              desc: "Ground-up construction projects in emerging neighborhoods"
            }
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

      {/* Property Spotlight */}
      {/* <div className="bg-gradient-to-r from-blue-900 to-blue-700 py-16">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Featured <span className="text-blue-300">Properties</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <FaHome className="text-blue-300" />
                Miami Waterfront Condos
              </h3>
              <p className="text-gray-300 mb-6">
                Luxury high-rise development with panoramic ocean views. 
                Our analysts identified this pre-construction opportunity 
                with an estimated 22% appreciation potential over 3 years.
              </p>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3 mt-8">
                <FaBuilding className="text-blue-300" />
                Austin Tech Hub Offices
              </h3>
              <p className="text-gray-300">
                Commercial space in the fastest-growing tech city, featuring 
                long-term leases with credit tenants and 7.5% net yields.
              </p>
            </div>
            <div className="relative h-64 md:h-96">
              <Image
                src="/featured-properties.jpg"
                alt="Featured properties"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div> */}

      {/* Why Real Estate Section */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="bg-darkColor/50 rounded-xl p-8 md:p-12 border border-gray-700">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why <span className="text-blue-400">Real Estate?</span>
              </h2>
              <p className="text-gray-300 mb-6">
                Real estate offers unique advantages that other investments can't match:
              </p>
              <ul className="space-y-4">
                {[
                  "Tangible asset with intrinsic value",
                  "Hedge against inflation",
                  "Multiple income streams (rent, appreciation)",
                  "Tax advantages and depreciation benefits",
                  "Lower volatility than stocks"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <FaHandshake className="text-blue-400 mt-1 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-64 md:h-80">
              <Image
                src="/real-estate-benefits.jpg"
                alt="Real estate benefits"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-900 py-16">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to <span className="text-blue-300">Invest in Brick and Mortar?</span>
          </h2>
          <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
            Our real estate specialists will guide you through every step, from property selection to ownership.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-lg font-semibold transition-colors">
              View Investment Plans
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 py-3 px-8 rounded-lg font-semibold transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default RealEstatePage;