import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import api from "../../api";
import LoginBackground from "../../Assets/Login/background-login-page.png";

const LoginPage = () => {
  const [validMessage, setValidMessage] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();

  const onSumbitLogin = async (value) => {
    if (value?.credential.length < 13) {
      setValidMessage("Invalid Credential");
      return;
    } else {
      setValidMessage("");
    }
    try {
      const body = JSON.stringify(value);
      const res = await api.post("/auth/signin", body);
      navigate(`/otp-verification`, {
        state: { mobile: res.data, citizenNumber: value?.credential },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const LoginCard = () => {
    return (
      <div className="shadow-md width rounded-[20px] w-[90vw] m-5 h-[350px] absolute z-1 bottom-1 bg-white">
        <h1 className="text-center font-body font-[500] text-xl mt-[34px]">
          Login
        </h1>
        <div className="w-ful mx-[15px] mt-[39px]">
          <form onSubmit={handleSubmit(onSumbitLogin)}>
            <h2 className=" font-body mb-[6px]">Citizen Number</h2>
            <input
              {...register("credential", {
                required: "Invalid Credential",
              })}
              type="tel"
              maxLength={13}
              className="w-full h-[40px] rounded-[8px] border-[1px] border-[solid] border-[#D0D5DD] box-shadow-[0px 1px 2px 0px #1018280D]"
            />
            <h2 className="text-[#ff0000] font-body relative top-2">
              {errors.credential?.message
                ? errors.credential?.message
                : validMessage}
            </h2>
            <div
              className={
                errors || validMessage
                  ? "flex justify-center mt-[-50px]"
                  : "flex justify-center"
              }
            >
              <button
                type="submit"
                value="submit"
                className="mt-[72px] bg-[#303ED9] font-body text-white w-[235px] h-[44px] rounded-[8px]"
              >
                Login
              </button>
            </div>
          </form>
          <h1 className="text-[#9E9E9E] text-[12px] font-body text-center mt-[48px] ">
            For patient in hospital
          </h1>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full">
      <img
        src={LoginBackground}
        alt="Background Login Page"
        className="object-cover w-full absolute z-0"
      />
      <div className="h-[70vh] flex items-center text-start ml-8 tracking-wider">
        <h1 className="z-1 text-4xl relative font-body text-white font-[500]">
          Welcome! <br />
          <span className="text-lg">to Synthia</span>
        </h1>
      </div>
      <LoginCard />
    </div>
  );
};

export default LoginPage;
