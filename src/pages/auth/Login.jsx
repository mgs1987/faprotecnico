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
    <div className="main-login-container">
      <h1 className="titulo-login">Inicia sesión</h1>
      <form onSubmit={handleSubmitLogin} className="form-format">
        <input
          placeholder="Email"
          type="email"
          name="email"
          value={credentials.email}
          className="login-input"
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {errors.email && <p className="p-text">{errors.email}</p>}
        <input
          placeholder="Password"
          type="password"
          name="password"
          value={credentials.password}
          className="login-input"
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {errors.password && <p className="p-text">{errors.password}</p>}
        <IngresarButton />
        {refuse !== null ? (
          <>
            <p className="error-refuse">{refuse}</p>
            <Link to="/signup" className="link-style">
              Ir a registarme
            </Link>
          </>
        ) : null}
      </form>
    </div>
  );
};
export default Login;
