import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../admin/Login";
import Dashboard from "../admin/Dashboard";
import ProtectedRoute from "../admin/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
      {/* Admin */}
      <Route path="/admin/login" element={<Login />}/>
      <Route path="/admin/dashboard" element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>  }/>
      </Routes>
  );
};

export default AppRoutes;