import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const URL = `${process.env.REACT_APP_BACKEND}/categorias`;
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '#000',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }
  useEffect(() => {
    fetch(URL)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([...resposta]);
      });
  }, [URL]);

  function handleChange(e) {
    setValue(e.target.name, e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCategorias([...categorias, values]);

    const config = {
      method: 'POST',
      body: JSON.stringify(values),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    };

    fetch(URL, config)
      .then(async (respostaDoServidor) => {
        if (respostaDoServidor.status) {
          alert('Categoria criada com sucesso!');
        }
      });

    setValues(valoresIniciais);
  }

  return (
    <PageDefault>
      <h1>
        Cadastro de categoria:
        {' '}
        {values.titulo}
      </h1>
      <form
        onSubmit={handleSubmit}
      >
        <FormField
          label="Título da Categoria"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>Cadastrar</Button>
      </form>

      {categorias.length === 0
        && (
          <div>
            Loading
          </div>
        )}
      <ul>
        {categorias.map((categoria, index) => <li key={`categoria${index + 1}`}>{categoria.titulo}</li>)}
      </ul>

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
