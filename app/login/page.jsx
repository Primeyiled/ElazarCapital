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

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const { success, error, loading, modalOpen } = useSelector(
    (state) => state.message
  );

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(setLoading(true));
    dispatch(clearMessages());

    if (userInfo.email === "" || userInfo.password === "") {
      dispatch(setError("All fields are required"));
      dispatch(setLoading(false));
    } else if (!/\S+@\S+\.\S+/.test(userInfo.email)) {
      dispatch(setError("Please enter a valid email"));
      dispatch(setLoading(false));
    } else {
      try {
        const response = await fetch("/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userInfo),
        });

        const data = await response.json();

        if (response.ok) {
          // dispatch(setSuccess("Login successful!"));
          dispatch(setUserData(data.profile));
          router.push("/dashboard");
          console.log("success");
          
        } else {
          dispatch(setError(data.message || "Invalid credentials"));
        }
      } catch (error) {
        console.error("Error logging in:", error);
        dispatch(setError("An error occurred during login"));
      }
      dispatch(setLoading(false));
    }
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
            {/* <p className="text-xl text-darkColor">
              Join us and be part of something extraordinary
            </p> */}
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className=" p-4  md:p-8 rounded-2xl md:h-[80vh] h-full flex justify-center items-center flex-col"
        >
          <div className="col-span-1 mt-4 lg:mt-0 w-full">
            <h1 className="text-3xl text-center font-bold pb-6">
              Welcome Back
            </h1>

            <div className="input-group">
              <input
                type="email"
                name="email"
                value={userInfo.email}
                onChange={handleChange}
                className="input w-full rounded-lg p-2 text-darkColor"
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
                className="input w-full rounded-lg p-2 text-darkColor"
              />
              <label className="user-label text-sm">Password</label>
            </div>
          </div>
          <div className="mt-4 w-full flex items-center justify-between">
            <div className="flex gap-2 items-center">
              <input type="checkbox" />
              <span className="text-sm"> Remember me</span>
            </div>
            <Link href="/forgot-password" className="text-sm font-bold">
              {" "}
              Forgot Password
            </Link>
          </div>
          <div className="w-full">
            <button className="mt-6 md:mt-6 bg-redColor text-white py-3 md:py-4 px-10 text-sm rounded-lg w-full md:text-[16px]">
              Log in
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
