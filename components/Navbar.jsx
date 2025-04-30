"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import {
  MdArrowUpward,
  MdClose,
  MdMenu,
  MdArrowDropDown,
} from "react-icons/md";
import {
  GiGoldBar,
  GiSilverBullet,
  GiStoneBlock,
  GiTrade,
} from "react-icons/gi";
import { FaBitcoin, FaBuilding, FaChartLine } from "react-icons/fa";
import { gsap } from "gsap";
import GoogleTranslate from "./GoogleTranslate";
import Image from "next/image";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [plansDropdown, setPlansDropdown] = useState(false);
  const pathname = usePathname();
  const arrowRef = useRef(null);
  const dropdownRef = useRef(null);

  const handleMenu = () => {
    setToggleMenu((prev) => !prev);
  };

  const togglePlansDropdown = () => {
    setPlansDropdown(!plansDropdown);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setPlansDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP animation for the arrow
  useEffect(() => {
    if (arrowRef.current) {
      gsap.from(arrowRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        delay: 0.5,
        ease: "power2.out",
      });

      gsap.to(arrowRef.current, {
        y: -10,
        repeat: -1,
        yoyo: true,
        duration: 1,
        ease: "power1.inOut",
      });
    }
  }, []);

  const isActive = (href) => {
    return pathname === href;
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const planItems = [
    {
      name: "Crypto Investment Plan",
      href: "/plans/crypto_plans",
      icon: <FaBitcoin className="text-yellow-400" />,
    },
    {
      name: "Real Estate Investment Plan",
      href: "/plans/real_estate_plans",
      icon: <FaBuilding className="text-blue-400" />,
    },
    {
      name: "Gold Investment Plan",
      href: "/plans/gold_plans",
      icon: <GiGoldBar className="text-yellow-500" />,
    },
    {
      name: "Forex Investment Plan",
      href: "/plans/forex_plans",
      icon: <GiTrade className="text-green-400" />,
    },
    {
      name: "Stock Investment Plan",
      href: "/plans/stock_plans",
      icon: <FaChartLine className="text-red-400" />, // Changed to FaChartLine
    },
    {
      name: "Silver Investment Plan",
      href: "/plans/silver_plans",
      icon: <GiSilverBullet className="text-gray-300" />,
    },
  ];

  return (
    <div
      className={`w-full transition-all duration-300 ${
        isScrolled
          ? "fixed top-0 left-0 right-0 z-50 bg-darkColor/90 backdrop-blur-sm"
          : "lg:bg-transparent"
      }`}
    >
      <div
        className={`duration-300 px-4 py-4 ${
          isScrolled ? "lg:py-2" : "lg:py-2"
        } xl:px-12`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Image
            width={50}
            height={50}
            src="/logo.png"
            alt="swizzfunds_logo"
            className="size-50"
          />

          <div
            className={`${
              toggleMenu
                ? "bg-darkColor lg:bg-transparent absolute duration-300 lg:relative z-50 top-20 left-0 right-0 w-full h-auto px-4 py-10 flex-col lg:flex-row flex lg:justify-center gap-6 font-semibold text-sm"
                : "hidden lg:flex gap-10 font-semibold py-6"
            }`}
          >
            <Link
              href="/"
              className={`${
                isActive("/")
                  ? "text-redColor relative"
                  : "text-white hover:text-redColor transition-all duration-300"
              }`}
            >
              Home
              {isActive("/") && (
                <span className="absolute -bottom-4 left-0 w-full h-1 bg-redColor transition-all duration-300" />
              )}
            </Link>
            <Link
              href="/about"
              className={`${
                isActive("/about")
                  ? "text-redColor relative"
                  : "text-white hover:text-redColor transition-all duration-300"
              }`}
            >
              About
              {isActive("/about") && (
                <span className="absolute -bottom-4 left-0 w-full h-1 bg-redColor transition-all duration-300" />
              )}
            </Link>
            <Link
              href="/services"
              className={`${
                isActive("/services")
                  ? "text-redColor relative"
                  : "text-white hover:text-redColor transition-all duration-300"
              }`}
            >
              Services
              {isActive("/services") && (
                <span className="absolute -bottom-4 left-0 w-full h-1 bg-redColor transition-all duration-300" />
              )}
            </Link>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={togglePlansDropdown}
                className={`flex items-center gap-1 ${
                  isActive("/pages")
                    ? "text-redColor relative"
                    : "text-white hover:text-redColor transition-all duration-300"
                }`}
              >
                Plans
                <MdArrowDropDown
                  className={`transition-transform duration-200 ${
                    plansDropdown ? "rotate-180" : ""
                  }`}
                />
                {isActive("/pages") && (
                  <span className="absolute -bottom-4 left-0 w-full h-1 bg-redColor transition-all duration-300" />
                )}
              </button>

              {/* Desktop Dropdown */}
              <div
                className={`hidden lg:block absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-greenColor/95 backdrop-blur-sm overflow-hidden transition-all duration-300 origin-top ${
                  plansDropdown
                    ? "scale-y-100 opacity-100"
                    : "scale-y-0 opacity-0"
                }`}
              >
                <div className="py-1">
                  {planItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="flex items-center px-4 py-3 text-sm text-white hover:bg-redColor/20 hover:text-redColor transition-colors duration-200 gap-3"
                      onClick={() => setPlansDropdown(false)}
                    >
                      <span className="text-xl">{item.icon}</span>
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Dropdown */}
              <div
                className={`lg:hidden ${
                  plansDropdown ? "block" : "hidden"
                } mt-2 w-full`}
              >
                <div className="py-1 space-y-2 pl-4">
                  {planItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="flex items-center px-4 py-2 text-sm text-white hover:bg-redColor/20 hover:text-redColor rounded transition-colors duration-200 gap-3"
                      onClick={() => {
                        setPlansDropdown(false);
                        setToggleMenu(false);
                      }}
                    >
                      <span className="text-xl">{item.icon}</span>
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link
              href="/blog"
              className={`${
                isActive("/blog")
                  ? "text-redColor relative"
                  : "text-white hover:text-redColor transition-all duration-300"
              }`}
            >
              Blog
              {isActive("/blog") && (
                <span className="absolute -bottom-4 left-0 w-full h-1 bg-redColor transition-all duration-300" />
              )}
            </Link>
            <Link
              href="/contact"
              className={`${
                isActive("/contact")
                  ? "text-redColor relative"
                  : "text-white hover:text-redColor transition-all duration-300"
              }`}
            >
              Contact
              {isActive("/contact") && (
                <span className="absolute -bottom-4 left-0 w-full h-1 bg-redColor transition-all duration-300" />
              )}
            </Link>
          </div>

          <div className="flex gap-4 items-center lg:hidden">
            <span className="bg-black flex justify-center items-center p-2 rounded-lg size-12 lg:hidden">
              <MdMenu
                className={!toggleMenu ? "size-9 absolute" : "hidden"}
                onClick={handleMenu}
              />
              <MdClose
                className={toggleMenu ? "size-9 absolute" : "hidden"}
                onClick={handleMenu}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
