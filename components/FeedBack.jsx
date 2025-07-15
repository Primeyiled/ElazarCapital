"use client";
import Image from "next/image";
import React from "react";
import { Card, Carousel } from "./ui/AppleCardsCarousel";
import { FeedBacks } from "@/constants/data";
import Link from "next/link";
import TransitionWrapper from "./TransitionWrapper";

export function AppleCardsCarouselDemo() {
  const cards = FeedBacks.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full ">
      <div className="py-20 max-w-7xl mx-auto">
        <TransitionWrapper>
          <h1 className="font-bold text-3xl lg:text-6xl/[5rem] xl:max-w-2xl mx-auto text-center">
            What our users say about us
          </h1>
        </TransitionWrapper>
        <Carousel items={cards} />
      </div>

      <div
        className="mt-20 h-full w-full flex flex-col justify-between items-center px-6"
        style={{ background: "linear-gradient(180deg, #f27457, #a08488)" }}
      >
        <div className="flex flex-col justify-center items-center gap-12 py-24 lg:py-32">
          <TransitionWrapper>
            <h1 className="font-bold text-xl lg:text-5xl/[4rem] xl:max-w-2xl mx-auto text-center">
              Empower Your Trading Journey with ElazarCapital
            </h1>
          </TransitionWrapper>
          <TransitionWrapper>
            <p className="lg:text-xl xl:max-w-2xl text-center text-white">
              Join thousands of global traders accessing 1,000+ assets,
              real-time market insights, and advanced tools—all from one
              powerful platform. With ElazarCapital, financial freedom is just a
              trade away.
            </p>
          </TransitionWrapper>
          <TransitionWrapper>
            <div className="mt-8">
              <Link
                href="/"
                className="bg-redColor rounded-xl py-6 px-8 font-semibold"
              >
                Get Started
              </Link>
            </div>
          </TransitionWrapper>
        </div>
        <TransitionWrapper>
          <div className="grid place-items-center">
            <Image
              width={500}
              height={500}
              src="/half.png"
              alt="Trading Illustration"
              className="w-[70%] md:w-full"
            />
          </div>
        </TransitionWrapper>
      </div>
    </div>
  );
}
