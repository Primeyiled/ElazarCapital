"use client";
import React, { useState, useEffect } from "react";
import Header from "../Header";
import {
  CryptoPlans,
  DepositData,
  EstatePlans,
  ForexPlans,
  StockPlans,
} from "@/constants/data";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/AnimatedModal";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { setWithdrawalData } from "@/lib/features/withdrawalSlice";
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
  "Crypto currency": CryptoPlans,
  "Forex Investment": ForexPlans,
  "Stock Investment": StockPlans,
};

const Page = () => {
  const [selectedAmount, setSelectedAmount] = useState("");
  const [selectedDepositType, setSelectedDepositType] = useState("");
  const [selectedInvestment, setSelectedInvestment] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");

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

  const handleDeposit = (e) => {
    dispatch(setLoading(true));
    dispatch(clearMessages());

    const amount = selectedAmount;
    const type = selectedDepositType;

    if (!amount || !type || !selectedInvestment || !selectedPlan) {
      dispatch(setError("All fields are required"));
      dispatch(setLoading(false));
    } else {
      dispatch(
        setDepositData({ amount, type, selectedInvestment, selectedPlan })
      );
      dispatch(setLoading(false));
      router.push("/dashboard/deposit/details");
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100);
    }
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
                            <div className="input-group">
                              <input
                                value={selectedAmount}
                                onChange={(e) =>
                                  setSelectedAmount(e.target.value)
                                }
                                autoComplete="off"
                                type="number"
                                className="border border-[#9e9e9e] rounded-xl w-full p-3 text-sm text-darkColor input"
                                minLength={2}
                                placeholder=" "
                              />
                              <label className="user-label text-sm">
                                Enter Amount
                              </label>
                            </div>
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
                                <option value="Crypto currency">
                                  Crypto Currency
                                </option>
                                <option value="Forex Investment">
                                  Forex Investment
                                </option>
                                <option value="Stock Investment">
                                  Stock Investment
                                </option>
                              </select>
                              <p className="text-sm pt-1 text-yellow-500">
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
                                      <option key={plan.name} value={plan.name}>
                                        {plan.name}
                                      </option>
                                    )
                                  )}
                                </select>
                              </div>
                            )}
                          </div>
                        </ModalContent>
                        <ModalFooter className="gap-4">
                          <button
                            onClick={handleDeposit}
                            className="bg-[#6C5AD4] text-white text-sm px-6 py-2 rounded-m w-50"
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