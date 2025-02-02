"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../Layout";
import { IconCheck, IconNotebook, IconThumbDown, IconThumbUp, IconTrash } from "@tabler/icons-react";
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

const Page = () => {
  const { selectedDepositData } = useSelector((state) => state.deposit);
  const [depositInfo, setDepositInfo] = useState({
    userName: "",
    amount: "",
    investment: "",
    paymentSlip: "",
    plan: "",
    status: "",
    type: "",
    paidTo: "",
  });

  const { success, error, loading, modalOpen } = useSelector(
    (state) => state.message
  );
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedDepositData) {
      setDepositInfo({
        userName: selectedDepositData.userName ?? "",
        amount: selectedDepositData.amount ?? "",
        investment: selectedDepositData.investment ?? "",
        paymentSlip: selectedDepositData.paymentSlip ?? "",
        plan: selectedDepositData.plan ?? "",
        status: selectedDepositData.status ?? "",
        type: selectedDepositData.type ?? "",
        paidTo: selectedDepositData.wallet ?? "",
      });
    }
  }, [selectedDepositData]);

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

  const handleDeleteTransaction = async (e) => {
    e.preventDefault();

    let userResponse = confirm("Are you sure you want to delete this user's deposit?");
    if (userResponse) {
      dispatch(setLoading(true));
      dispatch(clearMessages());
      try {
        const response = await fetch(
          `/api/admin/deposits/delete/${selectedDepositData._id}`,
          {
            method: "DELETE",
            credentials: "include",
          }
        );

        if (!response.ok) {
          dispatch(setError(response.message));
          dispatch(setLoading(false));
          throw new Error("Failed to delete transaction");
        }
        dispatch(setSuccess(response.message));
        dispatch(setLoading(false));
        router.push("/admin/deposits");
      } catch (error) {
        dispatch(setError("An error occurred while deleting transaction."));
        dispatch(setLoading(false));
        console.error("Error deleting transaction:", error);
      }
    } else {
      return null;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDepositInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    dispatch(clearMessages());

    try {
      const response = await fetch(
        `/api/admin/deposits/update/${selectedDepositData._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(depositInfo),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        dispatch(setError(errorData.message || "Failed to update user"));
        dispatch(setLoading(false));
        throw new Error("Failed to update user");
      } else {
        const result = await response.json();
        dispatch(setSuccess(result.message));
        dispatch(setLoading(false));
        router.push("/admin/deposits");
      }
    } catch (error) {
      dispatch(setError("An error occurred while updating user."));
      dispatch(setLoading(false));
      console.error("Error updating user:", error);
    }
  };

  const handleApprove = async () => {
    dispatch(setLoading(true));
    dispatch(clearMessages());

    try {
      const response = await fetch(
        `/api/admin/deposits/approve/${selectedDepositData._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ status: "approved" }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        dispatch(setError(errorData.message || "Failed to approve deposit"));
        dispatch(setLoading(false));
        throw new Error("Failed to approve deposit");
      } else {
        const result = await response.json();
        dispatch(setSuccess(result.message));
        dispatch(setLoading(false));
        router.push("/admin/deposits");
      }
    } catch (error) {
      dispatch(setError("An error occurred while approving deposit."));
      dispatch(setLoading(false));
      console.error("Error approving deposit:", error);
    }
  };

  const handleDecline = async () => {
    dispatch(setLoading(true));
    dispatch(clearMessages());

    try {
      const response = await fetch(
        `/api/admin/deposits/decline/${selectedDepositData._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ status: "declined" }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        dispatch(setError(errorData.message || "Failed to decline deposit"));
        dispatch(setLoading(false));
        throw new Error("Failed to decline deposit");
      } else {
        const result = await response.json();
        dispatch(setSuccess(result.message));
        dispatch(setLoading(false));
        router.push("/admin/deposits");
      }
    } catch (error) {
      dispatch(setError("An error occurred while declining deposit."));
      dispatch(setLoading(false));
      console.error("Error declining deposit:", error);
    }
  };

  const handleModalClose = () => {
    dispatch(toggleModal());
  };

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
      <div className="rounded-xl pb-20 pt-4 px-2 md:px-8 bg-neutral-800 w-full h-full">
        <div className="max-w-xl mx-auto h-full">
          <div className="px-4 md:px-0 rounded-2xl lg:p-6 h-full">
            <h3 className="text-lg font-bold pt-4 pb-10 flex items-center gap-2">
              <IconNotebook className="text-4xl" />
              Deposit Details
            </h3>

            {selectedDepositData?._id && (
              <p className="flex justify-between items-center text-sm md:text-md font-bold py-2">
                ID:{" "}
                <span className="font-normal">{selectedDepositData._id}</span>
              </p>
            )}

            <form onSubmit={handleSubmit}>
              <div className="flex flex-col text-sm md:text-md font-medium py-2">
                User name:
                <input
                  type="text"
                  onChange={handleChange}
                  name="userName"
                  value={depositInfo.userName}
                  className="bg-gray-100 rounded-xl py-2 px-3 mt-2 text-darkColor w-full border-none outline-none"
                />
              </div>

              <div className="flex flex-col text-sm md:text-md font-medium py-2">
                Amount $:
                <input
                  type="number"
                  onChange={handleChange}
                  name="amount"
                  value={depositInfo.amount}
                  className="bg-gray-100 rounded-xl py-2 px-3 mt-2 text-darkColor w-full border-none outline-none"
                />
              </div>

              <div className="flex flex-col text-sm md:text-md font-medium py-2">
                Investment:
                <input
                  type="text"
                  onChange={handleChange}
                  name="investment"
                  value={depositInfo.investment}
                  className="bg-gray-100 rounded-xl py-2 px-3 mt-2 text-darkColor w-full border-none outline-none"
                />
              </div>

              <div className="flex flex-col text-sm md:text-md font-medium py-2">
                Plan:
                <input
                  type="text"
                  onChange={handleChange}
                  name="plan"
                  value={depositInfo.plan}
                  className="bg-gray-100 rounded-xl py-2 px-3 mt-2 text-darkColor w-full border-none outline-none"
                />
              </div>

              <div className="flex flex-col gap-2 text-sm md:text-md font-medium py-2">
                Payment Slip:
                <Image
                  width={500}
                  height={500}
                  src={depositInfo.paymentSlip}
                  alt="payment-slip"
                  className="rounded-xl "
                />
              </div>

              <div className="flex flex-col text-sm md:text-md font-medium py-2">
                Type:
                <input
                  type="text"
                  onChange={handleChange}
                  name="type"
                  value={depositInfo.type}
                  className="bg-gray-100 rounded-xl py-2 px-3 mt-2 text-darkColor w-full border-none outline-none"
                />
              </div>
              <div className="flex flex-col text-sm md:text-md font-medium py-2">
                Paid to:
                <input
                  type="text"
                  onChange={handleChange}
                  name="paidTo"
                  value={depositInfo.paidTo}
                  className="bg-gray-100 rounded-xl py-2 px-3 mt-2 text-darkColor w-full border-none outline-none"
                />
              </div>

              {selectedDepositData?.createdAt && (
                <p className="flex justify-between items-center text-sm md:text-md py-2 font-bold">
                  Time:{" "}
                  <span className="font-normal">
                    {
                      formatDateTime(selectedDepositData.createdAt)
                        .formattedTime
                    }
                  </span>
                </p>
              )}

              {selectedDepositData?.createdAt && (
                <p className="flex justify-between items-center text-sm md:text-md py-2 font-bold">
                  Date:{" "}
                  <span className="font-normal">
                    {
                      formatDateTime(selectedDepositData.createdAt)
                        .formattedDate
                    }
                  </span>
                </p>
              )}

              <div className="flex text-sm md:text-md font-medium py-2 mt- justify-between">
                Status:
              <div className="flex justify-end gap-4 lg:gap-6">
                <button
                  type="button"
                  onClick={handleDecline}
                  className="flex gap-2 text-xs bg-yellow-500 p-3 rounded-xl items-center hover:bg-yellow-700 cursor-pointer duration-150 text-white"
                >
                  <IconThumbDown className="text-4xl" /> Decline
                </button>
                <button
                  type="button"
                  onClick={handleApprove}
                  className="flex gap-2 text-xs bg-green-500 p-3 rounded-xl items-center hover:bg-green-700 cursor-pointer duration-150 text-white"
                >
                  <IconThumbUp className="text-4xl" /> Approve
                </button>
              </div>
              
              </div>

              <div className="flex justify-between mt-10">
                <button
                  onClick={handleDeleteTransaction}
                  className="flex gap-2 text-xs bg-red-500 p-3 rounded-xl items-center hover:bg-red-700 cursor-pointer duration-150 text-white"
                >
                  <IconTrash className="text-4xl" /> Delete
                </button>
               
                <button
                  type="submit"
                  className="flex gap-2 text-xs bg-purpleColor p-3 rounded-xl items-center hover:bg-neutral-900 cursor-pointer duration-150 text-white"
                >
                  <IconCheck className="text-4xl" />
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Page;
