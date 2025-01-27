"use client";

import { useEffect, useState } from "react";

const OnlineChecker = () => {
  const [isOnline, setIsOnline] = useState(false);

  // Ensure that the code is running in the browser before checking navigator
  const checkInternetConnection = async () => {
    const servers = [
      "https://jsonplaceholder.typicode.com/posts", 
      "https://www.google.com", 
    ];

    for (const server of servers) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); 

        const response = await fetch(server, {
          method: "GET",
          cache: "no-cache",
          signal: controller.signal,
        });

        clearTimeout(timeoutId); 

        if (response.ok) {
          console.log("Internet connection check succeeded:", server);
          return true;
        }
      } catch (error) {
        console.error("Failed to check connection for:", server, error);
      }
    }

    return false; 
  };

  useEffect(() => {
    // Ensure this runs only in the client-side environment
    if (typeof window !== "undefined") {
      const updateOnlineStatus = async () => {
        const isConnected = await checkInternetConnection();
        console.log("updateOnlineStatus:", isConnected);
        setIsOnline(isConnected);
      };

      const interval = setInterval(updateOnlineStatus, 10000);

      return () => clearInterval(interval);
    }
  }, []);

  useEffect(() => {
    // Ensure this runs only in the client-side environment
    if (typeof window !== "undefined") {
      const handleOnline = () => {
        console.log("Online event fired");
        setIsOnline(true);
      };

      const handleOffline = () => {
        console.log("Offline event fired");
        setIsOnline(false);
      };

      window.addEventListener("online", handleOnline);
      window.addEventListener("offline", handleOffline);

      return () => {
        window.removeEventListener("online", handleOnline);
        window.removeEventListener("offline", handleOffline);
      };
    }
  }, []);

  useEffect(() => {
    console.log("isOnline updated:", isOnline);
  }, [isOnline]);

  // Show message when offline
  if (!isOnline) {
    return (
      <div
        className="w-[70%] lg:w-[30%] text-xs md:text-[15px] mx-auto rounded-lg bg-red-700"
        style={{
          color: "white",
          padding: "10px",
          textAlign: "center",
          position: "fixed",
          bottom: "20px",
          left: 0,
          right: 0,
          zIndex: 1000,
        }}
      >
        Oops, you are not connected to the internet
      </div>
    );
  }

  return null; // Return null if online
};

export default OnlineChecker;
