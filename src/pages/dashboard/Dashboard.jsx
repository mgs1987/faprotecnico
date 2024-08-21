import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AllEntities from "../dashboard/AllEntities";
export default function Dashboard() {
  const [newUser, setNewUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const userLocal = sessionStorage.getItem("user");
    if (userLocal) {
      setNewUser(JSON.parse(userLocal));
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <div className="h-screen bg-purple-300 text-white font-ChakraPetch">
        <div className="flex flex-row justify-end items-center h-20 gap-10">
          <p className="text-center">Bienvenido/a {newUser?.first_name} </p>
          <button
            className="bg-purple-600 border border-purple-500 px-6 h-10 mx-7"
            onClick={handleLogout}
          >
            Log out
          </button>
        </div>
        <h1 className="text-[30px] text-center m-3 ">Perfil de entidades</h1>
        <section className="flex flex-col items-center">
          <button className="border border-purple-600 mt-4 px-6 py-3 bg-purple-600 rounded-md shadow-lg">
            <Link to="/create">Create Entities</Link>
          </button>
          <AllEntities />
        </section>
      </div>
    </>
  );
}
