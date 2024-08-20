import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Dashboard from "./pages/dashboard/Dashboard";
import CreateEntities from "./pages/dashboard/CreateEntities";
import AllEntities from "./pages/dashboard/AllEntities";
import { useAuth } from "./context/AuthContext";
function App() {
  const { isAuthenticated } = useAuth();
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/signup" element={<SignUp />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/create" element={<CreateEntities />} />
      <Route exact path="/entities" element={<AllEntities />} />
      <Route
        path="/dashboard"
        element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
      />
    </Routes>
  );
}

export default App;
