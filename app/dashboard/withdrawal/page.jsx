"use client";
import React, { useState } from "react";
import Header from "../Header";
import { DepositData } from "@/constants/data";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/AnimatedModal";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { setWithdrawalData } from "@/lib/features/withdrawalSlice";
import { ErrorMessages, SuccessMessages } from "@/components/Messages";
import {
  clearMessages,
  setError,
  setLoading,
  toggleModal,
} from "@/lib/features/messageSlice";
import Loader from "@/components/Loader";
import Image from "next/image";
import Layout from "../Layout";

const Withdrawal = () => {
  const [selectedAmount, setSelectedAmount] = useState("");
  const [selectedWallet, setSelectedWallet] = useState("");
  const [selectedDepositType, setSelectedDepositType] = useState("");
  const { success, error, loading, modalOpen } = useSelector(
    (state) => state.message
  );

  const dispatch = useDispatch();
  const router = useRouter();

  const handleWithdraw = () => {
    dispatch(setLoading(true));
    dispatch(clearMessages());

    const amount = selectedAmount;
    const walletAddress = selectedWallet;
    const type = selectedDepositType;

    if (!amount || !type || !walletAddress) {
      dispatch(setError("All fields are required"));
      dispatch(setLoading(false));
    } else {
      dispatch(setWithdrawalData({ amount, walletAddress, type }));
    }
    dispatch(setLoading(false));

    router.push("/dashboard/withdrawal/details");
  };

  const handleModalClose = () => {
    dispatch(toggleModal());
  };

  return (
    <div className="w-full lg:h-[100vh] flex flex-1">
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
          <div className="rounded-xl py-8 px-4 md:px-8 bg-neutral-800 h-auto 2xl:h-[90vh] w-full">
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
                          className="w-full bg-purpleColor text-white hover:bg-white hover:text-darkColor duration-300  rounded-full grid py-2 md:py-3 text-sm"
                          onClick={() => setSelectedDepositType(data.name)}
                        >
                          {" "}
                          Pay Now
                        </span>
                      </ModalTrigger>
                      <ModalBody>
                        <ModalContent>
                          {/* <h4 className="text-lg md:text-2xl text-neutral-600 font-bold text-center mb-8">
                            Withdrawal
                          </h4> */}

                          <div className="mt-10">
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
                                Enter Amount:
                              </label>
                            </div>
                            <div className="input-group">
                              <input
                                value={selectedWallet}
                                onChange={(e) =>
                                  setSelectedWallet(e.target.value)
                                }
                                autoComplete="off"
                                type="text"
                                className="border border-[#9e9e9e] rounded-xl w-full p-3 text-sm text-darkColor input"
                                placeholder=" "
                              />
                              <label className="user-label text-sm">
                                Enter Wallet Address
                              </label>
                            </div>
                          </div>
                        </ModalContent>
                        <ModalFooter className="gap-4">
                          <button
                            onClick={handleWithdraw}
                            className="bg-purpleColor text-white text-sm px-6 py-2 rounded-md border border-black w-50"
                          >
                            Withdraw Now
                          </button>
                          {/* {isFormValid ? (
                            <Link
                              href={{
                                pathname: "/dashboard/withdrawal/details",
                                query: {
                                  search: selectedAmount,
                                  type: selectedDepositType,
                                  wallet: selectedWallet
                                },
                              }}
                              className="bg-purpleColor text-white text-sm px-6 py-2 rounded-md border border-black w-50"
                            >
                              Withdraw Now
                            </Link>
                          ) : (
                            <button
                              disabled
                              className="bg-gray-400 text-white text-sm px-6 py-2 rounded-md border border-black w-50"
                            >
                              Withdraw Now
                            </button>
                          )} */}
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

export default Withdrawal;
