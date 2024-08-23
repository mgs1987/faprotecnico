import { useEffect, useContext } from "react";
import { useLogout } from "../pages/dashboard/useLogout";
import { Link } from "react-router-dom";
import { EntityContext } from "../context/EntityContext";

export default function Navbar() {
  const { user, setUser } = useContext(EntityContext);
  const { handleLogout } = useLogout();

  useEffect(() => {
    const setUpUser = () => {
      const userLocal = sessionStorage.getItem("user");
      if (userLocal) {
        setUser(JSON.parse(userLocal));
        console.log(user);
      }
    };
    setUpUser();
  }, [setUser]);

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
        {user ? (
          <>
            <p className="text-center m-7">Bienvenido/a {user?.first_name} </p>
            <button
              className="bg-purple-600 border border-purple-500 px-6 h-10 mx-7"
              onClick={() => handleLogout()}
            >
              Log out
            </button>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
