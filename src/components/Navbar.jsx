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
      <div className="main-component-navbar">
        <Link to="/">
          <img
            src="https://fapro.app/wp-content/uploads/2024/03/logo-header-fapro.png"
            alt="fapro-img"
            className="h-12"
          />
        </Link>
      </div>
      <div className="logout-container">
        {user ? (
          <>
            <p className="text-center m-7">Bienvenido/a {user?.first_name} </p>
            <button className="button-logout" onClick={() => handleLogout()}>
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
