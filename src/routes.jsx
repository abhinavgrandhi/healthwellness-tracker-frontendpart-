import { Routes, Route } from "react-router-dom";
import Home from "./pages/User/Home";
import Dashboard from "./pages/User/Dashboard";
import Profile from "./pages/User/Profile";
import Nutrition from "./pages/User/Nutrition";
import Steps from "./pages/User/Steps";
import Login from "./pages/User/Login";
import Register from "./pages/User/Register";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/nutrition" element={<Nutrition />} />
      <Route path="/steps" element={<Steps />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default AppRoutes;
