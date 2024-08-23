import LoginGoButton from "../../components/LoginGoButton";
import SubmitButton from "../../components/SubmitButton";
import validationSignup from "./validationSignup";
import { useForm } from "./useForm";

const initialForm = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  repeat_password: "",
};
const { validationsForm } = validationSignup();

const SignUp = () => {
  const {
    handleChange,
    handleSubmit,
    error,
    success,
    handleBlur,
    input,
    errors,
  } = useForm(initialForm, validationsForm);

  return (
    <div className="main-container-signup">
      <h1 className="register-title">Registrate aquí</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          placeholder="Nombre"
          name="first_name"
          type="text"
          value={input.first_name}
          className="input-signup"
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {errors.first_name && (
          <p className="text-error-style">{errors.first_name}</p>
        )}
        <input
          placeholder="Apellido"
          name="last_name"
          type="text"
          value={input.last_name}
          className="input-signup"
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {errors.last_name && (
          <p className="text-error-style">{errors.last_name}</p>
        )}
        <input
          placeholder="Email"
          type="email"
          name="email"
          value={input.email}
          className="input-signup"
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {errors.email && <p className="text-error-style">{errors.email}</p>}
        <input
          placeholder="Password"
          type="password"
          name="password"
          value={input.password}
          className="input-signup"
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {errors.password && (
          <p className="text-error-style">{errors.password}</p>
        )}
        <input
          placeholder="Repeat password"
          type="password"
          name="repeat_password"
          value={input.repeat_password}
          className="input-signup"
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {errors.repeat_password && (
          <p className="text-error-style">{errors.repeat_password}</p>
        )}
        {success !== null ? (
          <>
            <p className="success-text">{success}</p>
            <LoginGoButton />
          </>
        ) : (
          <>
            <p>{error}</p>
            <SubmitButton />
          </>
        )}
      </form>
    </div>
  );
};
export default SignUp;
