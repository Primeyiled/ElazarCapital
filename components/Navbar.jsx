"use client";
import Link from "next/link";
import { usePathname } from "next/navigation"; 
import React, { useState, useEffect } from "react";
import { MdArrowUpward, MdClose, MdMenu } from "react-icons/md";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const handleMenu = () => {
    setToggleMenu((prev) => !prev);
  };

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

  const isActive = (href) => {
    return pathname === href;
  };

  return (
    <div
      className={`w-full transition-all duration-300 ${
        isScrolled
          ? "bg-darkColor fixed top-0 left-0 right-0 z-50"
          : "lg:bg-transparent"
      }`}
    >
      <div
        className={`bg-darkColor lg:bg-transparent duration-300 px-4 py-4 ${
          isScrolled ? "lg:py-2" : "lg:py-8"
        } xl:px-12`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Plax</h1>

          <div
            className={`${
              toggleMenu
                ? "bg-darkColor lg:bg-transparent absolute duration-300 lg:relative top-20 left-0 right-0 w-full h-auto px-4 py-10 flex-col lg:flex-row flex lg:justify-center gap-6 font-semibold text-sm"
                : "hidden lg:flex gap-10 font-semibold py-6"
            }`}
          >
            <Link
              href="/"
              className={`${
                isActive("/")
                  ? "text-redColor relative "
                  : "text-white"
              } transition-all duration-300`}
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
                  ? "text-redColor relative "
                  : "text-white"
              } transition-all duration-300`}
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
                  ? "text-redColor relative "
                  : "text-white"
              } transition-all duration-300`}
            >
              Services
              {isActive("/services") && (
                <span className="absolute -bottom-4 left-0 w-full h-1 bg-redColor transition-all duration-300" />
              )}
            </Link>
            <Link
              href="/blog"
              className={`${
                isActive("/blog")
                  ? "text-redColor relative "
                  : "text-white"
              } transition-all duration-300`}
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
                  ? "text-redColor relative "
                  : "text-white"
              } transition-all duration-300`}
            >
              Contact
              {isActive("/contact") && (
                <span className="absolute -bottom-4 left-0 w-full h-1 bg-redColor transition-all duration-300" />
              )}
            </Link>
            <Link
              href="/pages"
              className={`${
                isActive("/pages")
                  ? "text-redColor relative "
                  : "text-white"
              } transition-all duration-300`}
            >
              Pages
              {isActive("/pages") && (
                <span className="absolute -bottom-4 left-0 w-full h-1 bg-redColor transition-all duration-300" />
              )}
            </Link>
          </div>

          <div className="flex gap-4 items-center">
            <Link
              href="/login"
              className="bg-redColor py-3 px-4 font-semibold rounded-lg"
            >
              Log in
            </Link>
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
      <a
        href="#"
        className={
          isScrolled
            ? "bg-redColor size-14 rounded-full flex justify-center items-center text-2xl fixed bottom-7 right-4"
            : "hidden"
        }
      >
        <MdArrowUpward />
      </a>
    </div>
  );
};

export default Navbar;
