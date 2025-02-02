"use client";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

// const Header = ({ page }) => {
  // const { userData } = useSelector((state) => state.user);

//   return (

//   );
// };

// export default Header;
// components/Header.js
// components/Header.js
export default function Header({ setSidebarOpen }) {
  const { userData } = useSelector((state) => state.user);

  const getInitials = (name) => {
    if (!name) return "U";

    const parts = name.split(" ");
    const initials = parts.map((part) => part.charAt(0).toUpperCase()).join("");

    return initials;
  };
  return (
    <header className="bg-neutral-800 shadow">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button
              className="text-gray-100 focus:outline-none md:hidden"
              onClick={() => setSidebarOpen((prev) => !prev)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
          <div className="flex justify-between items-center gap-6 px-3 md:px-0">
            <h2 className="md:text-2xl font-bold">Hi, Boss</h2>
            {/* <h1 className=" font-thin text-xs md:text-sm text-gray-200 ">
              Home{" "}
              <span className="text-xs md:text-lg text-gray-200">| {page}</span>{" "}
            </h1> */}
            <p
              className="size-10 rounded-full flex justify-center items-center p-2 bg-purpleColor capitalize"
            >
             B
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
