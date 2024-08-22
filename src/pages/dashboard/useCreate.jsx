import axios from "axios";
import { useState } from "react";
const POST_ENTITY = import.meta.env.VITE_ENTITY;
export const useCreate = () => {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [entity, setEntity] = useState({ business_name: "", credential: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = sessionStorage.getItem("token");
    try {
      const resp = await axios.post(POST_ENTITY, entity, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (resp.data) {
        resp.data.status === "success"
          ? setSuccess("Entity creada con exito")
          : setError("Hubo un error al crear la entity");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEntity({ ...entity, [name]: value });
  };
  return { handleChange, handleSubmit, error, success };
};
