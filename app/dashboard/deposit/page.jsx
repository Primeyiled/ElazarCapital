"use client";
import React, { useState, useEffect } from "react";
import Header from "../Header";
import {
  CryptoPlans,
  DepositData,
  EstatePlans,
  ForexPlans,
  GoldPlans,
  StockPlans,
} from "@/constants/data";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/AnimatedModal";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { setDepositData } from "@/lib/features/depositSlice";
import {
  clearMessages,
  setError,
  setLoading,
  toggleModal,
} from "@/lib/features/messageSlice";
import Loader from "@/components/Loader";
import { ErrorMessages, SuccessMessages } from "@/components/Messages";
import Image from "next/image";
import Layout from "../Layout";

const investmentPlans = {
  "Real Estate": EstatePlans,
  "Crypto Currency": CryptoPlans,
  "Gold Investment": GoldPlans,
};

// Helper function to parse currency strings
const parseCurrency = (currencyString) => {
  if (!currencyString) return 0;
  const numericString = currencyString.replace(/[^0-9.]/g, "");
  return parseFloat(numericString) || 0;
};

const Page = () => {
  const [selectedAmount, setSelectedAmount] = useState("");
  const [selectedDepositType, setSelectedDepositType] = useState("");
  const [selectedInvestment, setSelectedInvestment] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [selectedPlanDetails, setSelectedPlanDetails] = useState(null);
  const [amountError, setAmountError] = useState("");

  const { userData } = useSelector((state) => state.user);
  const { success, error, loading, modalOpen } = useSelector(
    (state) => state.message
  );
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (userData?.investment) {
      setSelectedInvestment(userData.investment);
    } else {
      setSelectedInvestment("");
    }
  }, [userData]);

  useEffect(() => {
    setSelectedPlan("");
  }, [selectedInvestment]);

  useEffect(() => {
    if (selectedPlan && selectedInvestment) {
      const details = investmentPlans[selectedInvestment]?.find(
        (plan) => plan.title === selectedPlan
      );
      setSelectedPlanDetails(details);
    } else {
      setSelectedPlanDetails(null);
    }
  }, [selectedPlan, selectedInvestment]);

  useEffect(() => {
    if (selectedPlanDetails && selectedAmount) {
      const amount = parseFloat(selectedAmount);
      const min = parseCurrency(selectedPlanDetails.Minimum);
      const max = parseCurrency(selectedPlanDetails.Maximum) || Infinity;

      if (isNaN(amount)) {
        setAmountError("Please enter a valid number");
      } else if (amount < min) {
        setAmountError(`Minimum deposit is ${selectedPlanDetails.Minimum}`);
      } else if (selectedPlanDetails.Maximum && amount > max) {
        setAmountError(`Maximum deposit is ${selectedPlanDetails.Maximum}`);
      } else {
        setAmountError("");
      }
    } else {
      setAmountError("");
    }
  }, [selectedAmount, selectedPlanDetails]);

  useEffect(() => {
    if (selectedPlanDetails) {
      setSelectedAmount(parseCurrency(selectedPlanDetails.Minimum).toString());
    }
  }, [selectedPlanDetails]);

  const handleAmountChange = (e) => {
    const value = e.target.value;
    // Only allow numbers and empty string
    if (value === "" || /^[0-9]*\.?[0-9]*$/.test(value)) {
      setSelectedAmount(value);
    }
  };

  const handleDeposit = (e) => {
    dispatch(setLoading(true));
    dispatch(clearMessages());

    // Check for empty fields first
    if (
      !selectedAmount ||
      !selectedDepositType ||
      !selectedInvestment ||
      !selectedPlan
    ) {
      dispatch(setError("All fields are required"));
      dispatch(setLoading(false));
      return;
    }

    // Convert currency strings to numbers
    const amount = parseFloat(selectedAmount);
    const min = parseCurrency(selectedPlanDetails?.Minimum);
    const max = parseCurrency(selectedPlanDetails?.Maximum) || Infinity;

    // Validate amount
    if (isNaN(amount)) {
      dispatch(setError("Please enter a valid amount"));
      dispatch(setLoading(false));
      return;
    }

    if (amount < min) {
      dispatch(
        setError(
          `Minimum deposit for this plan is ${selectedPlanDetails.Minimum}`
        )
      );
      dispatch(setLoading(false));
      return;
    }

    if (selectedPlanDetails.Maximum && amount > max) {
      dispatch(
        setError(
          `Maximum deposit for this plan is ${selectedPlanDetails.Maximum}`
        )
      );
      dispatch(setLoading(false));
      return;
    }

    // Only proceed if all validations pass
    dispatch(
      setDepositData({
        amount: selectedAmount,
        type: selectedDepositType,
        selectedInvestment,
        selectedPlan,
      })
    );
    dispatch(setLoading(false));
    router.push("/dashboard/deposit/details");
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  const handleModalClose = () => {
    dispatch(toggleModal());
  };

  return (
    <div className="w-full min-h-screen flex flex-1 bg-neutral-800">
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
      <Layout>
        <div>
          <div className="rounded-xl py-8 px-4 md:px-8 bg-neutral-800 h-auto w-full">
            <p className="font-semibold md:text-lg pb-10">
              Select Payment Gateway
            </p>
            <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-3 pb-20 md:pb-0">
              {DepositData &&
                DepositData.map((data, index) => (
                  <div className="grid gap-2" key={index}>
                    <div className="w-full h-[250px] rounded-3xl overflow-hidden">
                      <Image
                        width={500}
                        height={500}
                        src={data.img}
                        alt="usdt"
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h2 className="text-center font-bold text-xl pt-4">
                      {data.name}
                    </h2>

                    <Modal>
                      <ModalTrigger>
                        <span
                          className="w-full bg-[#6C5AD4] text-white hover:bg-white hover:text-darkColor duration-300 rounded-full grid py-2 md:py-3 text-sm"
                          onClick={() => setSelectedDepositType(data.name)}
                        >
                          Pay Now
                        </span>
                      </ModalTrigger>
                      <ModalBody>
                        <ModalContent>
                          <div className="mt-4">
                            <div className="mt-4">
                              <select
                                name="investment"
                                value={selectedInvestment}
                                onChange={(e) =>
                                  setSelectedInvestment(e.target.value)
                                }
                                className="select w-full rounded-lg p-3 text-darkColor text-sm"
                              >
                                <option value="">Choose an option</option>
                                <option value="Real Estate">Real Estate</option>
                                <option value="Crypto Currency">
                                  Crypto Currency
                                </option>
                                <option value="Gold Investment">
                                  Gold Investment
                                </option>
                              </select>
                              <p className="text-xs pt-1 text-yellow-500">
                                NOTE: You can switch from your default
                                investment plan here and select a new one.
                              </p>
                            </div>

                            {selectedInvestment && (
                              <div className="mt-2">
                                <select
                                  name="plan"
                                  value={selectedPlan}
                                  onChange={(e) =>
                                    setSelectedPlan(e.target.value)
                                  }
                                  className="select w-full rounded-lg p-3 text-darkColor text-sm"
                                >
                                  <option value="">Select a plan</option>
                                  {investmentPlans[selectedInvestment]?.map(
                                    (plan) => (
                                      <option
                                        key={plan.title}
                                        value={plan.title}
                                      >
                                        {plan.title}
                                      </option>
                                    )
                                  )}
                                </select>

                                {selectedPlanDetails && (
                                  <div className="bg-neutral-700 p-4 rounded-lg mt-2">
                                    <h3 className="font-semibold text-lg mb-2">
                                      {selectedPlanDetails.title}
                                    </h3>
                                    <div className="grid grid-cols-2 gap-1">
                                      <div>
                                        <p className="text-xs text-gray-400">
                                          Minimum Deposit
                                        </p>
                                        <p className="font-medium">
                                          {selectedPlanDetails.Minimum}
                                        </p>
                                      </div>
                                      <div>
                                        <p className="text-xs text-gray-400">
                                          Maximum Deposit
                                        </p>
                                        <p className="font-medium">
                                          {selectedPlanDetails.Maximum}
                                        </p>
                                      </div>
                                      <div>
                                        <p className="text-xs text-gray-400">
                                          Daily ROI
                                        </p>
                                        <p className="font-medium">
                                          {
                                            selectedPlanDetails.features
                                              ?.DailyROI
                                          }
                                        </p>
                                      </div>
                                      <div>
                                        <p className="text-xs text-gray-400">
                                          Weekly ROI
                                        </p>
                                        <p className="font-medium">
                                          {
                                            selectedPlanDetails.features
                                              ?.WeeklyROI
                                          }
                                        </p>
                                      </div>

                                      {selectedPlanDetails.features
                                        ?.Withdrawal && (
                                        <div>
                                          <p className="text-xs text-gray-400">
                                            Withdrawal
                                          </p>
                                          <p className="font-medium">
                                            {
                                              selectedPlanDetails.features
                                                .Withdrawal
                                            }
                                          </p>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                )}
                              </div>
                            )}

                            <div className="input-group mt-4 relative">
                              <input
                                value={selectedAmount}
                                onChange={handleAmountChange}
                                autoComplete="off"
                                type="number"
                                className={`border ${
                                  amountError
                                    ? "border-red-500"
                                    : "border-[#9e9e9e]"
                                } rounded-xl w-full p-3 text-sm text-darkColor input bg-white`}
                                min={
                                  parseCurrency(selectedPlanDetails?.Minimum) ||
                                  ""
                                }
                                max={
                                  parseCurrency(selectedPlanDetails?.Maximum) ||
                                  ""
                                }
                                placeholder=" "
                                disabled={!selectedPlanDetails}
                              />
                              <label className="user-label text-sm">
                                Enter Amount
                              </label>
                              {amountError && (
                                <p className="text-red-500 text-xs mt-1">
                                  {amountError}
                                </p>
                              )}
                              {selectedPlanDetails && (
                                <p className="text-xs text-gray-500 mt-1">
                                  Required range: {selectedPlanDetails.Minimum}{" "}
                                  -{" "}
                                  {selectedPlanDetails.Maximum || "No maximum"}
                                </p>
                              )}
                            </div>
                          </div>
                        </ModalContent>
                        <ModalFooter className="gap-4">
                          <button
                            onClick={handleDeposit}
                            className={`bg-[#6C5AD4] text-white text-sm px-6 py-2 rounded-md w-50 ${
                              amountError ||
                              !selectedAmount ||
                              !selectedDepositType ||
                              !selectedInvestment ||
                              !selectedPlan
                                ? "opacity-50 cursor-not-allowed"
                                : "hover:bg-[#5a4ac4]"
                            }`}
                            disabled={
                              !!amountError ||
                              !selectedAmount ||
                              !selectedDepositType ||
                              !selectedInvestment ||
                              !selectedPlan
                            }
                          >
                            Deposit Now
                          </button>
                        </ModalFooter>
                      </ModalBody>
                    </Modal>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Page;
