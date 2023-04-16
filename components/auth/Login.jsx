import React, { useState } from "react";
import router, { useRouter } from "next/router";
import Link from "next/link";
import OtpInput from "otp-input-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "../../config/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import Loader from "../loader/Loader";

export default function Login() {
const [otp, setOtp] = useState("");
const [ph, setPh] = useState("");
const [loading, setLoading] = useState(false);
const [showOTP, setShowOTP] = useState(false);
const [user, setUser] = useState(null);

function onCaptchVerify() {
  if (!window.recaptchaVerifier) {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          onSignup();
        },
        "expired-callback": () => {},
      },
      auth
    );
  }
}

function onSignup() {
  setLoading(true);
  onCaptchVerify();

  const appVerifier = window.recaptchaVerifier;

  const formatPh = "+" + ph;

  signInWithPhoneNumber(auth, formatPh, appVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
      setLoading(false);
      setShowOTP(true);
      toast.success("OTP sended successfully!");
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
    });
}

function onOTPVerify() {
  setLoading(true);
  window.confirmationResult
    .confirm(otp)
    .then(async (res) => {
      console.log(res);
      setUser(res.user);
      setLoading(false);
      router.push("/dashboard")
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
    });
}
  
  return (
    <section className="bg-white h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center px-4 py-10 bg-black sm:px-6 lg:px-8 sm:py-16 lg:py-24">
          <div>
            <Toaster toastOptions={{ duration: 4000 }} />
            <div id="recaptcha-container"></div>
            {user ? (
              <h2 className="text-center text-white font-medium text-2xl">
                👍Login Success
              </h2>
            ) : (
              <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
                <h1 className="text-center leading-normal text-white font-medium text-3xl mb-6">
                  Welcome <br /> 
                </h1>
                {showOTP ? (
                  <>
                    <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                      
                    </div>
                    <label
                      htmlFor="otp"
                      className="font-bold text-xl text-white text-center"
                    >
                      Enter your OTP
                    </label>
                    <OtpInput
                      value={otp}
                      onChange={setOtp}
                      OTPLength={6}
                      otpType="number"
                      disabled={false}
                      autoFocus
                      className="opt-container "
                    ></OtpInput>
                    <button
                      onClick={onOTPVerify}
                      className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                    >
                      {loading && (
                        <Loader />
                      )}
                      <span>Verify OTP</span>
                    </button>
                  </>
                ) : (
                  <>
                    <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                    </div>
                    <label
                      htmlFor=""
                      className="font-bold text-xl text-white text-center"
                    >
                      Verify your phone number
                    </label>
                    <PhoneInput country={"in"} value={ph} onChange={setPh} />
                    <button
                      onClick={onSignup}
                      className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                    >
                      {loading && (
<Loader />                      )}
                      <span>Send code via SMS</span>
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="flex h-screen items-center justify-center px-0 py-0 lg:py-24 bg-gray-50 ">
          <div>
            <img className="w-full m-0 p-0 mx-auto" src="/login.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
