"use client";
import React, { useState } from "react";
import { UserSidebar } from "../UserSidebar";
import Header from "../Header";
import { MdClose, MdEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  clearMessages,
  setError,
  setLoading,
  setSuccess,
  toggleModal,
} from "@/lib/features/messageSlice";
import { ErrorMessages, SuccessMessages } from "@/components/Messages";
import Loader from "@/components/Loader";
import { useRouter } from "next/navigation";

const Profile = () => {
  const { userData } = useSelector((state) => state.user);
  const [isEditting, setIsEditting] = useState(false);
  const { success, error, loading, modalOpen } = useSelector(
    (state) => state.message
  );

  const dispatch = useDispatch();
    const router = useRouter();

  const [userInfo, setUserInfo] = useState({
    name: userData?.userName || "",
    email: userData?.email || "",
    investment: userData?.investment || "",
    address: userData?.address || "",
    phoneNo: userData?.phoneNo || "",
  });

  const EditProfile = () => {
    setIsEditting(true);
  };

  const cancleEditProfile = () => {
    setIsEditting(false);
    setUserInfo({
      name: userData?.userName || "",
      email: userData?.email || "",
      investment: userData?.investment || "",
      address: userData?.address || "",
      phoneNo: userData?.phoneNo || "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(setLoading(true));
    dispatch(clearMessages());

    const UpdateUser = {
      userName: userInfo.name,
      email: userInfo.email,
      investment: userInfo.investment,
      address: userInfo.address,
      phoneNo: userInfo.phoneNo,
    };

    try {
      const response = await fetch("/api/user/edit-profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(UpdateUser),
      });

      const data = await response.json();

      if (response.ok) {
        dispatch(setSuccess(data.message || "Profile updated successfully!"));

        setTimeout(() => {
          router.push("/dashboard");
          dispatch(clearMessages());
        }, 1000);
      } else {
        dispatch(setError(data.message || "Failed to update profile."));
      }
    } catch (error) {
      console.error("Fetch error:", error);
      dispatch(setError("An error occurred while updating the profile."));
    } finally {
      dispatch(setLoading(false));
    }
  };
  const handleModalClose = () => {
    dispatch(toggleModal());
  };

  return (
    <div className="w-full lg:h-[100vh]  flex flex-1 ">
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
      <UserSidebar>
        <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full lg:overflow-y-scroll">
          <div className="rounded-xl py-8 px-4 md:px-8 bg-neutral-800 h-full 2xl:h-[90vh] w-full">
            <Header page="Profile" />
            <div className="flex justify-between items-center">
              <p className="font-medium md:text-lg py-4">My Profile</p>

              {isEditting ? (
                <span
                  className="flex gap-2 items-center"
                  onClick={cancleEditProfile}
                >
                  Cancel <MdClose className="text-xl" />
                </span>
              ) : (
                <span
                  className="flex gap-2 hover:bg-[#6C5AD4] cursor-pointer p-2 rounded-xl"
                  onClick={EditProfile}
                >
                  Edit <MdEdit className="text-xl" />
                </span>
              )}
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="grid overflow-x-auto gap-6 mt-8 ">
                <div>
                  <h2 className="text-sm font-bold">User name:</h2>
                  {isEditting ? (
                    <input
                      type="text"
                      onChange={handleChange}
                      name="name"
                      value={userInfo.name}
                      className="bg-gray-300 rounded-xl py-2 px-3 mt-2  text-darkColor w-full border-none outline-none"
                    />
                  ) : (
                    <p className="bg-gray-300 rounded-xl py-2 px-3 mt-2 text-darkColor">
                      {userInfo.name}
                    </p>
                  )}
                </div>
                <div>
                  <h2 className="text-sm font-bold">Email:</h2>
                  {isEditting ? (
                    <input
                      type="text"
                      onChange={handleChange}
                      name="email"
                      value={userInfo.email}
                      className="bg-gray-300 rounded-xl py-2 px-3 mt-2  text-darkColor w-full border-none outline-none"
                    />
                  ) : (
                    <p className="bg-gray-300 rounded-xl py-2 px-3 mt-2  text-darkColor">
                      {userInfo.email}
                    </p>
                  )}
                </div>
                <div>
                  <h2 className="text-sm font-bold">Investment plan:</h2>
                  {isEditting ? (
                    <input
                      type="text"
                      onChange={handleChange}
                      name="investment"
                      value={userInfo.investment}
                      className="bg-gray-300 rounded-xl py-2 px-3 mt-2  text-darkColor w-full border-none outline-none"
                    />
                  ) : (
                    <p className="bg-gray-300 rounded-xl py-2 px-3 mt-2  text-darkColor">
                      {userInfo.investment}
                    </p>
                  )}
                </div>
              </div>
              <div>
                {/* <h1 className="font-bold py-4">Other Information</h1> */}

                <div className="grid gap-6 mt-8">
                  <div>
                    <h2 className="text-sm font-bold">Address:</h2>
                    {isEditting ? (
                      <input
                        type="text"
                        onChange={handleChange}
                        name="address"
                        value={userInfo.address}
                        className="bg-gray-300 rounded-xl py-2 px-3 mt-2  text-darkColor w-full border-none outline-none"
                      />
                    ) : (
                      <p className="bg-gray-300 rounded-xl py-2 px-3 mt-2  text-darkColor">
                        {userInfo.address === "" ? (
                          <p>No Phone Address</p>
                        ) : (
                          userInfo.address
                        )}
                      </p>
                    )}
                  </div>
                  <div>
                    <h2 className="text-sm font-bold">Phone Number:</h2>
                    {isEditting ? (
                      <input
                        type="text"
                        onChange={handleChange}
                        name="phoneNo"
                        value={userInfo.phoneNo}
                        className="bg-gray-300 rounded-xl py-2 px-3 mt-2  text-darkColor w-full border-none outline-none"
                      />
                    ) : (
                      <p className="bg-gray-300 rounded-xl py-2 px-3 mt-2  text-darkColor">
                        {userInfo.phoneNo === "" ? (
                          <span>No Phone Number</span>
                        ) : (
                          userInfo.phoneNo
                        )}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <br />
            {isEditting && (
              <button
                onClick={handleSubmit}
                className="bg-[#6C5AD4] text-white text-sm px-6 py-2 rounded-md  w-50"
              >
                Save Changes
              </button>
            )}
            <br />
            <br />
            <br />
          </div>
        </div>
      </UserSidebar>
    </div>
  );
};

export default Profile;
