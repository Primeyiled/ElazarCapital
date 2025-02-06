"use client";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import { ErrorMessages, SuccessMessages } from "@/components/Messages";
import Navbar from "@/components/Navbar";
import {
  setSuccess,
  setError,
  setLoading,
  clearMessages,
  toggleModal,
} from "@/lib/features/messageSlice";
import { setUserData } from "@/lib/features/userSlice";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { success, error, loading, modalOpen } = useSelector(
    (state) => state.message
  );

  // State for email, password, and OTP
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [otp, setOtp] = useState("");
  const [showOtpField, setShowOtpField] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value); // Update OTP input
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    dispatch(clearMessages());

    // Validate email and password
    if (userInfo.email === "" || userInfo.password === "") {
      dispatch(setError("All fields are required"));
      dispatch(setLoading(false));
      return;
    }

    if (!/\S+@\S+\.\S+/.test(userInfo.email)) {
      dispatch(setError("Please enter a valid email"));
      dispatch(setLoading(false));
      return;
    }

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userInfo.email,
          password: userInfo.password,
          otp: showOtpField ? otp : undefined, // Include OTP only if OTP field is visible
        }),
      });

      const data = await response.json();

      if (response.ok) {
        if (!showOtpField) {
          setShowOtpField(true);
          dispatch(
            setSuccess(
              "We have sent a verification code to your email address."
            )
          );
        } else {
          dispatch(setUserData(data.profile));
          if (data.profile.role === 1) {
            router.push("/admin");
          } else {
            router.push("/dashboard");
          }
        }
      } else {
        dispatch(setError(data.message || "Invalid credentials"));
      }
    } catch (error) {
      console.error("Error logging in:", error);
      dispatch(setError("An error occurred during login"));
    }
    dispatch(setLoading(false));
  };

  const handleModalClose = () => {
    dispatch(toggleModal());
  };

  return (
    <div>
      {success && modalOpen && (
        <SuccessMessages
          data={success}
          isOpen={handleModalClose}
          status={modalOpen}
        />
      )}
      {error && modalOpen && (
        <ErrorMessages
          data={error}
          isOpen={handleModalClose}
          status={modalOpen}
        />
      )}

      {loading && <Loader />}
      <Navbar />
      <div className="grid lg:grid-cols-2 h-screen w-full mx-auto max-w-7xl px-4 overflow-hidden gap-20 pb-10">
        <div className="col-span-1 hidden lg:flex bg-white w-full rounded-2xl h-[80vh] p-10 justify-center items-center text-center">
          <div className="grid place-items-center gap-6">
            <Image
              unoptimized
              width={500}
              height={500}
              src="/key.gif"
              alt="key-image"
              className="w-[250px]"
            />
            <h1 className="text-4xl font-bold text-darkColor">
              Login safely, stay protected. Your account is our top priority.
            </h1>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="p-4 md:p-8 rounded-2xl md:h-[80vh] h-full flex justify-center items-center flex-col"
        >
          <div className="col-span-1 mt-4 lg:mt-0 w-full">
            {/* Conditionally render email and password fields only if OTP hasn't been sent */}
            {!showOtpField ? (
              <>
                <h1 className="text-3xl text-center font-bold pb-6">
                  Welcome Back
                </h1>
                <div className="input-group">
                  <input
                    type="email"
                    name="email"
                    value={userInfo.email}
                    onChange={handleChange}
                    className="input w-full rounded-lg px-2 py-3 text-darkColor"
                    placeholder=" "
                  />
                  <label className="user-label text-sm" htmlFor="email">
                    Email
                  </label>
                </div>

                <div className="input-group">
                  <input
                    onChange={handleChange}
                    value={userInfo.password}
                    type="password"
                    name="password"
                    placeholder=" "
                    className="input w-full rounded-lg px-2 py-3 text-darkColor"
                  />
                  <label className="user-label text-sm">Password</label>
                </div>
              </>
            ) : (
              <div className="">
                <h1 className="text-3xl text-center font-bold pb-6">
                  OTP Verification
                </h1>
                <div className="input-group mt-4">
                  <input
                    type="text"
                    name="otp"
                    value={otp}
                    onChange={handleOtpChange}
                    className="input w-full rounded-lg px-2 py-3 text-darkColor"
                    placeholder=""
                  />
                  <label className="user-label text-sm">OTP</label>
                </div>
              </div>
            )}
          </div>

          <div className="mt-4 w-full flex items-center justify-between">
            <div className="flex gap-2 items-center">
              <input type="checkbox" />
              <span className="text-sm">Remember me</span>
            </div>
            <Link href="/password-reset" className="text-sm font-bold">
              Forgot Password
            </Link>
          </div>

          <div className="w-full">
            <button
              type="submit"
              className="mt-6 md:mt-6 bg-redColor text-white py-3 md:py-4 px-10 text-sm rounded-lg w-full md:text-[16px]"
            >
              {showOtpField ? "Verify OTP" : "Log in"}
            </button>
            <p className="pt-4">
              New User?{" "}
              <Link
                className="text-redColor font-bold text-sm"
                href="/register"
              >
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
