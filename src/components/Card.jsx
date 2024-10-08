import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { EntityContext } from "../context/EntityContext";

const Card = ({ entities }) => {
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const { setSelectedEntity } = useContext(EntityContext);

  const handleModify = (e) => {
    setSelectedEntity(e);
    navigate(`/entities/${e.id}`);
  };

  return (
    <div className="main-component-card">
      <div className="sub-component-card">
        {entities &&
          entities.map((e, index) => (
            <div
              key={index}
              className={`text-white font-ChakraPetch border border-purple-500 bg-purple-600 flex flex-col items-center justify-center h-44 w-56 rounded-md ${
                e.is_enabled === false ? "hidden" : "bg-purple-600"
              }`}
            >
              <h1 className="m-1">Nombre: {e.business_name}</h1>
              <h1>Credencial: {e.credential}</h1>
              <h2>Está habilitado? {e.is_enabled === true ? "SI" : "NO"}</h2>
              <button
                onClick={() => handleModify(e)}
                type="button"
                className={`${
                  e.is_enabled === false ? "hidden" : null
                } border border-purple-500 bg-purple-500 rounded-md shadow-lg m-2 px-2`}
              >
                Editar entidad
              </button>

              {error ? (
                <p className="text-[12px] m-3">{error}</p>
              ) : (
                <p>{success}</p>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};
export default Card;
