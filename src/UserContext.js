import React from 'react';
import { TOKEN_POST, USER_GET } from './Api';
export const UserContext = React.createContext();
export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [erro, setErro] = React.useState(null);

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const tokenRest = await fetch(url, options);
    const json = await tokenRest.json();
    setData(json);
    console.log(json);
    setLogin(true);
  }

  async function userLogin(username, password) {
    const { url, options } = TOKEN_POST({ username, password });
    const tokenRest = await fetch(url, options);
    const { token } = await tokenRest.json();
    window.localStorage.setItem('token', token);
    getUser(token);
  }

  return (
    <UserContext.Provider value={{ userLogin, data }}>
      {children}
    </UserContext.Provider>
  );
};
