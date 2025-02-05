"use client";
import Loader from "@/components/Loader";
import { ErrorMessages, SuccessMessages } from "@/components/Messages";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Page = () => {
    const router = useRouter();
  const dispatch = useDispatch();
  const { success, error, loading, modalOpen } = useSelector(
    (state) => state.message
  );
  return <div>
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
      <Navbar />
      <div className="grid lg:grid-cols-2 h-auto w-full mx-auto max-w-7xl px-4 overflow-hidden gap-20 pb-10">
        <div className="col-span-1 hidden lg:flex bg-white w-full rounded-2xl h-[80vh] p-10 justify-center items-center text-center">
          <div className="grid place-items-center gap-6">
            <Image
              unoptimized
              width={500}
              height={500}
              src="/password.gif"
              alt="key-image"
              className="w-[250px]"
            />
            <h1 className="text-4xl font-bold text-darkColor">
            Reset your password securely and regain access to your account.
            </h1>
          </div>
        </div>
        <form
        //   onSubmit={handleSubmit}
          className="p-4 md:p-8 rounded-2xl md:h-[80vh] h-full flex justify-center items-center flex-col"
        >
          
              <div className="w-full">
                <h1 className="text-3xl text-center font-bold pb-6">
                  Password Recovery
                </h1>
                <div className="input-group mt-4">
                  <input
                    type="email"
                    name="email"
                    // value={otp}
                    // onChange={handleOtpChange}
                    className="input w-full rounded-lg px-2 py-3 text-darkColor"
                    placeholder=""
                  />
                  <label className="user-label text-sm">Email</label>
                </div>
              </div>
          <div className="w-full">
            <button
              type="submit"
              className="mt-6 md:mt-6 bg-redColor text-white py-3 md:py-4 px-10 text-sm rounded-lg w-full md:text-[16px]"
            >
              Reset
            </button>
         
          </div>
        </form>
      </div>
  </div>;
};

export default Page;
