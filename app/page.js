"use client"; // ✅ Ensure it's a client component

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
import { setLoading } from "@/lib/features/messageSlice";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

export default function Home() {
  const { loading } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  const backgroundRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    dispatch(setLoading(true));
    const timer = setTimeout(() => {
      dispatch(setLoading(false));
    }, 2000);
    return () => clearTimeout(timer);
  }, [dispatch]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!backgroundRef.current) return;
      const { clientX, clientY } = e;
      const { offsetWidth, offsetHeight } = backgroundRef.current;
      const xPos = (clientX / offsetWidth - 0.5) * 20;
      const yPos = (clientY / offsetHeight - 0.5) * 20;
      backgroundRef.current.style.backgroundPosition = `${50 + xPos}% ${50 + yPos}%`;
    };
    backgroundRef.current?.addEventListener("mousemove", handleMouseMove);
    return () => {
      backgroundRef.current?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {loading && <Loader />}
      <div className="bg-[#192626]">
        <div
          ref={backgroundRef}
          className="bg-center bg-cover bg-no-repeat w-full h-full"
          style={{
            background:
              "radial-gradient(circle at center, #192626, #0D5051, #F27457, #6C5AD4)",
            backgroundSize: "200% 200%",
            animation: "gradientAnimation 10s ease infinite",
            transition: "background-position 0.1s ease-out",
          }}
        >
          <Navbar />
          <Hero />
        </div>

        <div className="bg-[#192626]">
          <Benefits />
          <Advert />
          <Plan />
          <Promo />
          <AppleCardsCarouselDemo />
          <FAQ />
          <Footer />
        </div>
      </div>

      <style jsx global>{`
        @keyframes gradientAnimation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </>
  );
}
