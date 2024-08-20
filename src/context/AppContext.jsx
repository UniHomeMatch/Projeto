import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import api from "../services/Api";
import { GetLocalStorage, SetLocalStorage } from "./utils";

export const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const user = localStorage.getItem('Yt');
    if (user) {
      setUser(user);
      console.log('Usuário logado', user);
    }
  }, []);

  async function authenticate(email, password) {
    api.post('/session', { email, password })
      .then((response) => {
        if (!response.data.erro === true) {
          toast(response.data.message)
        }
        const id = response.data.user.id;
        const email = response.data.user.email;
        const payload = { token: response.data.token, email, id }
        setUser(payload);
        SetLocalStorage(payload);
        window.location.href = "/perfil"
      }).catch(() => {
        console.log('Erro: App Error');
      });
  }

  function logout() {
    setUser(null);
    SetLocalStorage(null);
  }

  return (
    <AppContext.Provider value={{ ...user, authenticate, logout }}>
      {children}
    </AppContext.Provider>
  )
}