"use client";
import React, { useEffect, useState } from "react";
import { UserSidebar } from "../../UserSidebar";
import Header from "../../Header";
import { IconNotebook } from "@tabler/icons-react";
import Loader from "@/components/Loader";
import { useDispatch, useSelector } from "react-redux";
import {
  setSuccess,
  setError,
  setLoading,
  clearMessages,
  toggleModal,
} from "@/lib/features/messageSlice";
import { ErrorMessages, SuccessMessages } from "@/components/Messages";
import { useRouter } from "next/navigation";

const Page = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [amount, setAmount] = useState(null);
  const [type, setType] = useState(null);
  const { success, error, loading, modalOpen } = useSelector(
    (state) => state.message
  );
  const dispatch = useDispatch();
    const router = useRouter();
  
  const withdrawalData = useSelector((state) => state.withdrawal);
  console.log(withdrawalData);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    dispatch(clearMessages());

    const data = {
      type,
      amount,
      wallet: walletAddress,
    };

    try {
      const response = await fetch("/api/user/withdrawal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Include cookies in the request
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        // setMessage({ success: result.message, error: "" });
        dispatch(setSuccess(result.message));
        dispatch(setLoading(false));
      } else {
        dispatch(setError(result.message));
        dispatch(setLoading(false));
        // setMessage({ success: "", error: result.message });
      }
    } catch (error) {
      console.error("Error submitting deposit:", error);
      dispatch(setError(result.message));
      dispatch(setLoading(false));
    }
  };

  const handleModalClose = () => {
    dispatch(toggleModal());
  };

  useEffect(() => {
    if(!withdrawalData.amount ||
      !withdrawalData.walletAddress ||
      !withdrawalData.type){

    }
    else  {
      setAmount(withdrawalData.amount);
      setWalletAddress(withdrawalData.walletAddress);
      setType(withdrawalData.type);
    }
  }, [withdrawalData, router]);

  // if (amount === null || type === null || walletAddress === null) {
  //   return <Loader />;
  // }

  return (
    <div className="w-full h-[100vh] flex flex-1 bg-neutral-800">
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

      <UserSidebar>
        <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
          <div className="rounded-xl py-8 px-4 md:px-8 bg-neutral-800 h-auto 2xl:h-[90vh] w-full">
            <Header page=" Details" />

            <div className="grid place-items-center gap-10">
              <div className="px-4 md:p-10 lg:bg-neutral-800 rounded-2xl  overflow-hidden">
                <h3 className="text-lg font-bold pt-4 pb-10 flex items-center gap-2">
                  <IconNotebook className="text-4xl" />
                  Payment Information
                </h3>

                <p className="flex justify-between items-center text-sm md:text-lg ">
                  Payment Gateway: <span className="font-bold">{type}</span>
                </p>
                <p className="flex justify-between items-center text-sm md:text-lg py-6 ">
                  Amount: <span className="font-bold">{amount}</span>
                </p>
                <div className="grid gap-2">
                  <h2 className=" text-sm md:text-lg whitespace-nowrap">
                    Wallet Address:
                  </h2>
                  <span className="font-bold">
                    {walletAddress ? walletAddress : "Please Wait..."}
                  </span>
                </div>
                <p className="text-sm py-2 text-yellow-500">
                  Please make sure the wallet address you provided is correct.
                </p>
                <div className="flex justify-center items-center mt-10">
                  <button
                    className="bg-purpleColor text-sm py-4 lg:py-5 lg:text-lg px-10 text-white rounded-2xl"
                    onClick={handleSubmit}
                  >
                    Confirm Transaction
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UserSidebar>
    </div>
  );
};

export default Page;
