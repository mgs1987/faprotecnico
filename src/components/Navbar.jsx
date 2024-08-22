import { useEffect, useState } from "react";
import { useLogout } from "../pages/dashboard/useLogout";
import { Link } from "react-router-dom";
export default function Navbar() {
  const { handleLogout } = useLogout();
  const [newUser, setNewUser] = useState();
  const [token, setToken] = useState(null);

  useEffect(() => {
    const userLocal = sessionStorage.getItem("user");
    const token = sessionStorage.getItem("token");
    setToken(token);
    if (userLocal) {
      setNewUser(JSON.parse(userLocal));
    }
  }, []);

  return (
    <>
      <div className="bg-white h-14 flex justify-center w-full items-center">
        <Link to="/">
          <img
            src="https://fapro.app/wp-content/uploads/2024/03/logo-header-fapro.png"
            alt="fapro-img"
            className="h-12"
          />
        </Link>
      </div>
      <div className="flex flex-row justify-end items-center h-20 gap-10 bg-purple-300  text-white font-ChakraPetch">
        <p className="text-center m-7">Bienvenido/a {newUser?.first_name} </p>

        {token ? (
          <button
            className="bg-purple-600 border border-purple-500 px-6 h-10 mx-7"
            onClick={() => handleLogout()}
          >
            Log out
          </button>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
