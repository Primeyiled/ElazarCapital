"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  MdAdd,
  MdCopyAll,
  MdDownload,
  MdInventory,
  MdLink,
} from "react-icons/md";
import Header from "./Header";
import Loader from "@/components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { clearUserData, setUserData } from "@/lib/features/userSlice";
import useSWR from "swr";
import Image from "next/image";
import CryptoChart from "@/components/CryptoChart";
import Layout from "./Layout";

const fetcher = async (url) => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 50000);

  try {
    const res = await fetch(url, {
      credentials: "include",
      signal: controller.signal,
    });
    clearTimeout(timeout);

    if (!res.ok) {
      throw new Error("Failed to fetch profile");
    }

    return res.json();
  } catch (error) {
    clearTimeout(timeout);
    throw error;
  }
};

const Page = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);

  const { data, error, isLoading } = useSWR("/api/user/profile", fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: true,
    refreshInterval: 0,
    shouldRetryOnError: true,
    retryCount: 3,
    fallbackData: {},
  });

  useEffect(() => {
   if (error && error.status === 401) {
    // Redirect to login if unauthorized
    router.push("/login");
  } else if (data && data.profile) {
    // Set user data only if the profile is returned
    dispatch(setUserData(data.profile));
  }
  }, [data, error, dispatch, router]);

  // Show loader while fetching data
  if (isLoading) {
    return <Loader />;
  }


  const accumulatedBalance =
    (userData?.totalProfit || 0) +
    (userData?.refBonus || 0) +
    (userData?.totalInvest || 0);

  const totalProfit = (userData?.totalProfit || 0) + (userData?.refBonus || 0);
  return (
    <>
      <Layout>
        <div className="rounded-xl py-8 px-4 md:px-8 bg-neutral-800 h-auto 2xl:h-[90vh] w-full">
          {/* <Header page="Dashboard" /> */}
          <div className="grid md:grid-cols-2 xl:gap-6 gap-4">
            {/* Balance Card */}
            <div className="bg-purpleColor p-4 rounded-3xl flex justify-between md:items-start">
              <div className="flex-col gap-2 flex justify-center items-start">
                {accumulatedBalance != null ? (
                  <h1 className="font-bold text-xl md:text-4xl">
                    ${accumulatedBalance}.
                    <span className="text-lg text-gray-300">00</span>
                  </h1>
                ) : (
                  <p>Loading...</p>
                )}

                <p className="text-sm text-gray-300 -tracking-tighter">
                  Accumulating Balance
                </p>
              </div>
              <div className="size-10 flex justify-center items-center bg-gray-100 rounded-full p-2">
                <Image width={500} height={500} src="/dd.png" alt="icon" />
              </div>
            </div>

            {/* Total Invest Card */}
            <div className="bg-white p-4 rounded-3xl flex justify-between">
              <div className="flex-col gap-2 flex justify-center items-start">
                {userData?.totalInvest != null ? (
                  <h1 className="font-bold text-xl md:text-4xl text-darkColor">
                    ${userData.totalInvest}.
                    <span className="text-lg text-gray-300">00</span>
                  </h1>
                ) : (
                  <p className="text-darkColor">Loading...</p>
                )}

                <p className="text-sm text-gray-500 -tracking-tighter">
                  Total Invest
                </p>
                <Link
                  href="/dashboard/deposit"
                  className="bg-darkColor text-white text-sm rounded-full px-6 py-2 flex gap-2 items-center"
                >
                  Deposit <MdAdd className="text-xl" />
                </Link>
              </div>
            </div>

            {/* Total Profit Card */}
            <div className="bg-white p-4 rounded-3xl flex justify-between">
              <div className="flex-col gap-2 flex justify-center items-start">
                {totalProfit != null ? (
                  <h1 className="font-bold text-xl md:text-4xl text-darkColor">
                    ${totalProfit}.
                    <span className="text-lg text-gray-300">00</span>
                  </h1>
                ) : (
                  <p className="text-darkColor">Loading...</p>
                )}
                <div className="flex gap-2 relative group">
                  <p className="text-sm text-gray-500 -tracking-tighter">
                    Total Profit
                  </p>
                  <span className="size-4 bg-gray-400 inline-flex justify-center items-center rounded-full">
                    ?
                    <span className="absolute bottom-full -right-[150px] transform -translate-x-1/2 mb-2 w-32 bg-darkColor text-white text-xs rounded-lg px-2 py-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      This includes the referral bonus and your investment bonus
                    </span>
                  </span>
                </div>
                <Link
                  href="/dashboard/withdrawal"
                  className="bg-darkColor text-white text-sm rounded-full px-6 py-2 flex gap-2 items-center"
                >
                  Withdraw <MdDownload className="text-xl" />
                </Link>
              </div>
            </div>

            {/* Referral Bonus Card */}
            <div className="bg-white p-4 rounded-3xl flex justify-between md:items-start">
              <div className="flex-col gap-2 flex justify-center items-start">
                {userData?.refBonus != null ? (
                  <h1 className="font-bold text-xl md:text-4xl text-darkColor">
                    ${userData.refBonus}.
                    <span className="text-lg text-gray-300">00</span>
                  </h1>
                ) : (
                  <p className="text-darkColor">Loading...</p>
                )}
                <p className="text-sm text-gray-500 -tracking-tighter">
                  Referral Bonus
                </p>
              </div>
            </div>

            {/* Current Investment Plan Card */}
            <div className="bg-purpleColor p-4 rounded-3xl flex justify-between md:items-start">
              <div className="flex-col gap-2 flex justify-center items-start">
                <h1 className="font-bold text-xl text-white capitalize">
                  {userData?.investment ? userData?.investment : "Loading..."}
                </h1>
                <p className="text-sm text-gray-100 -tracking-tighter">
                  Current Investment Plan
                </p>
              </div>
              <div className="size-10 flex justify-center items-center bg-gray-100 rounded-full p-2">
                <MdInventory className="text-4xl text-darkColor" />
              </div>
            </div>

            {/* Referral Link Card */}
            <div className="bg-transparent border-2 p-4 rounded-3xl overflow-hidden">
              <div className="flex-col flex justify-center items-start gap-4">
                <div className="flex justify-between w-full">
                  <div>
                    <h1 className="font-bold text-xl text-white">
                      Refer us & Earn
                    </h1>
                    <p className="text-xs">
                      Use the link to invite your friends
                    </p>
                  </div>
                  <div className="size-10 flex justify-center items-center bg-purpleColor rounded-full p-2">
                    <MdLink className="text-4xl text-white" />
                  </div>
                </div>
                <div className="py-2 px-4 bg-gray-100 rounded-full w-full flex justify-between items-center">
                  <p className="text-darkColor text-sm">
                    https://www.mywebsite.com...
                  </p>
                  <MdCopyAll className="text-darkColor text-2xl" />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-14 h-[400px]">
            <CryptoChart />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Page;
