import axios from "axios";

export const urlApi = 'http://64.181.165.60:9090';

const api = axios.create({
    baseURL: `http://64.181.165.60:9090`,
    //headers: {
    //    'Content-Type': 'application/json'
    //}
})

export default api;