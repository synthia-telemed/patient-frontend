import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./Page/Login";
import OtpVerificationPage from "./Page/Login/otpVerificationPage";
import VerifiedSuccesPage from "./Page/Login/VerifiedSuccesPage";
import NotificationPage from "./Page/Notification";
import HistoryPage from "./Page/History/index";
import UserSettingPage from "./Page/UserSetting/index";
import PersonalInformationPage from "./Page/UserSetting/PersonalInformationPage";
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
        <Route path="/notification" element={<NotificationPage />} />

        <Route path="/history" element={<HistoryPage />} />
        <Route path="/setting" element={<UserSettingPage />} />
        <Route
          path="/setting/personal-information"
          element={<PersonalInformationPage />}
        />
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
