"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import Loader from "@/components/Loader";

const AuthCheck = ({ children }) => {
  const router = useRouter();
  const { isAuthenticated, userData } = useSelector((state) => state.user);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    if (!isAuthenticated) {
      console.log("User is not authenticated. Redirecting to login...");
      router.push("/login"); // Redirect to login if not authenticated
    } else if (userData?.role === 1) {
      console.log("User is an admin. Redirecting to admin page...");
      router.push("/admin"); // Redirect to admin page if user is an admin
    } else {
      setIsCheckingAuth(false); // Mark authentication check as complete
    }
  }, [isAuthenticated, userData, router]);

  // Show loader while checking authentication
  if (isCheckingAuth) {
    return <Loader />;
  }

  // Render children if authenticated and not an admin
  return isAuthenticated && userData?.role !== 1 ? children : null;
};

export default AuthCheck;