import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./Page/Login";

function App() {
  // const Login = lazy(() => import("./Page/Login"));
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
