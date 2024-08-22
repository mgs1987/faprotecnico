import { useNavigate } from "react-router-dom";
export const useLogout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("token");
    navigate("/");
  };

  return { handleLogout };
};
