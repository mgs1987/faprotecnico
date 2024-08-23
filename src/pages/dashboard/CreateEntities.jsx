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
    <div className="main-container-create">
      <h1 className="title-create">Crea tu entidad</h1>
      <form onSubmit={handleSubmit} className="form-create">
        <input
          className="input-create"
          placeholder="Business Name"
          type="text"
          value={entity.business_name}
          onChange={handleChange}
          onBlur={handleBlur}
          name="business_name"
          required
        />
        {errorForm.business_name && (
          <p className="text-error-style">{errorForm.business_name}</p>
        )}
        <input
          className="input-create"
          placeholder="Credencial"
          type="text"
          value={entity.credential}
          onChange={handleChange}
          onBlur={handleBlur}
          name="credential"
          required
        />
        {errorForm.credential && (
          <p className="text-error-style">{errorForm.credential}</p>
        )}
        <button className="button-create" type="submit">
          Crear
        </button>
      </form>
      {success !== null ? (
        <>
          <p className="text-white">{success}</p>
          <Link to="/entities" className="link-create-entities">
            Ver mis todas mis entities
          </Link>
        </>
      ) : (
        <p className="text-white">{error}</p>
      )}
    </div>
  );
}
