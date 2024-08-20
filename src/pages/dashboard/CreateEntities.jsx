import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function CreateEntities() {
  const [entity, setEntity] = useState({ business_name: "", credential: "" });
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const resp = await axios.post(
        "https://api-fapro-itw.fapro.dev/v1/api_entities/entities/",
        entity,
        { headers: { Authorization: `Bearer ${token}` } }
      );
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
  return (
    <div className="h-screen bg-purple-300 text-white font-ChakraPetch  flex flex-col justify-center items-center">
      <h1 className="text-[40px]">Crea tu entidad</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 m-5">
        <input
          className="h-8 w-80 border border-purple-500 rounded-md text-gray-500"
          placeholder="Business Name"
          type="text"
          onChange={handleChange}
          name="business_name"
          required
        />
        <input //aqui debe ser numero en string(cuando haga validaciones)
          className="h-8 w-80 border border-purple-500 rounded-md text-gray-500"
          placeholder="Credencial "
          type="text"
          onChange={handleChange}
          name="credential"
          required
        />
        <button
          className="text-[20px] bg-purple-500 py-2 m-5 rounded-lg shadow-lg"
          type="submit"
        >
          Crear
        </button>
      </form>
      {success !== null ? (
        <>
          <p className="text-white">{success}</p>
          <Link
            to="/entities"
            className="text-[20px] bg-purple-500 py-2 px-3 rounded-lg shadow-lg m-5"
          >
            Ver mis todas mis entities
          </Link>
        </>
      ) : (
        <p className="text-white">{error}</p>
      )}
    </div>
  );
}
