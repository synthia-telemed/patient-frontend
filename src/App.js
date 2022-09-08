import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./Page/Login";
import OtpVerificationPage from "./Page/Login/otpVerificationPage";
import VerifiedSuccesPage from "./Page/Login/VerifiedSuccesPage";
import HistoryPage from './Page/History/index';
import HomePage from "./Page/home";

function App() {
  // const Login = lazy(() => import("./Page/Login"));
  return (
    <BrowserRouter>
      <Routes>
        {/* Login Section */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/otp-verification" element={<OtpVerificationPage />} />
        <Route path="/verified-success" element={<VerifiedSuccesPage />} />

        <Route path="/history" element={<HistoryPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
