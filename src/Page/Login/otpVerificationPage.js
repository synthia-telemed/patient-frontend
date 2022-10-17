import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";
import { connect } from "react-redux";
import useAPI from "../../hooks/useAPI";

const mapDispatch = dispatch => ({
  setToken: value => dispatch.user.setToken({ tokenJWT: value })
});

const mapState = state => ({
  name: state.user.name
});

const OtpVerificationPage = props => {
  const location = useLocation();
  const [otp, setOtp] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const [api] = useAPI();

  const handleChange = otp => {
    setOtp(otp);
  };
  const saveToken = token => {
    localStorage.setItem("jwt", token);
  };
  const resendVerification = async () => {
    try {
      const body = { credential: location.state?.citizenNumber };
      const res = await api.post("/auth/signin", body);
      console.log(res);
    } catch (error) {
      setErrorMessage("Invalid PIN. Please try again");
      console.log(error);
    }
  };
  const submitVerfication = async () => {
    try {
      if (otp.length !== 6) {
        setErrorMessage("Invalid PIN. Please try again");
      } else {
        const body = { otp: otp };
        console.log(body);
        const res = await api.post("/auth/verify", body);
        saveToken(res.data.token);
        props.setToken(res.data.token);
        navigate(`/verified-success`);
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-screen h-screen">
      <div className="absolute left-[50%] top-[30vh] translate-x-[-50%] w-screen">
        <h1 className="text-center font-body text-[24px]">Enter Verification Code</h1>
        <h2 className="text-center font-body text-[12px]">
          The verification code sent to {location.state.mobile.phone_number}
        </h2>
        <div className="flex justify-center w-screen mt-[80px] ">
          <OtpInput
            value={otp}
            onChange={handleChange}
            numInputs={6}
            inputStyle={{
              width: "50.5px",
              height: "3rem",
              margin: "3px",
              borderRadius: "8px",
              border: "1px solid #838BE8",
              color: "#303ed9",
              fontSize: "2.5rem",
              fontFamily: "Poppins",
              fontWeight: 600
            }}
          />
        </div>
        <h1 className=" font-body text-error_600 mx-[2.5rem] ">{errorMessage}</h1>

        <div className="mt-[80px] flex justify-center">
          <button
            className="w-[315px] bg-primary-500 text-base-white h-[48px] rounded-[8px] typographyTextMdMedium"
            onClick={submitVerfication}
          >
            Get Verify
          </button>
        </div>
        <h2 className="text-gray-400 text-center mt-[30px] typographyTextXsSemibold">
          Didn’t recieve the verification code?{" "}
          <span className="text-primary-600" onClick={resendVerification}>
            click to resend
          </span>
        </h2>
      </div>
    </div>
  );
};
export default connect(mapState, mapDispatch)(OtpVerificationPage);
