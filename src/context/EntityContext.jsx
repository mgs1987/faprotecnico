import { createContext, useState } from "react";

export const EntityContext = createContext();

export const EntityProvider = ({ children }) => {
  const [selectedEntity, setSelectedEntity] = useState(null);

  const updateSelectedEntity = (updateEntity) => {
    setSelectedEntity(updateEntity);
  };
  return (
    <EntityContext.Provider
      value={{
        selectedEntity,
        setSelectedEntity,
        updateSelectedEntity,
      }}
    >
      {children}
    </EntityContext.Provider>
  );
};
