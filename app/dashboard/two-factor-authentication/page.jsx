"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setLoading,
  setError,
  setSuccess,
  toggleModal,
  clearMessages,
} from "@/lib/features/messageSlice";
import { ErrorMessages, SuccessMessages } from "@/components/Messages";
import Loader from "@/components/Loader";
import Layout from "../Layout";

const TwoFactorAuth = () => {
  const dispatch = useDispatch();
  const { loading, success, error, modalOpen } = useSelector(
    (state) => state.message
  );
  const { userData } = useSelector((state) => state.user);

  const [password, setPassword] = useState("");
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(
    userData?.twoFactorAuth || false
  );
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);

  const fetch2FAStatus = async () => {
    try {
      const res = await fetch("/api/auth/2fa/2fa-status");
      const data = await res.json();

      if (res.ok) {
        setTwoFactorEnabled(data.twoFactorEnabled);
      }
    } catch (err) {
      console.error("Failed to fetch 2FA status:", err);
    }
  };

  useEffect(() => {
    fetch2FAStatus();
  }, []);

  const handleEnableClick = () => {
    setShowPasswordPrompt(true);
    dispatch(clearMessages());
  };

  const handleEnable2FA = async () => {
    if (!password) {
      dispatch(setError("Please enter your password."));
      return;
    }

    dispatch(setLoading(true));
    dispatch(clearMessages());

    try {
      const res = await fetch("/api/auth/2fa/enable-2fa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (res.ok) {
        setTwoFactorEnabled(true);
        setShowPasswordPrompt(false);
        dispatch(setSuccess("Two-factor authentication has been enabled."));
      } else {
        dispatch(setError(data.message || "Failed to enable 2FA."));
      }
    } catch (err) {
      console.error("Enable 2FA error:", err);
      dispatch(setError("Something went wrong. Please try again."));
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleDisable2FA = async () => {
    dispatch(setLoading(true));
    dispatch(clearMessages());

    try {
      const res = await fetch("/api/auth/2fa/disable-2fa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();

      if (res.ok) {
        setTwoFactorEnabled(false);
        dispatch(setSuccess("Two-factor authentication has been disabled."));
      } else {
        dispatch(setError(data.message || "Failed to disable 2FA."));
      }
    } catch (err) {
      console.error("Disable 2FA error:", err);
      dispatch(setError("An error occurred while disabling 2FA."));
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleModalClose = () => dispatch(toggleModal());

  return (
    <div className="w-full flex flex-1">
      {loading && <Loader />}
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
        <div className="rounded-xl pb-8 pt-4 px-4 md:px-8 bg-neutral-800 w-full">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-bold">Two-Factor Authentication</h1>
          </div>

          <div className="bg-neutral-700 p-6 rounded-lg mb-6">
            <h2 className="text-lg font-semibold mb-2">Security Status</h2>
            <div className="flex items-center gap-4">
              <span
                className={`w-3 h-3 rounded-full ${
                  twoFactorEnabled ? "bg-green-500" : "bg-yellow-400"
                }`}
              />
              <p>
                {twoFactorEnabled
                  ? "2FA is currently enabled for your account."
                  : "2FA is currently disabled. It's recommended to enable it."}
              </p>
            </div>
          </div>

          {!twoFactorEnabled ? (
            <div className="bg-neutral-700 p-6 rounded-lg">
              <h2 className="text-lg font-semibold mb-4">Enable 2FA</h2>
              <p className="mb-4 text-sm text-gray-300">
                You'll receive a code via email every time you log in, which
                must be entered to access your account.
              </p>

              {!showPasswordPrompt ? (
                <button
                  onClick={handleEnableClick}
                  className="bg-purpleColor text-white px-6 py-2 rounded-md text-sm"
                >
                  Enable 2FA
                </button>
              ) : (
                <div className="space-y-4">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="bg-gray-100 text-black rounded px-4 py-2 w-full"
                  />
                  <button
                    onClick={handleEnable2FA}
                    className="bg-green-600 text-white px-6 py-2 rounded-md text-sm"
                  >
                    Confirm & Enable
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-neutral-700 p-6 rounded-lg">
              <h2 className="text-lg font-semibold mb-4">Disable 2FA</h2>
              <p className="mb-4 text-sm text-red-300">
                Disabling 2FA is not recommended unless necessary.
              </p>
              <button
                onClick={handleDisable2FA}
                className="bg-red-600 text-white px-6 py-2 rounded-md text-sm"
              >
                Disable 2FA
              </button>
            </div>
          )}
        </div>
      </Layout>
    </div>
  );
};

export default TwoFactorAuth;
