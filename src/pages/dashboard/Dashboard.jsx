import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Dashboard() {
  const handleLogout = () => {};
  useEffect(() => {}, []);
  const { id } = useParams();
  return (
    <>
      <h1>Tu perfil de entidades</h1>
      <p>Bienvenido </p>
      <button onClick={handleLogout}>Log out</button>
    </>
  );
}
