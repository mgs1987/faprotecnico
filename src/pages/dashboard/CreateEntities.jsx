import { Link } from "react-router-dom";
import { useCreate } from "./useCreate";
export default function CreateEntities() {
  const { handleChange, handleSubmit, error, success } = useCreate();
  return (
    <div className="min-h-screen bg-purple-300 text-white font-ChakraPetch flex flex-col justify-start items-center">
      <h1 className="text-[30px] text-center my-8 ">Crea tu entidad</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          className="h-10 w-80 border border-purple-500 rounded-md text-gray-500 p-1"
          placeholder="Business Name"
          type="text"
          onChange={handleChange}
          name="business_name"
          required
        />
        <input //aqui debe ser numero en string(cuando haga validaciones)
          className="h-10 w-80 border border-purple-500 rounded-md text-gray-500 p-1"
          placeholder="Credencial "
          type="text"
          onChange={handleChange}
          name="credential"
          required
        />
        <button
          className="text-[20px] bg-purple-500 py-2 my-8 rounded-lg shadow-lg"
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
