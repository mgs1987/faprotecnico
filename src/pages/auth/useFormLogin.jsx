const useFormLogin = () => {
  const validationsForm = (credentials) => {
    let errors = {};
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexPassword = /^.{8,}$/;

    if (!credentials.email.trim()) {
      errors.email = "Debes proveer un email";
    } else if (!regexEmail.test(credentials.email.trim())) {
      errors.email = "El email debe tener formato email";
    }

    if (!credentials.password.trim()) {
      errors.password = "Debes escribir una contraseña";
    } else if (!regexPassword.test(credentials.password.trim())) {
      errors.password = "El password debe contar con 8 caracteres al menos";
    }
    return errors;
  };
  return { validationsForm };
};

export default useFormLogin;
