"use client";
import React, { useEffect, useState } from "react";
import { UserSidebar } from "../../UserSidebar";
import Header from "../../Header";
import { IconNotebook } from "@tabler/icons-react";
import WalletQRCode from "../QRCode";
import Loader from "@/components/Loader";
import { useSelector } from "react-redux";
import { ErrorMessages, SuccessMessages } from "@/components/Messages";

const WALLET_ADDRESSES = {
  USDT: "0x6c311B7D17F5C39f71603ABaDA2971b6d6187Eee",
  Bitcoin: "bc1qg2wd5q96xwelwdhs8zawpkddllc3avq67x69ce",
  Ethereum: "0x6c311B7D17F5C39f71603ABaDA2971b6d6187Eee",
};

const Page = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [amount, setAmount] = useState(null);
  const [type, setType] = useState(null);
  const [plan, setPlan] = useState(null);
  const [investment, setInvestment] = useState(null);
  const [copied, setCopied] = useState(false);
  const [message, setMessage] = useState({ success: "", error: "" });
  const [messageModal, setMessageModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [paymentSlip, setPaymentSlip] = useState(null);

  const depositData = useSelector((state) => state.deposit);

  useEffect(() => {
    if (depositData.amount && depositData.type) {
      setAmount(depositData.amount);
      setType(depositData.type);
      setPlan(depositData.plan);
      setInvestment(depositData.investment);
      setWalletAddress(WALLET_ADDRESSES[depositData.type] || "");
    }
  }, [depositData]);

  const handleCopyAddress = async () => {
    try {
      if (!walletAddress) throw new Error("Wallet address is not available.");
      await navigator.clipboard.writeText(walletAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      setMessage((prev) => ({
        ...prev,
        error: "Failed to copy wallet address.",
      }));
      setMessageModal(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      type,
      investment,
      plan,
      amount,
      wallet: walletAddress,
    };

    try {
      const response = await fetch("/api/user/deposit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Include cookies in the request
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage({ success: result.message, error: "" });
      } else {
        setMessage({ success: "", error: result.message });
      }
      setMessageModal(true);
    } catch (error) {
      console.error("Error submitting deposit:", error);
      setMessage({
        success: "",
        error: "An error occurred. Please try again.",
      });
      setMessageModal(true);
    }
  };

  if (amount === null || type === null) {
    return <Loader />;
  }

  return (
    <div className="w-full h-[100vh] flex flex-1 bg-neutral-800">
      {message.success && (
        <SuccessMessages
          data={message.success}
          isOpen={() => setMessageModal(false)}
          status={messageModal}
        />
      )}
      {message.error && (
        <ErrorMessages
          data={message.error}
          isOpen={() => setMessageModal(false)}
          status={messageModal}
        />
      )}
      <UserSidebar>
        <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full lg:overflow-y-scroll">
          <div className="rounded-xl py-8 px-4 md:px-8 bg-neutral-800 h-auto 2xl:h-[90vh] w-full">
            <Header page=" Details" />
            <div className="grid md:grid-cols-2 gap-10">
              <div className="px-4 md:px-0 rounded-2xl lg:p-6 overflow-hidden">
                <h3 className="text-lg font-bold pt-4 pb-10 flex items-center gap-2">
                  <IconNotebook className="text-4xl" />
                  Payment Information
                </h3>
                <p className="flex justify-between items-center text-sm md:text-md font-bold py-2">
                  Payment Gateway <span className="font-normal">{type}</span>
                </p>
                <p className="flex justify-between items-center text-sm md:text-md py-2 font-bold">
                  Amount <span className="font-normal">{amount}</span>
                </p>
                <p className="flex justify-between items-center text-sm md:text-md py-2 font-bold">
                  Investment Plan <span className="font-normal">{investment}</span>
                </p>
                <p className="flex justify-between items-center text-sm md:text-md py-2 font-bold">
                  {investment} Plan <span className="font-normal">{plan}</span>
                </p>
                <p className="text-sm pt-6">
                  Make payment to the {type} wallet address below and upload
                  your payment slip
                </p>
                <h2 className="font-bold text-md mt-6 truncate">
                  {walletAddress || "Please Wait..."}
                </h2>
                <button
                  onClick={handleCopyAddress}
                  className="bg-[#6C5AD4] text-sm text-white rounded-xl py-3 px-8 mt-4"
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
              <div className="flex justify-center items-center flex-col">
                <p className="text-white text-center pb-4">
                  <span className="text-white">Or</span> Scan Wallet Address
                </p>
                <div className="bg-white rounded-2xl p-4">
                  <WalletQRCode value={walletAddress} />
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center my-10">
              <button
                onClick={handleSubmit}
                disabled={isLoading}
                className="bg-[#6C5AD4] text-sm py-4 lg:py-5 lg:text-lg px-10 text-white rounded-2xl flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader className="w-5 h-5" />
                    Processing...
                  </>
                ) : (
                  "Confirm Transaction"
                )}
              </button>
            </div>
          </div>
        </div>
      </UserSidebar>
    </div>
  );
};

export default Page;
