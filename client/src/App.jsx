import { Routes, Route } from "react-router-dom";
import Layout from "./admin/Layout";
import Dashboard from "./admin/Dashboard";
import AddProject from "./admin/AddProject";
import Home from "./pages/Home";
import Login from "./admin/Login";
import { useEffect } from "react";

const App = () => {

  const token = localStorage.getItem("adminToken");

  // Listen for token changes (optional if you login in same tab)
  useEffect(() => {
    const handleStorageChange = () => setToken(localStorage.getItem("adminToken"));
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={token ? <Layout /> : <Login />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="add-project" element={<AddProject />} />
      </Route>
    </Routes>
  )
};

export default App;