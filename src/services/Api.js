import axios from "axios";

export const urlApi = 'https://64.181.165.60:9090';

const api = axios.create({
    baseURL: `https://64.181.165.60:9090`,
    //headers: {
    //    'Content-Type': 'application/json'
    //}
})

export default api;