"use client";
import React, { useState } from "react";
import Header from "../Header";
import useSWR from "swr";
import Loader from "@/components/Loader";
import Image from "next/image";
import Layout from "../Layout";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { clearMessages, setError, setLoading } from "@/lib/features/messageSlice";
import { setHistoryData } from "@/lib/features/historySlice";

// Helper function to format currency
const formatCurrency = (amount) => {
  if (amount === null || amount === undefined) return "$0";
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
};

const fetcher = async (url) => {
  const res = await fetch(url, { credentials: "include" });

  if (!res.ok) {
    throw new Error("Failed to fetch history");
  }

  return res.json();
};

const History = () => {
  const { data, error, isLoading } = useSWR("/api/user/history", fetcher);

  const [currentPage, setCurrentPage] = useState(1);
  const [transactionsPerPage] = useState(5);

  const { userData } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
   dispatch(setError("Error loading history"))
  }

  const { deposits, withdrawals } = data?.history || {
    deposits: [],
    withdrawals: [],
  };

  const handleTransactionClick = (transaction) => {
    dispatch(setLoading(true));
    dispatch(clearMessages());
    
    if (!transaction) {
      dispatch(setError("No transaction information"));
      dispatch(setLoading(false));
    } else {
      dispatch(setHistoryData(transaction));
      dispatch(setLoading(false));
      router.push("/dashboard/history/details");
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100);
    }
  };

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
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = combinedTransactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="w-full lg:h-[100vh] flex flex-1 ">
      <Layout>
        <div className="grid gap-4">
          <div className="rounded-xl pb-8 pt-2 px-4 md:px-8 bg-neutral-800 w-full">
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
                  <p className="text-xs md:text-sm font-medium">Total Withdrawals</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl pb-8 px-4 md:px-8 bg-neutral-800 w-full h-full">
            {currentTransactions.length > 0 ? (
              currentTransactions.map((transaction) => {
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
                    : transaction.status === "Approved"
                    ? "Approved"
                    : "Declined";

                const transStatusColor =
                  transaction.status === "Pending"
                    ? "text-yellow-500"
                    : transaction.status === "Approved"
                    ? "text-green-500"
                    : "text-red-500";

                return (
                  <div
                    key={transaction._id}
                    className="mt-10 flex gap-4 items-center w-full cursor-pointer hover:scale-95 duration-200"
                    onClick={() => handleTransactionClick(transaction)}
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
                            ? `+${formatCurrency(transaction.amount)}`
                            : `-${formatCurrency(transaction.amount)}`}
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

            {/* Pagination Controls */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 text-xs bg-purpleColor rounded-lg disabled:opacity-50"
              >
                Previous
              </button>
              <span className="text-sm">
                Page {currentPage} of{" "}
                {Math.ceil(combinedTransactions.length / transactionsPerPage)}
              </span>
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={
                  currentPage ===
                  Math.ceil(combinedTransactions.length / transactionsPerPage)
                }
                className="px-4 py-2 text-xs bg-purpleColor rounded-lg disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default History;