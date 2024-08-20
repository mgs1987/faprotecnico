import { useState } from "react";
import IngresarButton from "../../components/IngresarButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  const [login, setLogin] = useState({});

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post(
        "https://api-fapro-itw.fapro.dev/v1/authentication/login",
        login
      );
      if (resp.data.status === "success") {
        console.log(resp.data.data.id);
        const userId = resp.data.data.id;
        navigate(`/dashboard/${userId}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
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
      </form>
    </div>
  );
}
