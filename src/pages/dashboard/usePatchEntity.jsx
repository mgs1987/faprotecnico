import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { EntityContext } from "../../context/EntityContext";
import { useParams } from "react-router-dom";
const PATCH_ENTITY = import.meta.env.VITE_ENTITY;

export const usePatchEntity = () => {
  const { id } = useParams();
  const { selectedEntity, updateSelectedEntity } = useContext(EntityContext);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [entityData, setEntityData] = useState({
    business_name: "",
    credential: "",
    is_enabled: "",
  });
  const handleChange = (e) => {
    const { value, name } = e.target;
    setEntityData({ ...entityData, [name]: value });
  };
  const saveChanges = async (e) => {
    e.preventDefault();
    try {
      const token = sessionStorage.getItem("token");
      const response = await axios.patch(PATCH_ENTITY + `${id}/`, entityData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.data) {
        updateSelectedEntity(response.data.data); //se actualiza el componente editado
        setSuccess("Actualizacion exitosa");
        setEntityData({ business_name: "", credential: "", is_enabled: "" });
      }
    } catch (error) {
      console.error(error);
      setError("Hubo un problema al actualizar el entity");
    }
  };
  return {
    handleChange,
    setEntityData,
    entityData,
    saveChanges,
    selectedEntity,
    updateSelectedEntity,
    id,
    setError,
    setSuccess,
    error,
    success,
  };
};
