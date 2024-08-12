import { createContext, useEffect, useState } from "react";
import api from "../services/Api";
import { toast } from "react-toastify";
import { GetLocalStorage, SetLocalStorage } from "./utils";


export const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {

    const [user, setUser] = useState();

    useEffect(() => {
        const user = GetLocalStorage();
        if (user) {
            setUser(user);
            console.log('Usuário logado', user);
        }   
    }, []);

    async function authenticate(email, password) {
        api.post('/login', { email, password })
            .then((response) => {
                if (!response.data.erro === true) {
                    toast(response.data.message)
                }
                const email = response.data.email;
                const payload = { token: response.data.token, email }
                setUser(payload);
                SetLocalStorage(payload);
                window.location.href = '/perfil';

            }).catch((response) => {
                toast(response.response.data.message);
            })
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
