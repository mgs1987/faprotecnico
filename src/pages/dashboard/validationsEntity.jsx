export const validationsEntity = () => {
  const validationsForm = (entity) => {
    let errorForm = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexnum = /^\d{5}$/;

    if (!entity.business_name.trim()) {
      errorForm.business_name = "Debes proveer un nombre";
    } else if (!regexName.test(entity.business_name.trim())) {
      errorForm.business_name = "El nombre solo acepta letras y espacios";
    }

    if (!entity.credential.trim()) {
      errorForm.credential =
        "Debes escribir un numero de identificacion de 5 dígitos";
    } else if (!regexnum.test(entity.credential.trim())) {
      errorForm.credential = "Solo deben 5 dígitos";
    }
    return errorForm;
  };
  return { validationsForm };
};
