import { useState } from "react";
import axios from "axios";
const POST_REGISTER = import.meta.env.VITE_USER_REGISTER;
export const useForm = (initialForm, validateForm) => {
  const [input, setInput] = useState(initialForm, validateForm);
  const [success, setSuccess] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { value, name } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(input));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post(POST_REGISTER, input);
      const successMessage = resp.data.data.message;
      setSuccess(successMessage);
      if (successMessage) {
        setInput({
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          repeat_password: "",
        });
        setErrors({
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          repeat_password: "",
        });
      }
    } catch (error) {
      console.error(error);
      setErrors(error.response?.data?.message);
    }
  };
  return {
    handleChange,
    handleSubmit,
    errors,
    success,
    handleBlur,
    input,
  };
};
