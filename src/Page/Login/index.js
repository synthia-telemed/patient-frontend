import React from "react";
import LoginBackground from "../../Assets/Login/background-login-page.png";

const LoginPage = () => {
  const LoginCard = () => {
    return (
      <div className="shadow-md width rounded-[20px] w-[90vw] m-5 h-[350px] absolute z-1 bottom-1 bg-white">
        <h1 className="text-center font-body font-[500] text-xl mt-[34px]">
          Login
        </h1>
        <div className="w-ful mx-[15px] mt-[39px]">
          <h2 className="mb-[6px]">Citizen Number</h2>
          <input
            type="number"
            className="w-full h-[40px] rounded-[8px] border-[1px] border-[solid] border-[#D0D5DD] box-shadow-[0px 1px 2px 0px #1018280D]"
          />
          <div className="flex justify-center">
            <button className="mt-[72px] bg-[#303ED9] text-white w-[235px] h-[44px] rounded-[8px]">
              Login
            </button>
          </div>
          <h1 className="text-[#9E9E9E] text-center mt-[30px]">
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
