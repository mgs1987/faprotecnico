import { useState } from "react";
import ModalEdit from "./ModalEdit";

export default function Card({ entities }) {
  const [modalOpen, setModalOpen] = useState(false);
  const handleClick = () => {
    setModalOpen(true);
  };
  return (
    <div className="flex justify-center my-8">
      <div className="grid grid-cols-5 gap-4">
        <h1></h1>
        {entities &&
          entities.map((e, index) => (
            <div
              key={index}
              className="text-white font-ChakraPetch border border-purple-500 flex flex-col items-center justify-center h-28 w-48 rounded-md"
            >
              <h1 className="m-1">Nombre: {e.business_name}</h1>
              <h1>Credencial: {e.credential}</h1>
              <button
                type="button"
                className="border border-purple-500 bg-purple-500 rounded-md shadow-lg m-2 px-2"
                onClick={handleClick}
              >
                Editar entidad
              </button>
            </div>
          ))}
        <ModalEdit isOpen={modalOpen} />
      </div>
    </div>
  );
}
