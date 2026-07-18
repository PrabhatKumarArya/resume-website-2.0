import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";

import Login from "../admin/Login";
import Dashboard from "../admin/Dashboard";
import ProtectedRoute from "../admin/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Main Website */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>

      {/* Admin */}
      <Route path="/admin/login" element={<Login />} />

      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      {/* 404 */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;