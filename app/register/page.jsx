"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSuccess,
  setError,
  setLoading,
  clearMessages,
  toggleModal,
} from "@/lib/features/messageSlice";
import { ErrorMessages, SuccessMessages } from "@/components/Messages";
import Loader from "@/components/Loader";

const Register = () => {
  const [userInfo, setUserInfo] = useState({
    fullName: "",
    userName: "",
    email: "",
    investment: "",
    address: "",
    referral: "",
    phoneNo: "",
    password: "",
    reTypePassword: "",
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

    if (
      userInfo.fullName === "" ||
      userInfo.userName === "" ||
      userInfo.email === "" ||
      userInfo.investment === "" ||
      userInfo.reTypePassword === "" ||
      userInfo.password === ""
    ) {
      dispatch(setError("All fields are required"));
      dispatch(setLoading(false));
    } else {
      const userData = {
        fullName: userInfo.fullName,
        userName: userInfo.userName,
        email: userInfo.email,
        investment: userInfo.investment,
        address: userInfo.address,
        referral: userInfo.referral,
        phoneNo: userInfo.phoneNo,
        password: userInfo.password,
      };
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      if (response.ok) {
        dispatch(setSuccess(data.message));
      } else {
        dispatch(setError(data.message));
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
      <div className="grid lg:grid-cols-2 w-full mx-auto max-w-7xl px-4 overflow-hidden gap-20 pb-10">
        <div className="col-span-1 hidden lg:flex bg-redColor w-full rounded-2xl h-[80vh] p-10 justify-center items-center text-center">
          <div className="grid place-items-center gap-6">
            <img
              src="/computer.gif"
              alt="computer-image"
              className="w-[250px]"
            />
            <h1 className="text-4xl font-bold">
              Connect, grow and succeed. It all start with registration.
            </h1>
            <p className="text-xl">
              Join us and be part of something extraordinary
            </p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className=" p-4  md:mt-0 md:p-8 rounded-2xl md:h-[80vh] flex justify-center items-center flex-col"
        >
          <div className="col-span-1 mt-10 lg:mt-0 w-full">
            <h1 className="text-3xl text-center font-bold pb-6">Get Started</h1>
            <div className="grid md:grid-cols-2 md:gap-4 gap-1 w-full">
              <div className="input-group">
                <input
                  onChange={handleChange}
                  value={userInfo.fullName}
                  type="text"
                  placeholder=" "
                  name="fullName"
                  className="input w-full rounded-lg p-2 text-darkColor"
                />
                <label className="user-label text-sm">Full Name</label>
              </div>
              <div className="input-group">
                <input
                  onChange={handleChange}
                  value={userInfo.userName}
                  type="text"
                  name="userName"
                  placeholder=" "
                  className="input w-full rounded-lg p-2 text-darkColor"
                />
                <label className="user-label text-sm">Username</label>
              </div>
            </div>

            <div className="input-group">
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={userInfo.email}
                className="input w-full rounded-lg p-2 text-darkColor"
                placeholder=" "
              />
              <label className="user-label text-sm" htmlFor="email">
                Email
              </label>
            </div>

            <div className="mt-6">
              <select
                name="investment"
                value={userInfo.investment}
                onChange={handleChange}
                className="select w-full rounded-lg p-3 text-darkColor text-sm"
              >
                <option value="" disabled>
                  Choose Initial Plan
                </option>
                <option value="Real Estate">Real Estate</option>
                <option value="Crypto currency">Crypto Currency</option>
                <option value="Forex Investment">Forex Investment</option>
                <option value="Stock Investment">Stock Investment</option>
              </select>
              {/* <label className="select-label text-sm">Initial Plan</label> */}
            </div>

            <div className="input-group">
              <input
                type="text"
                name="address"
                onChange={handleChange}
                value={userInfo.address}
                className="input w-full rounded-lg p-2 text-darkColor"
                placeholder=" "
              />
              <label className="user-label text-sm" htmlFor="email">
                Address (Optional)
              </label>
            </div>

            <div className="grid md:grid-cols-2 md:gap-4 gap-1">
              <div className="input-group">
                <input
                  onChange={handleChange}
                  value={userInfo.referral}
                  type="text"
                  name="referrer"
                  placeholder=" "
                  className="input w-full rounded-lg p-2 text-darkColor"
                />
                <label className="user-label text-sm">
                  Referral Code (Optional)
                </label>
              </div>
              <div className="input-group">
                <input
                  onChange={handleChange}
                  value={userInfo.phoneNo}
                  type="number"
                  name="phoneNo"
                  placeholder=" "
                  className="input w-full rounded-lg p-2 text-darkColor"
                />
                <label className="user-label text-sm">
                  Phone Number (Optional)
                </label>
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-4 gap-1">
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
              <div className="input-group">
                <input
                  onChange={handleChange}
                  value={userInfo.reTypePassword}
                  type="password"
                  name="reTypePassword"
                  placeholder=" "
                  className="input w-full rounded-lg p-2 text-darkColor"
                />
                <label className="user-label text-sm">Confirm Password</label>
              </div>
            </div>
          </div>
          <div className="w-full">
            <p className="pt-4">
              I agree to the
              <Link className="text-redColor font-bold" href="/login">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link className="text-redColor font-bold" href="/login">
                Privacy Policy
              </Link>{" "}
              .
            </p>
            <button className="mt-6 md:mt-6 bg-redColor text-white py-3 md:py-4 px-10 text-sm rounded-lg w-full md:text-[16px]">
              Register
            </button>
            <p className="pt-4">
              Already had an account?{" "}
              <Link className="text-redColor font-bold" href="/login">
                Log in
              </Link>
            </p>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Register;
