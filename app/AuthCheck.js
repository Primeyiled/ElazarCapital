"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import Loader from "@/components/Loader";

const AuthCheck = ({ children }) => {
  const router = useRouter();
  const { isAuthenticated } = useSelector((state) => state.user);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    if (!isAuthenticated) {
        console.log(isAuthenticated);
        
      router.push("/login"); // Redirect to login if not authenticated
    } else {
      setIsCheckingAuth(false); // Mark authentication check as complete
    }
  }, [isAuthenticated, router]);

  // Show loader while checking authentication
  if (isCheckingAuth) {
    return <Loader />;
  }

  // Render children if authenticated
  return isAuthenticated ? children : null;
};

export default AuthCheck;