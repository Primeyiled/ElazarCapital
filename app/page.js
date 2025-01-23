'use client'
import Advert from "@/components/Advert";
import Benefits from "@/components/Benefits";
import FAQ from "@/components/FAQ";
import { AppleCardsCarouselDemo } from "@/components/FeedBack";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Plan from "@/components/Plan";
import Promo from "@/components/Promo";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for the loader (optional)
    const timer = setTimeout(() => {
      setLoading(false); // Hide loader after 2 seconds or when the page is loaded
    }, 2000);

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    {loading && <Loader />}
    <div className="bg-[#192626]">
      <div className="bg-center bg-cover bg-no-repeat h-full w-full " style={{ backgroundImage: `url(/herobg.png)` }}>

      <Navbar/>
      <Hero/>
      </div>
      <Benefits/>
      <Advert/>
      <Plan/>
      <Promo/>
      <AppleCardsCarouselDemo/>
      <FAQ/>
      <Footer/>
    </div>
    </>
  );
}
