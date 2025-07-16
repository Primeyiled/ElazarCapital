"use client";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import TransitionWrapper from "@/components/TransitionWrapper";
import {
  IconBuildingSkyscraper,
  IconCurrencyBitcoin,
  IconChartCandle,
  IconCoin,
  IconTrendingUp,
  IconShieldLock,
  IconDiamond,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdCheck } from "react-icons/md";
import CountUp from "react-countup";
import CTA from "@/components/CTA";

const page = () => {
  const services = [
    {
      name: "Crypto Investment",
      desc: "Secure digital asset management with expert portfolio strategies",
      icon: <IconCurrencyBitcoin className="size-16 text-redColor" />,
      link: "/plans/crypto_plans",
      features: [
        "Portfolio diversification",
        "Cold storage security",
        "Staking rewards",
        "ICO access",
      ],
    },
    {
      name: "Real Estate",
      desc: "Global property investments with stable returns",
      icon: <IconBuildingSkyscraper className="size-16 text-redColor" />,
      link: "/plans/real_estate_plans",
      features: [
        "Commercial properties",
        "REITs",
        "Development projects",
        "Rental income",
      ],
    },
    // {
    //   name: "Forex Trading",
    //   desc: "24/5 currency trading with institutional spreads",
    //   icon: <IconTrendingUp className="size-16 text-redColor" />,
    //   link: "/plans/forex_plans",
    //   features: [
    //     "Major/minor pairs",
    //     "Low latency execution",
    //     "Expert analysis",
    //     "Risk management",
    //   ],
    // },
    // {
    //   name: "Stock Trading",
    //   desc: "Global equities with advanced research tools",
    //   icon: <IconChartCandle className="size-16 text-redColor" />,
    //   link: "/plans/stock_plans",
    //   features: [
    //     "Fractional shares",
    //     "Dividend reinvestment",
    //     "IPO access",
    //     "Portfolio tracking",
    //   ],
    // },
    {
      name: "Gold Trading",
      desc: "Physical and paper gold investments",
      icon: <IconCoin className="size-16 text-redColor" />,
      link: "/plans/gold_plans",
      features: [
        "Spot prices",
        "Allocated storage",
        "Futures contracts",
        "Hedging strategies",
      ],
    },
    // {
    //   name: "Silver Trading",
    //   desc: "Precious metal trading with secure storage",
    //   icon: <IconCoin className="size-16 text-redColor" />,
    //   link: "/plans/silver_plans",
    //   features: [
    //     "Industrial demand focus",
    //     "Physical allocation",
    //     "ETFs",
    //     "Volatility management",
    //   ],
    // },
  ];

  return (
    <div>
      <div>
        <Heading
          page="Services"
          title="Premium Financial Solutions for Discerning Investors"
          tab="Services"
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
              <p className="text-lg opacity-80">Assets Under Management</p>
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

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-8 py-20">
        <TransitionWrapper>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Comprehensive Financial Services
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mb-12">
            We offer institutional-grade investment solutions tailored for
            private investors and organizations.
          </p>
        </TransitionWrapper>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <TransitionWrapper key={index}>
              <div className="bg-[#222E2E] rounded-xl p-8 h-full hover:bg-[#1D615F] transition-all duration-300 border border-[#1D615F]">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {service.name}
                </h3>
                <p className="text-gray-300 mb-5">{service.desc}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <MdCheck className="text-greenColor mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.link}
                  className="inline-block bg-redColor hover:bg-red-700 text-white py-2 px-6 rounded-lg transition-colors duration-300"
                >
                  Learn More
                </Link>
              </div>
            </TransitionWrapper>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-[#f2fafa] py-20">
        <div className="max-w-7xl mx-auto px-8">
          <TransitionWrapper>
            <h2 className="text-3xl lg:text-5xl font-bold text-greenColor text-center mb-4">
              Why Investors Choose ElazarCapital
            </h2>
            <p className="text-lg text-[#898d96] text-center max-w-3xl mx-auto mb-16">
              Our commitment to excellence sets us apart in the financial
              services industry
            </p>
          </TransitionWrapper>

          <div className="grid md:grid-cols-3 gap-10">
            <TransitionWrapper>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <IconShieldLock className="size-12 text-redColor mb-6" />
                <h3 className="text-2xl font-bold text-greenColor mb-4">
                  Regulated Security
                </h3>
                <p className="text-[#898d96]">
                  Fully compliant with international financial regulations
                  ensuring the highest standards of investor protection.
                </p>
              </div>
            </TransitionWrapper>
            <TransitionWrapper>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <IconDiamond className="size-12 text-redColor mb-6" />
                <h3 className="text-2xl font-bold text-greenColor mb-4">
                  Premium Execution
                </h3>
                <p className="text-[#898d96]">
                  Ultra-low latency trade execution with tight spreads across
                  all asset classes.
                </p>
              </div>
            </TransitionWrapper>
            <TransitionWrapper>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <IconTrendingUp className="size-12 text-redColor mb-6" />
                <h3 className="text-2xl font-bold text-greenColor mb-4">
                  Expert Insights
                </h3>
                <p className="text-[#898d96]">
                  Daily market analysis and investment strategies from our team
                  of seasoned professionals.
                </p>
              </div>
            </TransitionWrapper>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <CTA />
      <Footer />
    </div>
  );
};

export default page;
