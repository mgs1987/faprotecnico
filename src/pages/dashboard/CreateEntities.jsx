import { Link } from "react-router-dom";
import { useCreate } from "./useCreate";
import { validationsEntity } from "./validationsEntity";
export default function CreateEntities() {
  const initialForm = { business_name: "", credential: "" };
  const { validationsForm } = validationsEntity();
  const {
    handleChange,
    handleSubmit,
    error,
    success,
    handleBlur,
    errorForm,
    entity,
  } = useCreate(initialForm, validationsForm);
  return (
    <div className="min-h-screen bg-purple-300 text-white font-ChakraPetch flex flex-col justify-start items-center">
      <h1 className="text-[30px] text-center my-8 ">Crea tu entidad</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          className="h-10 w-80 border border-purple-500 rounded-md text-gray-500 p-1"
          placeholder="Business Name"
          type="text"
          value={entity.business_name}
          onChange={handleChange}
          onBlur={handleBlur}
          name="business_name"
          required
        />
        {errorForm.business_name && (
          <p className="text-[10px] text-red-600">{errorForm.business_name}</p>
        )}
        <input //aqui debe ser numero en string(cuando haga validaciones)
          className="h-10 w-80 border border-purple-500 rounded-md text-gray-500 p-1"
          placeholder="Credencial "
          type="text"
          value={entity.credential}
          onChange={handleChange}
          onBlur={handleBlur}
          name="credential"
          required
        />
        {errorForm.credential && (
          <p className="text-[10px] text-red-600">{errorForm.credential}</p>
        )}
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
