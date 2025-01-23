"use client";
import React, { useState } from "react";
import { UserSidebar } from "../UserSidebar";
import Header from "../Header";
import { MdClose, MdEdit } from "react-icons/md";

const Profile = () => {
  const [isEditting, setIsEditting] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "Noble",
    email: "nobleugwuja@gmail.com",
    investment: "Crypto Currency",
    address: "No. 6 trhvh ",
    phoneNo: "9436856444",
    country: "Nigeria",
  });

  const EditProfile = () => {
    setIsEditting(true);
  };
  const cancleEditProfile = () => {
    setIsEditting(false);
    setUserInfo({
      name: "Noble",
      email: "nobleugwuja@gmail.com",
      investment: "Crypto Currency",
      address: "No. 6 trhvh ",
      phoneNo: "9436856444",
      country: "Nigeria",
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="w-full lg:h-[100vh]  flex flex-1 ">
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
                  <h2 className="text-sm font-bold">Name:</h2>
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
                        {userInfo.address}
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
                        {userInfo.phoneNo}
                      </p>
                    )}
                  </div>
                  <div>
                    <h2 className="text-sm font-bold">Country:</h2>
                    {isEditting ? (
                      <input
                        type="text"
                        onChange={handleChange}
                        name="country"
                        value={userInfo.country}
                        className="bg-gray-300 rounded-xl py-2 px-3 mt-2  text-darkColor w-full border-none outline-none"
                      />
                    ) : (
                      <p className="bg-gray-300 rounded-xl py-2 px-3 mt-2  text-darkColor">
                        {userInfo.country}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <br />
            {isEditting && (
              <button className="bg-[#6C5AD4] text-white text-sm px-6 py-2 rounded-md  w-50">
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
