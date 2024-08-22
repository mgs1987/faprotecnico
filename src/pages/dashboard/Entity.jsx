import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDelete } from "./useDelete";
import { usePatchEntity } from "./usePatchEntity";

export default function Entity() {
  const { handleDelete } = useDelete();
  const {
    handleChange,
    setEntityData,
    entityData,
    saveChanges,
    selectedEntity,
    error,
    success,
  } = usePatchEntity();

  useEffect(() => {
    if (selectedEntity) {
      setEntityData({
        business_name: selectedEntity.business_name || "",
        credential: selectedEntity.credential || "",
        is_enabled: selectedEntity.is_enabled || false,
      });
    }
  }, [selectedEntity]);

  return (
    <div className="h-screen bg-purple-300 font-ChakraPetch text-white ">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[30px] fomt-semibold m-2">
          Detalles de la Entidad
        </h1>
        <form
          onSubmit={saveChanges}
          className="flex flex-col justify-center items-center border border-purple-500 rounded-md p-8"
        >
          <p>Realizar cambios:</p>
          <input
            className="text-black m-2 p-1"
            type="text"
            value={entityData.business_name}
            name="business_name"
            onChange={handleChange}
          />
          <input
            className="text-black m-2 p-1"
            type="text"
            value={entityData.credential}
            name="credential"
            onChange={handleChange}
          />
          <p className="m-2">Entidad habilitada:</p>
          <input
            value={entityData.is_enabled ? "SI" : "NO"}
            className="w-20 text-black m-2 bg-purple-300 text-center"
            name="is_enabled"
          />
          <button
            type="submit"
            className="border border-purple-500 bg-purple-500 px-3 py-1 rounded-md shadow-lg m-2"
          >
            Guardar cambios
          </button>
          {error ? (
            <p className="text-red-400">{error}</p>
          ) : (
            success && (
              <>
                <p className="text-green-600">{success}</p>
                <Link to="/entities">Ver Entidades</Link>
              </>
            )
          )}
        </form>
        <div className="border border-red-700 rounded-md p-8 m-6 flex flex-row items-center justify-center">
          <p>Para inhabilitar entidad:</p>
          <button
            type="button"
            onClick={handleDelete}
            className="border border-red-700 bg-red-700 rounded-md shadow-lg m-2 px-2"
          >
            Inhabilitar
          </button>
        </div>
      </div>
    </div>
  );
}
