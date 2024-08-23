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
    <div className="main-container-entity">
      <div className="sub-div-entity">Detalles de la Entidad</div>
      <Link to="/dashboard" className="link-entity-container">
        Ir a Dashboard
      </Link>
      <div className="sub-container-entity">
        <form onSubmit={saveChanges} className="form-edit">
          <p className="my-3">Realizar cambios:</p>
          <p>Entidad:</p>
          <input
            className="input-edit m-1"
            type="text"
            value={entityData.business_name}
            name="business_name"
            onChange={handleChange}
          />
          <p className="mt-5">Número de cliente:</p>
          <input
            className="input-edit"
            type="text"
            value={entityData.credential}
            name="credential"
            onChange={handleChange}
          />
          <p className="mt-5">Entidad habilitada:</p>
          <input
            value={entityData.is_enabled ? "SI" : "NO"}
            className="input-habilitac"
            type="text"
            name="is_enabled"
            onChange={handleChange}
          />
          <button type="submit" className="button-submit-edit">
            Guardar cambios
          </button>
          {error ? (
            <p className="text-red-400">{error}</p>
          ) : (
            success && (
              <>
                <p className="text-green-600">{success}</p>
                <Link className="link-submit" to="/dashboard">
                  Ver todas
                </Link>
              </>
            )
          )}
        </form>
        <div className="second-container-edit">
          <button
            type="button"
            onClick={handleDelete}
            className="button-second-container"
          >
            Presiona aqui para inhabilitar entidad
          </button>
          {deleteOK && <p className="p-delete">{deleteOK}</p>}
        </div>
      </div>
    </div>
  );
}
