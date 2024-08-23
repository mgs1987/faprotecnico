import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { EntityContext } from "../../context/EntityContext";
const USER_LOGIN = import.meta.env.VITE_USER_LOGIN;
const useLogin = (initialForm, validationForm) => {
  const [credentials, setCredentials] = useState(initialForm, validationForm);
  const [refuse, setRefuse] = useState(null);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { setUser } = useContext(EntityContext);

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validationForm(credentials));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(USER_LOGIN, credentials);
      const {
        data: {
          data: { accessToken, user },
        },
      } = data;
      if (user && accessToken) {
        sessionStorage.setItem("token", accessToken);
        setUser(user);
        navigate("/dashboard");
      }
    } catch (error) {
      console.error(error.message);
      setRefuse("Primero debes registrarte");
    }
  };
  return {
    handleChange,
    credentials,
    handleSubmitLogin,
    errors,
    setErrors,
    handleBlur,
    refuse,
  };
};
export default useLogin;
