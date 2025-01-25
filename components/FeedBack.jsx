"use client";
import Image from "next/image";
import React from "react";
import { Card, Carousel } from "./ui/AppleCardsCarousel";
import { FeedBacks } from "@/constants/data";
import Link from "next/link";

export function AppleCardsCarouselDemo() {
  const cards = FeedBacks.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full ">
      <div className="py-20 max-w-7xl mx-auto">
        <h1 className="font-bold text-3xl lg:text-6xl xl:max-w-2xl mx-auto text-center">
          What our users say about us
        </h1>
        <Carousel items={cards} />
      </div>

      <div
        className=" mt-20 h-full w-full flex flex-col justify-between items-center px-6"
        style={{ background: "linear-gradient(180deg, #f27457, #a08488)" }}
      >
        <div className="flex flex-col justify-center items-center gap-12 py-24 lg:py-32">
          <h1 className="font-bold text-xl lg:text-5xl xl:max-w-2xl mx-auto text-center">
            Transform your Financial Future with Plax!
          </h1>
          <p className="text-xl xl:max-w-2xl text-center">
            With our intuitive and personalized tools, achieving your financial
            goals is within your reach. Invest in your financial success today
            with Plax!"
          </p>
          <div className="mt-8">
            <Link
              href="/"
              className="bg-redColor rounded-xl py-6 px-8 font-semibold"
            >
              Explore More
            </Link>
          </div>
        </div>

        <div className="grid place-items-center">
          <Image
            width={500}
            height={500}
            src="/half.png"
            alt=""
            className="w-[70%]"
          />
        </div>
      </div>
    </div>
  );
}
