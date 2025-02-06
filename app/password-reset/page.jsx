'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Loader from "@/components/Loader";
import { ErrorMessages, SuccessMessages } from "@/components/Messages";
import Navbar from "@/components/Navbar";
import { setError, setLoading, setSuccess, toggleModal } from "@/lib/features/messageSlice";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

const PasswordResetPage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <PasswordResetContent />
    </Suspense>
  );
};

const PasswordResetContent = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { success, error, loading, modalOpen } = useSelector(
    (state) => state.message
  );
  const [email, setEmail] = useState("");
  const [token, setToken] = useState(null);
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [validToken, setValidToken] = useState(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    // Get the reset token from the URL
    const tokenFromUrl = searchParams.get('token');
    if (tokenFromUrl) {
      setToken(tokenFromUrl);
      validateToken(tokenFromUrl);
    }
  }, [searchParams]);

  // Validate the reset token
  const validateToken = async (token) => {
    try {
      const res = await fetch(`/api/auth/validate-reset-token?token=${token}`);
      const data = await res.json();
      if (data.isValid) {
        setValidToken(true);
      } else {
        setValidToken(false);
      }
    } catch (err) {
      console.error('Error validating token:', err);
      setValidToken(false);
    }
  };

  const handleSubmitEmail = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));

    if (newPassword !== confirmNewPassword) {
      dispatch(setError("Password do not match"));
      dispatch(setLoading(false));
      return;
    }

    try {
      const response = await fetch("/api/auth/password-reset", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        dispatch(setSuccess("Password reset email sent. Check your inbox."));
        setEmail(""); // Clear email input
      } else {
        dispatch(setError(data.message || "Failed to send reset email."));
      }
    } catch (error) {
      console.error("Error:", error);
      dispatch(setError("An error occurred. Please try again."));
    }
    dispatch(setLoading(false));
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));

    try {
      const response = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token, newPassword }),
      });

      const data = await response.json();

      if (response.ok) {
        dispatch(setSuccess("Password reset successfully."));
        router.push('/login'); // Redirect to login page after reset
      } else {
        dispatch(setError(data.message || "Failed to reset password."));
      }
    } catch (error) {
      console.error("Error:", error);
      dispatch(setError("An error occurred. Please try again."));
    }
    dispatch(setLoading(false));
  };

  return (
    <div>
      {success && modalOpen && (
        <SuccessMessages
          data={success}
          isOpen={() => dispatch(toggleModal())}
          status={modalOpen}
        />
      )}
      {error && modalOpen && (
        <ErrorMessages
          data={error}
          isOpen={() => dispatch(toggleModal())}
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
          onSubmit={token ? handlePasswordReset : handleSubmitEmail}
          className="p-4 md:p-8 rounded-2xl md:h-[80vh] h-full flex justify-center items-center flex-col mt-20 md:mt-0"
        >
          <div className="w-full">
            <h1 className="md:text-3xl text-xl text-center font-bold pb-6">
              {token ? "Enter a New Password" : "Password Recovery"}
            </h1>
            <div className="input-group mt-4">
              {token ? (
                <>
                  <div className="input-group">
                    <input
                      type="password"
                      name="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="input w-full rounded-lg px-2 py-3 text-darkColor"
                      required
                      placeholder=" "
                    />
                    <label className="user-label text-sm">New Password</label>
                  </div>
                  <div className="input-group">
                    <input
                      type="password"
                      name="newPassword"
                      value={confirmNewPassword}
                      onChange={(e) => setConfirmNewPassword(e.target.value)}
                      className="input w-full rounded-lg px-2 py-3 text-darkColor"
                      required
                      placeholder=" "
                    />
                    <label className="user-label text-sm">Confirm Password</label>
                  </div>
                </>
              ) : (
                <div className="input-group">
                  <p className="text-gray-200 text-sm pb-2">Enter your registered email address</p>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input w-full rounded-lg px-2 py-3 text-darkColor"
                    placeholder=" "
                    required
                  />
                  <label className="user-label text-sm">Email</label>
                </div>
              )}
            </div>
          </div>
          <div className="w-full">
            <button
              type="submit"
              className="mt-6 md:mt-6 bg-redColor text-white py-3 md:py-4 px-10 text-sm rounded-lg w-full md:text-[16px]"
            >
              {token ? "Reset Password" : "Send Reset Link"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordResetPage;