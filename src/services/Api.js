import axios from "axios";

export const urlApi = 'http://localhost:8000';

const api = axios.create({
    baseURL: `http://localhost:8000`,
    //headers: {
    //    'Content-Type': 'application/json'
    //}
})

export default api;