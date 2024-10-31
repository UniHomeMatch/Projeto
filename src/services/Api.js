
import axios from "axios";

export const urlApi = '/api'; 

const api = axios.create({
    baseURL: urlApi,
});

export default api;
