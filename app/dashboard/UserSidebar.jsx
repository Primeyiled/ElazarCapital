"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../../components/ui/Sidebar";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import MainBody from "./MainBody";
import { Dashinks } from "@/constants/data";
import AuthCheck from "../AuthCheck";

export function UserSidebar({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <AuthCheck>
      <div
        className={cn(
          "rounded-md flex flex-col md:flex-row bg-neutral-800 w-full flex-1 border border-neutral-200 dark:border-neutral-700"
        )}
      >
        <Sidebar open={open} setOpen={setOpen}>
          <SidebarBody className="justify-between gap-10 h-full md:h-screen">
            <div className="flex flex-col flex-1">
              {open ? <Logo /> : <LogoIcon />}
              <div className="mt-8 flex flex-col gap-2">
                {Dashinks.map((link, idx) => (
                  <SidebarLink key={idx} link={link} />
                ))}
              </div>
            </div>
          </SidebarBody>
        </Sidebar>
        <div className="flex-1 p-4 h-full overflow-y-auto">{children}</div>
      </div>
    </AuthCheck>
  );
}

export const Logo = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        Acet Labs
      </motion.span>
    </Link>
  );
};

export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};