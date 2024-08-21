import { useState } from "react";
import IngresarButton from "../../components/IngresarButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [credentials, setCredentials] = useState({});
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://api-fapro-itw.fapro.dev/v1/authentication/login",
        credentials
      );
      const {
        data: {
          data: { accessToken, user },
        },
      } = data;
      if (user && accessToken) {
        navigate("/dashboard");
        console.log("redirigiendo a /dashboard");
        sessionStorage.setItem("token", accessToken);
        sessionStorage.setItem("user", JSON.stringify(user));
      }
    } catch (error) {
      console.error(error);
      setError("Primero debes registrarte");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <div className="bg-purple-300 h-screen flex items-center justify-center flex-col w-screen">
      <h1 className="text-center text-white font-ChakraPetch text-[40px] mb-5">
        Inicia sesión
      </h1>
      <form onSubmit={handleSubmitLogin} className="flex flex-col items-center">
        <input
          placeholder="Email"
          type="email"
          name="email"
          className="border border-white rounded-md p-2 m-3 w-96"
          onChange={handleChange}
          required
        />
        <input
          placeholder="Password"
          type="password"
          name="password"
          className="border border-white rounded-md  p-2 m-3 w-96"
          onChange={handleChange}
          required
        />

        <IngresarButton />
        {error !== null ? (
          <>
            <p className="text-white">{error}</p>
            <button onClick={navigate("/signup")}>Ir a registarme</button>
          </>
        ) : null}
      </form>
    </div>
  );
}
