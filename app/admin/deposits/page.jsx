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
import { setAllDepositData, setSelectedDepositData,  } from "@/lib/features/depositSlice";

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
  const { data, error, isLoading } = useSWR("/api/admin/deposits/", fetcher);
  

  const { allDepositData } = useSelector((state) => state.deposit);
  const dispatch = useDispatch();
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(1);
  const [depositsPerPage] = useState(10); 

  useEffect(() => {
    if (error) {
      console.error("Error fetching users:", error);
      if (error.status === 401) {
        router.push("/login"); 
      }
    } else if (data && data.deposits) {
      console.log("Fetched users:", data);
      dispatch(setAllDepositData(data.deposits));
    }
  }, [data, error, dispatch, router]);

  if (isLoading) {
    return <Loader />;
  }

  const deposits = Array.isArray(allDepositData) ? allDepositData : [];

  const indexOfLastDeposit = currentPage * depositsPerPage;
  const indexOfFirstDeposit = indexOfLastDeposit - depositsPerPage;
  const currentDeposit = deposits.slice(indexOfFirstDeposit, indexOfLastDeposit);


  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleDepositClick = (deposit) => {
    console.log(deposit);

    dispatch(setLoading(true));
    dispatch(clearMessages());

    if (!deposit) {
      dispatch(setError("No deposit information"));
      dispatch(setLoading(false));
    } else {
      console.log("dispatched");

      dispatch(setSelectedDepositData(deposit));
      dispatch(setLoading(false));
      router.push("/admin/deposits/details");
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
          <p className="font-bold md:text-lg py-4">Deposits</p>

          {/* Total Users Count */}
          <div className="grid gap-4">
            <div className="bg-purpleColor rounded-xl px-4 py-6">
              <h3 className="text-2xl font-bold">{deposits.length || 0}</h3>
              <p className="text-xs md:text-sm font-medium">Total Deposits</p>
            </div>
          </div>

          {/* List of Users */}
          <div className="rounded-xl pb-8 lg:px-8 bg-neutral-800 w-full h-full mt-4">
            {currentDeposit.length > 0 ? (
              currentDeposit.map((deposit) => {
                const { formattedDate, formattedTime } = formatDateTime(
                  deposit.createdAt
                );

                const transStatusColor =
                  deposit.status === "Pending"
                    ? "text-yellow-500"
                    : deposit.status === "Approved"
                    ? "text-green-500"
                    : "text-red-500";

                return (
                  <div
                    key={deposit._id}
                    className="mt-10 flex gap-4 items-center w-full cursor-pointer hover:scale-95 duration-200"
                    onClick={() => handleDepositClick(deposit)}
                  >
                    <div className="w-fit">
                      {/* Display user avatar or placeholder */}
                      <span className="w-[3rem] h-[3rem] bg-orange-300 rounded-full flex justify-center items-center">
                        <IconUser className="text-4xl" />
                      </span>
                    </div>
                    <div className="flex items-end justify-center w-full lg:gap-10">
                      <div className="grid lg:grid-cols-5 w-full">
                        <h2 className="text-sm font-bold col-span-1 w-full">{deposit.userName}</h2>
                        <p className="text-xs text-gray-300 col-span-1 w-full pt-2 lg:pt-0">{deposit.type}</p>
                        <p className="text-xs text-gray-300 col-span-1 w-full hidden lg:block">
                          {deposit.investment}
                        </p>
                        <p className="text-xs text-gray-300 col-span-1 w-full hidden lg:block">
                          {deposit.plan}
                        </p>
                        <p className="text-xs text-gray-300 col-span-1 w-full hidden lg:block font-semibold">
                        {formattedDate}
                        </p>
                      </div>
                      <div className="flex flex-col gap-2 w-fit items-end">
                        <h2 className="text-sm font-bold">
                          ${deposit.amount}
                        </h2>
                        <p className={`text-xs ${transStatusColor} whitespace-nowrap`}>
                        {deposit.status}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>No Deposits found.</p>
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
              Page {currentPage} of {Math.ceil(deposits.length / depositsPerPage)}
            </span>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === Math.ceil(deposits.length / depositsPerPage)}
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