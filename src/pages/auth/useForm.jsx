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

      setSuccess(resp.data.data.message);
      setInput({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        repeat_password: "",
      });
    } catch (error) {
      console.error(error);
      setError(error.response?.data?.message);
    }
  };
  return { handleChange, handleSubmit, error, success };
};
