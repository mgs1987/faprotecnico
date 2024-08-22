const validationSignup = () => {
  const validationsForm = (input) => {
    let errors = {};
    let regexUser_name = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexPassword = /^.{8,}$/;

    if (!input.first_name.trim()) {
      errors.first_name = "Este campo es requerido";
    } else if (!regexUser_name.test(input.first_name.trim())) {
      errors.first_name = "Este campo solo acepta letras y espacios";
    }

    if (!input.last_name.trim()) {
      errors.last_name = "Este campo es requerido";
    } else if (!regexUser_name.test(input.last_name.trim())) {
      errors.last_name = "Este campo solo acepta letras y espacios";
    }

    if (!input.email.trim()) {
      errors.email = "*Email es requerido";
    } else if (!regexEmail.test(input.email.trim())) {
      errors.email = "Este campo solo acepta formato email";
    }

    if (!input.password.trim()) {
      errors.password = "Password es requerido";
    } else if (!regexPassword.test(input.password.trim())) {
      errors.password = "Password requiere 8 caracteres";
    }

    if (!input.repeat_password.trim()) {
      errors.repeat_password = " Debes repetir el password";
    } else if (input.repeat_password !== input.password) {
      errors.repeat_password = "Las contraseñas deben coincidir";
    }

    return errors;
  };

  return { validationsForm };
};

export default validationSignup;
