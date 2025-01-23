"use client";
import React, { useEffect, useState } from "react";
import { UserSidebar } from "../../UserSidebar";
import Header from "../../Header";
import { IconNotebook } from "@tabler/icons-react";
import Loader from "@/components/Loader";
import { useSelector } from "react-redux";
import { ErrorMessages, SuccessMessages } from "@/components/Messages";

const Page = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [amount, setAmount] = useState(null);
  const [type, setType] = useState(null);
  const [message, setMessage] = useState({
    success: "",
    error: "",
  });
  const [messageModal, setMessageModal] = useState(false);

  const handleModal = () => {
    setMessageModal((prev) => !prev);
  };

  const withdrawalData = useSelector((state) => state.withdrawal);

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage(prev => ({
      ...prev,
      error: `Withdrawal Transation of ${amount} was successful`,
    }));
    setMessageModal((prev) => !prev);

  };

  useEffect(() => {
    if (
      withdrawalData.amount &&
      withdrawalData.walletAddress &&
      withdrawalData.type
    ) {
      setAmount(withdrawalData.amount);
      setWalletAddress(withdrawalData.walletAddress);
      setType(withdrawalData.type);
    }
  }, [withdrawalData]);

  if (amount === null || type === null || walletAddress === "") {
    return <Loader />;
  }

  return (
    <div className="w-full h-[100vh] flex flex-1 bg-neutral-800">
      {message.success !== "" && <SuccessMessages data={message.success} isOpen={handleModal} status={messageModal}/>}
      {message.error !== "" && <ErrorMessages data={message.error} isOpen={handleModal} status={messageModal}/>}

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
                    className="bg-[#6C5AD4] text-sm py-4 lg:py-5 lg:text-lg px-10 text-white rounded-2xl"
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
