"use client";
import React, { useEffect, useState } from "react";
import Header from "../../Header";
import { IconNotebook } from "@tabler/icons-react";
import WalletQRCode from "../QRCode";
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
import Layout from "../../Layout";

const WALLET_ADDRESSES = {
  USDT: "TVxv3muGxHAWyLrRyJe1VSqQfFonqrLnPn",
  Bitcoin: "bc1q0adas4hlgr3u8m6kpm5ksxn0n9txhf2h6afdna",
  Ethereum: "0x944EbB7e7Adb197857A26a09302c49A99A3489d1",
};

const formatCurrency = (amount) => {
  if (amount === null || amount === undefined) return "$0";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

const Page = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [amount, setAmount] = useState(null);
  const [type, setType] = useState(null);
  const [plan, setPlan] = useState(null);
  const [investment, setInvestment] = useState(null);
  const [copied, setCopied] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);

  const { success, error, loading, modalOpen } = useSelector(
    (state) => state.message
  );

  const depositData = useSelector((state) => state.deposit);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (!depositData.amount || !depositData.type) {
      router.push("/dashboard/deposit");
    } else {
      setAmount(depositData.amount);
      setType(depositData.type);
      setPlan(depositData.plan);
      setInvestment(depositData.investment);
      setWalletAddress(WALLET_ADDRESSES[depositData.type] || "");
    }

    window.scrollTo(0, 1);
    window.scrollTo(0, 0);
  }, [depositData, router]);

  const handleCopyAddress = async () => {
    if (typeof window !== "undefined" && navigator.clipboard) {
      try {
        if (!walletAddress) throw new Error("Wallet address is not available.");
        await navigator.clipboard.writeText(walletAddress);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        dispatch(setError("Error copying wallet address"));
      }
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    dispatch(clearMessages());

    const formData = new FormData();
    formData.append("type", type);
    formData.append("investment", investment);
    formData.append("plan", plan);
    formData.append("amount", amount);
    formData.append("wallet", walletAddress);
    if (uploadedFile) {
      formData.append("paymentSlip", uploadedFile);
    }

    try {
      const response = await fetch("/api/user/deposit", {
        method: "POST",
        headers: {},
        credentials: "include",
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        dispatch(setSuccess(result.message));
        dispatch(setLoading(false));
        router.push("/dashboard/deposit");
      } else {
        dispatch(setError(result.message));
        dispatch(setLoading(false));
      }
    } catch (error) {
      console.error("Error submitting deposit:", error);
      dispatch(setError("An error occurred while submitting the deposit."));
      dispatch(setLoading(false));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleModalClose = () => {
    dispatch(toggleModal());
  };

  if (amount === null || type === null) {
    return <Loader />;
  }

  return (
    <div className="w-full flex flex-1 bg-neutral-800">
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
      <Layout>
        <div className="rounded-xl py-8 px-4 md:px-8 bg-neutral-800 h-full 2xl:h-[90vh] w-full">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="px-4 md:px-0 rounded-2xl lg:p-6 overflow-hidden">
              <h3 className="text-lg font-bold pt-4 pb-10 flex items-center gap-2">
                <IconNotebook className="text-4xl" />
                Deposit Information
              </h3>
              <p className="flex justify-between items-center text-sm md:text-md font-bold py-2">
                Payment Gateway <span className="font-normal">{type}</span>
              </p>
              <p className="flex justify-between items-center text-sm md:text-md py-2 font-bold">
                Amount{" "}
                <span className="font-normal">{formatCurrency(amount)}</span>
              </p>
              <p className="flex justify-between items-center text-sm md:text-md py-2 font-bold">
                Investment Plan{" "}
                <span className="font-normal">{investment}</span>
              </p>
              <p className="flex justify-between items-center text-sm md:text-md py-2 font-bold">
                {investment} Plan <span className="font-normal">{plan}</span>
              </p>
              <p className="text-sm pt-6">
                Make payment to the {type} wallet address below and upload your
                payment slip
              </p>
              <h2 className="font-bold text-md mt-6 truncate">
                {walletAddress || "Please Wait..."}
              </h2>
              <button
                onClick={handleCopyAddress}
                className="bg-purpleColor text-sm text-white rounded-xl py-3 px-8 mt-4"
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
          <div className="flex justify-center items-center my-10 flex-col px-4">
            <div className="mb-6 w-full">
              <h3 className="font-bold pb-4">Requirement</h3>

              <p className="text-gray-300 text-md py-4">
                Upload yor payment slip here
              </p>
              <div
                className="w-full py-9 bg-gray-50 rounded-2xl border border-gray-300 gap-3 grid border-dashed"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                <div className="grid gap-1">
                  <svg
                    className="mx-auto"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="File">
                      <path
                        id="icon"
                        d="M31.6497 10.6056L32.2476 10.0741L31.6497 10.6056ZM28.6559 7.23757L28.058 7.76907L28.058 7.76907L28.6559 7.23757ZM26.5356 5.29253L26.2079 6.02233L26.2079 6.02233L26.5356 5.29253ZM33.1161 12.5827L32.3683 12.867V12.867L33.1161 12.5827ZM31.8692 33.5355L32.4349 34.1012L31.8692 33.5355ZM24.231 11.4836L25.0157 11.3276L24.231 11.4836ZM26.85 14.1026L26.694 14.8872L26.85 14.1026ZM11.667 20.8667C11.2252 20.8667 10.867 21.2248 10.867 21.6667C10.867 22.1085 11.2252 22.4667 11.667 22.4667V20.8667ZM25.0003 22.4667C25.4422 22.4667 25.8003 22.1085 25.8003 21.6667C25.8003 21.2248 25.4422 20.8667 25.0003 20.8667V22.4667ZM11.667 25.8667C11.2252 25.8667 10.867 26.2248 10.867 26.6667C10.867 27.1085 11.2252 27.4667 11.667 27.4667V25.8667ZM20.0003 27.4667C20.4422 27.4667 20.8003 27.1085 20.8003 26.6667C20.8003 26.2248 20.4422 25.8667 20.0003 25.8667V27.4667ZM23.3337 34.2H16.667V35.8H23.3337V34.2ZM7.46699 25V15H5.86699V25H7.46699ZM32.5337 15.0347V25H34.1337V15.0347H32.5337ZM16.667 5.8H23.6732V4.2H16.667V5.8ZM23.6732 5.8C25.2185 5.8 25.7493 5.81639 26.2079 6.02233L26.8633 4.56274C26.0191 4.18361 25.0759 4.2 23.6732 4.2V5.8ZM29.2539 6.70608C28.322 5.65771 27.7076 4.94187 26.8633 4.56274L26.2079 6.02233C26.6665 6.22826 27.0314 6.6141 28.058 7.76907L29.2539 6.70608ZM34.1337 15.0347C34.1337 13.8411 34.1458 13.0399 33.8638 12.2984L32.3683 12.867C32.5216 13.2702 32.5337 13.7221 32.5337 15.0347H34.1337ZM31.0518 11.1371C31.9238 12.1181 32.215 12.4639 32.3683 12.867L33.8638 12.2984C33.5819 11.5569 33.0406 10.9662 32.2476 10.0741L31.0518 11.1371ZM16.667 34.2C14.2874 34.2 12.5831 34.1983 11.2872 34.0241C10.0144 33.8529 9.25596 33.5287 8.69714 32.9698L7.56577 34.1012C8.47142 35.0069 9.62375 35.4148 11.074 35.6098C12.5013 35.8017 14.3326 35.8 16.667 35.8V34.2ZM5.86699 25C5.86699 27.3344 5.86529 29.1657 6.05718 30.593C6.25217 32.0432 6.66012 33.1956 7.56577 34.1012L8.69714 32.9698C8.13833 32.411 7.81405 31.6526 7.64292 30.3798C7.46869 29.0839 7.46699 27.3796 7.46699 25H5.86699ZM23.3337 35.8C25.6681 35.8 27.4993 35.8017 28.9266 35.6098C30.3769 35.4148 31.5292 35.0069 32.4349 34.1012L31.3035 32.9698C30.7447 33.5287 29.9863 33.8529 28.7134 34.0241C27.4175 34.1983 25.7133 34.2 23.3337 34.2V35.8ZM32.5337 25C32.5337 27.3796 32.532 29.0839 32.3577 30.3798C32.1866 31.6526 31.8623 32.411 31.3035 32.9698L32.4349 34.1012C33.3405 33.1956 33.7485 32.0432 33.9435 30.593C34.1354 29.1657 34.1337 27.3344 34.1337 25H32.5337ZM7.46699 15C7.46699 12.6204 7.46869 10.9161 7.64292 9.62024C7.81405 8.34738 8.13833 7.58897 8.69714 7.03015L7.56577 5.89878C6.66012 6.80443 6.25217 7.95676 6.05718 9.40704C5.86529 10.8343 5.86699 12.6656 5.86699 15H7.46699ZM16.667 4.2C14.3326 4.2 12.5013 4.1983 11.074 4.39019C9.62375 4.58518 8.47142 4.99313 7.56577 5.89878L8.69714 7.03015C9.25596 6.47133 10.0144 6.14706 11.2872 5.97592C12.5831 5.8017 14.2874 5.8 16.667 5.8V4.2ZM23.367 5V10H24.967V5H23.367ZM28.3337 14.9667H33.3337V13.3667H28.3337V14.9667ZM23.367 10C23.367 10.7361 23.3631 11.221 23.4464 11.6397L25.0157 11.3276C24.9709 11.1023 24.967 10.8128 24.967 10H23.367ZM28.3337 13.3667C27.5209 13.3667 27.2313 13.3628 27.0061 13.318L26.694 14.8872C27.1127 14.9705 27.5976 14.9667 28.3337 14.9667V13.3667ZM23.4464 11.6397C23.7726 13.2794 25.0543 14.5611 26.694 14.8872L27.0061 13.318C26.0011 13.1181 25.2156 12.3325 25.0157 11.3276L23.4464 11.6397ZM11.667 22.4667H25.0003V20.8667H11.667V22.4667ZM11.667 27.4667H20.0003V25.8667H11.667V27.4667ZM32.2476 10.0741L29.2539 6.70608L28.058 7.76907L31.0518 11.1371L32.2476 10.0741Z"
                        fill="#4F46E5"
                      />
                    </g>
                  </svg>
                  <h2 className="text-center text-gray-400 text-xs leading-4">
                    PNG, JPG or PDF, smaller than 15MB
                  </h2>
                </div>
                <div className="grid gap-2">
                  <h4 className="text-center text-gray-900 text-sm font-medium leading-snug">
                    {uploadedFile
                      ? uploadedFile.name
                      : "Drag and Drop your file here or"}
                  </h4>
                  <div className="flex items-center justify-center">
                    <label>
                      <input
                        type="file"
                        hidden
                        onChange={handleFileChange}
                        accept="image/*,application/pdf"
                      />
                      <div className="flex w-28 h-9 px-2 flex-col bg-indigo-600 rounded-full shadow text-white text-xs font-semibold leading-4 items-center justify-center cursor-pointer focus:outline-none">
                        Choose File
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="bg-purpleColor text-sm py-4 lg:py-5 lg:text-md px-10 text-white rounded-2xl flex items-center justify-center gap-2"
            >
              {loading ? (
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
      </Layout>
    </div>
  );
};

export default Page;
