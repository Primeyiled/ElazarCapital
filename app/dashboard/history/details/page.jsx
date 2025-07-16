"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../Layout";
import { IconNotebook, IconTrash } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import {
  clearMessages,
  setError,
  setLoading,
  setSuccess,
  toggleModal,
} from "@/lib/features/messageSlice";
import { ErrorMessages, SuccessMessages } from "@/components/Messages";
import Loader from "@/components/Loader";
import Image from "next/image";

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

const Page = () => {
  const { historyData } = useSelector((state) => state.history);
  const { success, error, loading, modalOpen } = useSelector(
    (state) => state.message
  );
  const router = useRouter();
  const dispatch = useDispatch();

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

const handleDeleteTransaction = async () => {
  if (!historyData?._id) {
    dispatch(setError("Invalid transaction ID"));
    return;
  }

  const confirmed = window.confirm("Are you sure you want to delete this transaction?");
  if (!confirmed) return;

  dispatch(setLoading(true));
  dispatch(clearMessages());

  try {
    const response = await fetch(`/api/user/history/${historyData._id}`, {
      method: "DELETE",
      credentials: "include",
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Failed to delete transaction");
    }

    dispatch(setSuccess("Transaction deleted successfully"));
    router.push("/dashboard/history/");
  } catch (error) {
    console.error("Deletion error:", error);
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};




  const handleModalClose = () => {
    dispatch(toggleModal());
  };

  const transStatusColor =
    historyData?.status === "Pending"
      ? "text-yellow-500"
      : historyData?.status === "Approved"
      ? "text-green-500"
      : "text-red-500";

  return (
    <Layout>
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
      <div className="rounded-xl pb-20 pt-4 px-2 md:px-8 bg-neutral-800 w-full h-full gird">
        <div className="max-w-xl mx-auto h-full">
          <div className="px-4 md:px-0 rounded-2xl lg:p-6 h-full">
            <h3 className="text-lg font-bold pt-4 pb-10 flex items-center gap-2">
              <IconNotebook className="text-4xl" />
              Transaction Information
            </h3>
            {historyData?.type && (
              <p className="flex justify-between items-center text-sm md:text-md font-bold py-2">
                Type: <span className="font-normal">{historyData.type}</span>
              </p>
            )}
            {historyData?._id && (
              <p className="flex justify-between items-center text-sm md:text-md font-bold py-2">
                ID: <span className="font-normal">{historyData._id}</span>
              </p>
            )}
            {historyData?.amount && (
              <p className="flex justify-between items-center text-sm md:text-md py-2 font-bold">
                Amount:{" "}
                <span className="font-normal">{formatCurrency(historyData.amount)}</span>
              </p>
            )}

            {historyData?.investment && (
              <p className="flex justify-between items-center text-sm md:text-md py-2 font-bold">
                Investment Plan:{" "}
                <span className="font-normal">{historyData.investment}</span>
              </p>
            )}

            {historyData?.plan && (
              <p className="flex justify-between items-center text-sm md:text-md py-2 font-bold">
                {historyData.investment} Plan:{" "}
                <span className="font-normal">{historyData.plan}</span>
              </p>
            )}
            {historyData?.wallet && (
              <p className="flex justify-between sm:items-center text-sm md:text-md py-2 font-bold flex-col sm:flex-row gap-2 ">
                Wallet:{" "}
                <span className="font-normal text-xs whitespace-normal">
                  {historyData.wallet}
                </span>
              </p>
            )}
            {historyData?.status && (
              <p
                className={`flex justify-between items-center text-sm md:text-md py-2 font-bold `}
              >
                Status:{" "}
                <span className={`font-normal ${transStatusColor}`}>
                  {historyData.status}
                </span>
              </p>
            )}
            {historyData?.createdAt && (
              <p className="flex justify-between items-center text-sm md:text-md py-2 font-bold">
                Time:{" "}
                <span className="font-normal">
                  {formatDateTime(historyData.createdAt).formattedTime}
                </span>
              </p>
            )}
            {historyData?.createdAt && (
              <p className="flex justify-between items-center text-sm md:text-md py-2 font-bold">
                Date:{" "}
                <span className="font-normal">
                  {formatDateTime(historyData.createdAt).formattedDate}
                </span>
              </p>
            )}
            {historyData?.paymentSlip && (
              <div className="flex justify-between items-center text-sm md:text-md py-2 font-bold flex-col gap-4 mt-2">
                Payment Slip:{" "}
                  <Image width={200} height={200} src={historyData.paymentSlip} alt="payment-slip" className="rounded-xl"/>
              </div>
            )}
            <button
              onClick={handleDeleteTransaction}
              className="flex gap-2 text-xs mt-2 bg-purpleColor p-3 rounded-xl items-center hover:bg-neutral-900 cursor-pointer duration-150 text-white float-end"
            >
              <IconTrash className="text-4xl" /> Delete
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Page;