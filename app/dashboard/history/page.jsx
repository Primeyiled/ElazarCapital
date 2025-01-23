import React from "react";
import { UserSidebar } from "../UserSidebar";
import Header from "../Header";

const History = () => {
  return (
    <div className="w-full lg:h-[100vh]  flex flex-1 ">
      <UserSidebar>
        <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full lg:overflow-y-scroll">
          <div className="rounded-xl py-8 px-4 md:px-8 bg-neutral-800 h-screen 2xl:h-[90vh] w-full">
            <Header page="History" />
            <p className="font-medium md:text-lg py-4">Transaction History</p>
            <div className="grid overflow-x-auto gap-4 mt-8">
              <div className="text-sm grid grid-cols-7 bg-neutral-700 p-3 rounded-xl w-[700px] md:w-full font-bold gap-4">
                <span className="col-span-1 whitespace-nowrap">Id</span>
                <span className="col-span-1 whitespace-nowrap">Type</span>
                <span className="col-span-1 whitespace-nowrap">Amount</span>
                <span className="col-span-1 whitespace-nowrap">Gate Way</span>
                <span className="col-span-1 whitespace-nowrap">Status</span>
                <span className="col-span-1 whitespace-nowrap">Time</span>
                <span className="col-span-1 whitespace-nowrap">Date</span>
              </div>
              <div className="text-sm grid grid-cols-7 bg-neutral-700 p-3 rounded-xl w-[700px] md:w-full gap-4">
                <span className="col-span-1 whitespace-nowrap overflow-hidden">
                  123445677888888..
                </span>
                <span className="col-span-1 whitespace-nowrap">Deposit</span>
                <span className="col-span-1 whitespace-nowrap">$3000</span>
                <span className="col-span-1 whitespace-nowrap">USDT</span>
                <span className="col-span-1 whitespace-nowrap text-green-500 font-bold">
                  Approved
                </span>
                <span className="col-span-1 whitespace-nowrap">12:30 am</span>
                <span className="col-span-1 whitespace-nowrap">1/19/2025</span>
              </div>
            </div>
          </div>
        </div>
      </UserSidebar>
    </div>
  );
};

export default History;
