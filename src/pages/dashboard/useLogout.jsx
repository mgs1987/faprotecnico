import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { EntityContext } from "../../context/EntityContext";
export const useLogout = () => {
  const { setUser } = useContext(EntityContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    setUser(null);
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("token");
    navigate("/");
  };

  return { handleLogout };
};
