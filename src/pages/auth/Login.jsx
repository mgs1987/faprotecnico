import IngresarButton from "../../components/IngresarButton";
import { Link } from "react-router-dom";
import useLogin from "./useLogin";
import useFormLogin from "./useFormLogin";
const initialForm = {
  email: "",
  password: "",
};

export const Login = () => {
  const { validationsForm } = useFormLogin();
  const {
    handleChange,
    handleSubmitLogin,
    errors,
    refuse,
    handleBlur,
    credentials,
  } = useLogin(initialForm, validationsForm);

  return (
    <div className="bg-purple-300 flex h-96 items-center justify-center flex-col w-screen">
      <h1 className="text-center text-white font-ChakraPetch text-[40px] mb-5">
        Inicia sesión
      </h1>
      <form onSubmit={handleSubmitLogin} className="flex flex-col items-center">
        <input
          placeholder="Email"
          type="email"
          name="email"
          value={credentials.email}
          className="border border-white rounded-md p-2 m-3 w-96"
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {errors.email && (
          <p className="text-[10px] text-red-600">{errors.email}</p>
        )}
        <input
          placeholder="Password"
          type="password"
          name="password"
          value={credentials.password}
          className="border border-white rounded-md  p-2 m-3 w-96"
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {errors.password && (
          <p className="text-[10px] text-red-600">{errors.password}</p>
        )}
        <IngresarButton />
        {refuse !== null ? (
          <>
            <p className="text-white m-3 font-ChakraPetch text-[17px]">
              {refuse}
            </p>
            <Link to="/signup">Ir a registarme</Link>
          </>
        ) : null}
      </form>
    </div>
  );
};
export default Login;
