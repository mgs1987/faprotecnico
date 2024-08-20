import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const [newUser, setNewUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const userLocal = localStorage.getItem("user");
    if (userLocal) {
      setNewUser(JSON.parse(userLocal));
    }
  }, []);

  const handleLogout = () => {
    logout(null);
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
        <h1 className="text-[30px] text-center m-3">Tu perfil de entidades</h1>
        <section>
          <Link to="/create">Create Entities</Link>
          <Link to="/entities">See All Entities</Link>
        </section>
      </div>
    </>
  );
}
