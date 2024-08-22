import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDelete } from "./useDelete";
import { usePatchEntity } from "./usePatchEntity";

export default function Entity() {
  const { handleDelete, deleteOK } = useDelete();
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
      <div className="flex flex-row items-center justify-center text-[30px] fomt-semibold  p-4">
        Detalles de la Entidad
      </div>
      <Link
        to="/dashboard"
        className="font-bold text-purple-500 flex justify-end px-10"
      >
        Ir a Dashboard
      </Link>
      <div className="flex flex-col justify-center items-center">
        <form
          onSubmit={saveChanges}
          className="flex flex-col justify-center items-center border border-purple-500 rounded-md p-8"
        >
          <p className="my-3">Realizar cambios:</p>
          <p>Entidad:</p>
          <input
            className="text-black m-1 p-1"
            type="text"
            value={entityData.business_name}
            name="business_name"
            onChange={handleChange}
          />
          <p className="mt-5">Número de cliente:</p>
          <input
            className="text-black  p-1"
            type="text"
            value={entityData.credential}
            name="credential"
            onChange={handleChange}
          />
          <p className="mt-5">Entidad habilitada:</p>
          <input
            value={entityData.is_enabled ? "SI" : "NO"}
            className="w-20 mb-4 text-black bg-purple-300 text-center"
            type="text"
            name="is_enabled"
            onChange={handleChange}
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
                <Link
                  className="border border-purple-600 px-3 py-2 mt-4 text-white rounded-md shadow-lg bg-purple-500"
                  to="/dashboard"
                >
                  Ver todas
                </Link>
              </>
            )
          )}
        </form>
        <div className="border border-red-700 rounded-md p-8 m-6 flex flex-row items-center justify-center">
          <button
            type="button"
            onClick={handleDelete}
            className="border border-red-700 bg-red-700 rounded-md shadow-lg m-2 px-2"
          >
            Presiona aqui para inhabilitar entidad
          </button>
          {deleteOK && <p className="text-green-500 text-[15px]">{deleteOK}</p>}
        </div>
      </div>
    </div>
  );
}
