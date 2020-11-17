import React from 'react';
import useFetch from '../../Hooks/useFetch';
import useForm from '../../Hooks/useForm';
import Button from '../Form/Button';
import Input from '../Form/Input';
import { PASSWORD_LOST } from '../../Api';
import Error from '../../Helper/Error';
const LoginPasswordLost = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();
  async function handleSubmit(event) {
    event.preventDefault();

    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace('perdeu', 'resetar'),
      });
      const { json } = await request(url, options);
      console.log(json);
    }
  }
  return (
    <section>
      <h1 className="title">Perdeu a senha ?</h1>
      {data ? (
        <p style={{ color: '#4c1' }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email/Usuario" type="text" name="email" {...login} />
          {loading ? <Button>Enviando</Button> : <Button>Enviar email</Button>}
          <Error error={error} />
        </form>
      )}
    </section>
  );
};

export default LoginPasswordLost;
