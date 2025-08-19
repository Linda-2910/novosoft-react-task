import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/home-page/Homepage";
import QR from "../pages/QR/QR";
import Profile from "../pages/profile/Profile";
import SettlementHistory from "../pages/history/History";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/qr" element={<QR />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/history/transactions" element={<SettlementHistory />} />
    </Routes>
  );
};

export default AppRoutes;
