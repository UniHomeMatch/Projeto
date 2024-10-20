import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import api from "../services/Api";
import { SetLocalStorage } from "./utils";

export const AppContext = createContext({});
export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const storedUser = localStorage.getItem('Yt');
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Parse para objeto
      console.log('Usuário logado', JSON.parse(storedUser));
    }
  }, []);

  function authenticate(email, password) {
    api.post('/session', { email, password })
      .then((response) => {
        if (!response.data.erro === true) {
          toast(response.data.message);
        }
        const { id, email } = response.data.user; // Desestruturação
        const payload = { token: response.data.token, email, id };
        setUser(payload);
        SetLocalStorage(JSON.stringify(payload)); // Armazenar como string JSON
        window.location.href = "/cadastro-imovel";
      })
      .catch(() => {
        console.log('Erro: App Error');
      });
  }

  function logout() {
    setUser(null);
    SetLocalStorage(null);
  }

  return (
    <AppContext.Provider value={{ user, authenticate, logout }}>
      {children}
    </AppContext.Provider>
  );
}