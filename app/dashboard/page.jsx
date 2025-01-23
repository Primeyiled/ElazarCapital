import React from "react";
import { UserSidebar } from "./UserSidebar";
import MainBody from "./MainBody";

const page = () => {
  return (
    <div className="w-full h-[100vh] ">
      <UserSidebar>
        <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full ">
          <MainBody />
        </div>
      </UserSidebar>
    </div>
  );
};

export default page;
