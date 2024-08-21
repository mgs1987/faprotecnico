import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../components/Card";
export default function AllEntities() {
  const [errors, setErrors] = useState(null);
  const [entities, setEntities] = useState();

  useEffect(() => {
    const fetchEntities = async () => {
      try {
        const token = sessionStorage.getItem("token");
        const entity = await axios.get(
          "https://api-fapro-itw.fapro.dev/v1/api_entities/entities/",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setEntities(entity.data.data);
      } catch (error) {
        console.error("Error al obtener las entidades", error);
        setErrors("No se pudieron obtener las entidades");
      }
    };

    fetchEntities();
  }, []);
  return (
    <div className="h-screen bg-purple-300 flex justify-center items-center flex-col flex-wrap ">
      {entities.length === 0 ? (
        <h1 className="text-[20px]">Aun hay entidades creadas</h1>
      ) : (
        <Card entities={entities} />
      )}
    </div>
  );
}
