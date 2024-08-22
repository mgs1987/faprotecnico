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
    <div className="bg-purple-300 py-6 flex items-center justify-center flex-col w-screen">
      <h1 className="text-center text-white font-ChakraPetch text-[40px] mb-5">
        Registrate aquí
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          placeholder="Nombre"
          name="first_name"
          type="text"
          value={input.first_name}
          className="border border-purple-500 rounded-md p-2 m-3 w-96"
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {errors.first_name && (
          <p className="text-[10px] text-red-600">{errors.first_name}</p>
        )}
        <input
          placeholder="Apellido"
          name="last_name"
          type="text"
          value={input.last_name}
          className="border border-purple-500 rounded-md p-2 m-3 w-96"
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {errors.last_name && (
          <p className="text-[10px] text-red-600">{errors.last_name}</p>
        )}
        <input
          placeholder="Email"
          type="email"
          name="email"
          value={input.email}
          className="border border-purple-500 rounded-md p-2 m-3 w-96"
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
          value={input.password}
          className="border border-purple-500 rounded-md  p-2 m-3 w-96"
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {errors.password && (
          <p className="text-[10px] text-red-600">{errors.password}</p>
        )}
        <input
          placeholder="Repeat password"
          type="password"
          name="repeat_password"
          value={input.repeat_password}
          className="border border-purple-500 rounded-md  p-2 m-3 w-96"
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {errors.repeat_password && (
          <p className="text-[10px] text-red-600">{errors.repeat_password}</p>
        )}
        {success !== null ? (
          <>
            <p className="text-green-700 m-2">{success}</p>
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
