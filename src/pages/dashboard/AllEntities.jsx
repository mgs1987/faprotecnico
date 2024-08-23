import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../components/Card";
import { Link } from "react-router-dom";
const GET_ENTITIES = import.meta.env.VITE_ENTITY;
export default function AllEntities() {
  const [errors, setErrors] = useState(null);
  const [entities, setEntities] = useState();

  useEffect(() => {
    const fetchEntities = async () => {
      try {
        const token = sessionStorage.getItem("token");
        const entity = await axios.get(GET_ENTITIES, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setEntities(entity.data.data);
      } catch (error) {
        console.error("Error al obtener las entidades", error);
        setErrors("No se pudieron obtener las entidades");
      }
    };
    fetchEntities();
  }, []);

  return (
    <div className="main-container-entities">
      <div className="mb-4">
        <Link to="/create" className="link-create">
          Create Entities
        </Link>
      </div>

      {entities && entities.length === 0 ? (
        <h1 className="text-[20px]">Aun hay entidades creadas</h1>
      ) : (
        <Card entities={entities} />
      )}
    </div>
  );
}
