// components/Sidebar.js
// components/Sidebar.js
import { Dashinks } from "@/constants/data";
import { clearDepositData } from "@/lib/features/depositSlice";
import { clearUserData } from "@/lib/features/userSlice";
import { clearWithdrawalData } from "@/lib/features/withdrawalSlice";
import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Fragment } from "react";
import { useDispatch } from "react-redux";

export default function Sidebar({ sidebarOpen, closeSidebar }) {
  const dispatch = useDispatch();
    const router = useRouter();


  const handleLogout = async () =>{
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error("Logout failed");
      }

      dispatch(clearUserData());
      dispatch(clearDepositData());
      dispatch(clearWithdrawalData());

      router.push("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }

  return (
    <div
      className={`bg-neutral-800 text-white w-64 space-y-6 py-7 px-2 fixed inset-y-0 left-0 transform ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } md:relative md:translate-x-0 transition duration-200 ease-in-out z-50`}
    >
      {/* Logo */}
      <Link
        href="/"
        className="text-white flex items-center space-x-2 px-4"
        onClick={closeSidebar}
      >
        <span className="text-2xl font-extrabold">Logo.</span>
      </Link>

      {/* Navigation */}
      <nav className="">
        {Dashinks.map((link, idx) => (
          <Fragment key={idx}>
            <Link
              href={link.href}
              className="py-4 px-4 rounded transition duration-200  flex gap-2 group"
              onClick={closeSidebar}
            >
              <span>{link.icon}</span>
              <span className="hover:pl-3 duration-300 hover:text-gray-400">{link.label}</span>
              
            </Link>
          </Fragment>
        ))}
        <button onClick={handleLogout} className="py-2.5 px-4 rounded transition duration-200  flex gap-2 group" >
        <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
          Logout</button>
      </nav>
    </div>
  );
}
