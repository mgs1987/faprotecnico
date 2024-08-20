import SubmitButton from "../../components/SubmitButton";
import { useForm } from "./useForm";
import { Link } from "react-router-dom";
export default function SignUp() {
  const { handleChange, handleSubmit, error, success } = useForm();

  return (
    <div className="bg-purple-300 h-screen flex items-center justify-center flex-col w-screen">
      <h1 className="text-center text-white font-ChakraPetch text-[40px] mb-5">
        Registrate aquí
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          placeholder="Nombre"
          name="first_name"
          type="text"
          className="border border-purple-500 rounded-md p-2 m-3 w-96"
          onChange={handleChange}
          required
        />
        <input
          placeholder="Apellido"
          name="last_name"
          type="text"
          className="border border-purple-500 rounded-md p-2 m-3 w-96"
          onChange={handleChange}
          required
        />
        <input
          placeholder="Email"
          type="email"
          name="email"
          className="border border-purple-500 rounded-md p-2 m-3 w-96"
          onChange={handleChange}
          required
        />
        <input
          placeholder="Password"
          type="password"
          name="password"
          className="border border-purple-500 rounded-md  p-2 m-3 w-96"
          onChange={handleChange}
        />
        <input
          placeholder="Repeat password"
          type="password"
          name="repeat_password"
          className="border border-purple-500 rounded-md  p-2 m-3 w-96"
          onChange={handleChange}
          required
        />
        {success !== null ? (
          <>
            <p className="text-green-600">{success}</p>
            <Link to="/login">
              <button className="border border-purple-500 bg-white text-purple-500 px-4 py-2">
                Vamos al Login
              </button>
            </Link>
          </>
        ) : (
          <p>{error}</p>
        )}
        <SubmitButton />
      </form>
    </div>
  );
}
