"use client";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const Header = ({ page }) => {
  const { userData } = useSelector((state) => state.user);

  return (
    <div className="flex justify-between items-center pb-6 px-3 md:px-0">
      <h2 className="md:text-2xl font-bold">Hi, {userData?.userName}</h2>
      <h1 className=" font-thin text-xs md:text-sm text-gray-200 ">
        Home <span className="text-xs md:text-lg text-gray-200">| {page}</span>{" "}
      </h1>
      <Link
        href="/dashboard/profile"
        className="size-10 rounded-full flex justify-center items-center p-2 bg-purpleColor"
      >
        N
      </Link>
    </div>
  );
};

export default Header;
