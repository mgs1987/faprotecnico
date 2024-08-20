import { useState } from "react";
import axios from "axios";

export const useForm = () => {
  const [input, setInput] = useState({});
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setInput({ ...input, [name]: value });
    console.log(input);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post(
        "https://api-fapro-itw.fapro.dev/v1/authentication/register",
        input
      );
      console.log(resp);
      setSuccess(resp.data.data.message || "Registro exitoso");
      setInput("");
    } catch (error) {
      console.error(error);
      setError(
        error.response?.data?.message || "Hubo un problema al cargar el usuario"
      );
    }
  };
  return { handleChange, handleSubmit, error, success };
};
