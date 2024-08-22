import { useState } from "react";
import { usePatchEntity } from "./usePatchEntity";
const DELETE_ENTITY = import.meta.env.VITE_ENTITY;
import axios from "axios";
export const useDelete = () => {
  const [deleteOK, setDeleteOK] = useState(null);
  const { updateSelectedEntity, id, setError, success } = usePatchEntity();
  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const token = sessionStorage.getItem("token");
      const resp = await axios.delete(DELETE_ENTITY + `${id}/`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (resp.status === 204) {
        updateSelectedEntity((prevEntities) => {
          if (Array.isArray(prevEntities)) {
            return prevEntities.filter((entity) => entity.id !== id);
          }
          return prevEntities;
        });
        setDeleteOK("Entidad borrada con éxito");
      } else {
        throw new Error("Error al borrar la entidad");
      }
    } catch (error) {
      console.error(error.message);
      setError("hubo un problema al querer borrar la entidad");
    }
  };
  return { handleDelete, success, deleteOK };
};
