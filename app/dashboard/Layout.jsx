"use client";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import AuthCheck from "../AuthCheck";

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Function to close the sidebar
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <AuthCheck>
      <div className="flex min-h-screen bg-gray-100 w-full">
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
            onClick={closeSidebar}
          ></div>
        )}

        {/* Main content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <Header setSidebarOpen={setSidebarOpen} />

          {/* Main content area */}
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-neutral-900 ">
            <div className="container mx-auto px-4 py-6">{children}</div>
          </main>
        </div>
      </div>
    </AuthCheck>
  );
}
