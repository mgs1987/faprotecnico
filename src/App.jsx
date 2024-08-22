import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Dashboard from "./pages/dashboard/Dashboard";
import CreateEntities from "./pages/dashboard/CreateEntities";
import AllEntities from "./pages/dashboard/AllEntities";
import Entity from "./pages/dashboard/Entity";
import NotFound from "./pages/NotFound";
import Wrapper from "./wraper/Wrapper";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Wrapper />}>
        <Route index element={<Home />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/create" element={<CreateEntities />} />
        <Route exact path="/entities" element={<AllEntities />} />
        <Route exact path="entities/:id" element={<Entity />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route exact path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
