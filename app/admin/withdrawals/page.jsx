"use client";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import Loader from "@/components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { setSelectedUser,  } from "@/lib/features/userSlice";
import { IconUser } from "@tabler/icons-react";
import { clearMessages, setError, setLoading } from "@/lib/features/messageSlice";
import Layout from "../Layout";
import { setAllWithdrawalData, setSelectedWithdrawalData } from "@/lib/features/withdrawalSlice";

// Fetcher function for useSWR
const fetcher = async (url) => {
  const res = await fetch(url, { credentials: "include" });

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  return res.json();
};

const Page = () => {
  // Fetch all users using useSWR
  const { data, error, isLoading } = useSWR("/api/admin/withdrawals/", fetcher);
  

  const { allWithdrawalData } = useSelector((state) => state.withdrawal);
  const dispatch = useDispatch();
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(1);
  const [withdrawalsPerPage] = useState(10); 

  useEffect(() => {
    if (error) {
      console.error("Error fetching users:", error);
      if (error.status === 401) {
        router.push("/login"); 
      }
    } else if (data && data.withdrawals) {
      const sortedWithdrawals = [...data.withdrawals].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      dispatch(setAllWithdrawalData(sortedWithdrawals));
    }
  }, [data, error, dispatch, router]);

  if (isLoading) {
    return <Loader />;
  }

  const withdrawals = Array.isArray(allWithdrawalData) ? allWithdrawalData : [];

  const indexOfLastWithdrawals = currentPage * withdrawalsPerPage;
  const indexOfFirstWithdrawals = indexOfLastWithdrawals - withdrawalsPerPage;
  const currentWithdrawals = withdrawals.slice(indexOfFirstWithdrawals, indexOfLastWithdrawals);


  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleWithdrawalsClick = (withdrawal) => {

    dispatch(setLoading(true));
    dispatch(clearMessages());

    if (!withdrawal) {
      dispatch(setError("No withdrawal information"));
      dispatch(setLoading(false));
    } else {
      dispatch(setSelectedWithdrawalData(withdrawal));
      dispatch(setLoading(false));
      router.push("/admin/withdrawals/details");
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

  return (
    <div className="w-full lg:h-[100vh] flex flex-1">
      <Layout>
        <div className="rounded-xl pb-10 pt-2 px-4 md:px-8 bg-neutral-800 w-full">
          <p className="font-bold md:text-lg py-4">Withdrawals</p>

          {/* Total Users Count */}
          <div className="grid gap-4">
            <div className="bg-purpleColor rounded-xl px-4 py-6">
              <h3 className="text-2xl font-bold">{withdrawals.length || 0}</h3>
              <p className="text-xs md:text-sm font-medium">Total Withdrawals</p>
            </div>
          </div>

          {/* List of Users */}
          <div className="rounded-xl pb-8 lg:px-8 bg-neutral-800 w-full h-full mt-4">
            {currentWithdrawals.length > 0 ? (
              currentWithdrawals.map((withdrawal) => {
                const { formattedDate } = formatDateTime(
                  withdrawal.createdAt
                );

                const transStatusColor =
                  withdrawal.status === "Pending"
                    ? "text-yellow-500"
                    : withdrawal.status === "Approved"
                    ? "text-green-500"
                    : "text-red-500";

                return (
                  <div
                    key={withdrawal._id}
                    className="mt-10 flex gap-4 items-center w-full cursor-pointer hover:scale-95 duration-200"
                    onClick={() => handleWithdrawalsClick(withdrawal)}
                  >
                    <div className="w-fit">
                      {/* Display user avatar or placeholder */}
                      <span className="w-[3rem] h-[3rem] bg-orange-300 rounded-full flex justify-center items-center">
                        <IconUser className="text-4xl" />
                      </span>
                    </div>
                    <div className="flex items-end justify-center w-full lg:gap-10">
                      <div className="grid lg:grid-cols-5 w-full">
                        <h2 className="text-sm font-bold col-span-1 w-full">{withdrawal.userName}</h2>
                        <p className="text-xs text-gray-300 col-span-1 w-full pt-2 lg:pt-0">{withdrawal.type}</p>
                        <p className="text-xs text-gray-300 col-span-1 w-full hidden lg:block">
                          {withdrawal.investment}
                        </p>
                        <p className="text-xs text-gray-300 col-span-1 w-full hidden lg:block">
                          {withdrawal.plan}
                        </p>
                        <p className="text-xs text-gray-300 col-span-1 w-full hidden lg:block font-semibold">
                        {formattedDate}
                        </p>
                      </div>
                      <div className="flex flex-col gap-2 w-fit items-end">
                        <h2 className="text-sm font-bold">
                          ${withdrawal.amount}
                        </h2>
                        <p className={`text-xs ${transStatusColor} whitespace-nowrap`}>
                        {withdrawal.status}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="py-4">No withdrawals found.</p>
            )}
          </div>

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
              Page {currentPage} of {Math.ceil(withdrawals.length / withdrawalsPerPage)}
            </span>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === Math.ceil(withdrawals.length / withdrawalsPerPage)}
              className="px-4 py-2 text-xs bg-purpleColor rounded-lg disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Page;