import axios from "axios";

export const urlApi = '/api';

const api = axios.create({
    baseURL: `http://144.22.141.202:9090`,
    //headers: {
    //    'Content-Type': 'application/json'
    //}
})

export default api;