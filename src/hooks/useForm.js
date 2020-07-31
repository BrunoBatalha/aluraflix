import { useState } from 'react';

function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(e) {
    setValue(e.target.name, e.target.value);
  }

  function clearForm() {
    setValue(valoresIniciais);
  }

  return {
    handleChange, values, clearForm,
  };
}

export default useForm;
