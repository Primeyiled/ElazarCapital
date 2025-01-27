"use client";
import React from "react";
import { UserSidebar } from "../UserSidebar";
import Header from "../Header";
import useSWR from "swr";
import Loader from "@/components/Loader";
import Image from "next/image";

const fetcher = async (url) => {
  const res = await fetch(url, { credentials: "include" });

  if (!res.ok) {
    throw new Error("Failed to fetch history");
  }

  return res.json();
};

const History = () => {
  const { data, error, isLoading } = useSWR("/api/user/history", fetcher);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="text-red-500 text-center mt-8">
        Error loading history data
      </div>
    );
  }

  const { deposits, withdrawals } = data?.history || {
    deposits: [],
    withdrawals: [],
  };

  // Helper function to format the date and time
  const formatDateTime = (dateString) => {
    const date = new Date(dateString);

    const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const formattedTime = date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    return { formattedDate, formattedTime };
  };

  const combinedTransactions = [
    ...deposits.map((deposit) => ({ ...deposit, type: "Deposit" })),
    ...withdrawals.map((withdrawal) => ({ ...withdrawal, type: "Withdrawal" })),
  ];

  combinedTransactions.sort(
    (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
  );

  return (
    <div className="w-full lg:h-[100vh] flex flex-1 ">
      <UserSidebar>
        <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full lg:overflow-y-scroll">
          <div className="rounded-xl py-8 px-4 md:px-8 bg-neutral-800 w-full">
            <Header page="History" />
            <p className="font-bold md:text-lg py-4">Transactions</p>

            <div>
              <div className="grid gap-4 grid-cols-2">
                <div className="bg-purpleColor rounded-xl px-4 py-6">
                  <h3 className="text-2xl font-bold">
                    {
                      combinedTransactions.filter(
                        (transaction) => transaction.type === "Deposit"
                      ).length
                    }
                  </h3>
                  <p className="text-xs md:text-sm font-medium">Total Deposits</p>
                </div>
                <div className="bg-purpleColor rounded-xl px-4 py-6">
                  <h3 className="text-2xl font-bold">
                    {
                      combinedTransactions.filter(
                        (transaction) => transaction.type === "Withdrawal"
                      ).length
                    }
                  </h3>
                  <p className=" text-xs md:text-sm font-medium">Total Withdrawals</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl pb-8 px-4 md:px-8 bg-neutral-800 w-full h-full">
            {combinedTransactions.length > 0 ? (
              combinedTransactions.map((transaction) => {
                const { formattedDate, formattedTime } = formatDateTime(
                  transaction.createdAt
                );

                const imageSrc =
                  transaction.type === "Deposit"
                    ? "/deposit.png"
                    : "/withdrawal.png";

                    const transStatus =
                    transaction.status === "Pending"
                      ? "Pending"
                      : transaction.status === "Approved" ? "Approved" : "Declined";

                    const transStatusColor =
                    transaction.status === "Pending"
                      ? "text-yellow-500"
                      : transaction.status === "Approved" ? "text-green-500" : "text-red-500";

                return (
                  <div
                    key={transaction._id}
                    className="mt-10 flex gap-4 items-center w-full"
                  >
                    <div className="w-fit">
                      <span className="w-[3rem] h-[3rem] bg-orange-300 rounded-full flex justify-center items-center">
                        <Image
                          width={500}
                          height={500}
                          src={imageSrc}
                          alt="transaction_icons"
                          className="w-[25px]"
                        />
                      </span>
                    </div>
                    <div className="flex items-center justify-between w-full">
                      <div>
                        <h2 className="text-sm font-bold">
                          {transaction.type}
                        </h2>
                        <p className="text-xs text-gray-300 pt-2">
                          {formattedDate}, {formattedTime}
                        </p>
                      </div>
                      <div>
                        <h2 className="text-sm font-bold">
                          {transaction.type === "Deposit"
                            ? `+$${transaction.amount}`
                            : `-$${transaction.amount}`}
                        </h2>
                        <p className={`text-xs ${transStatusColor} pt-2 font-semibold`}>
                          {transStatus}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>No transactions found.</p>
            )}
           
          </div>
        </div>
      </UserSidebar>
    </div>
  );
};

export default History;
