import axios from "axios";

export const urlApi = 'https://144.22.141.202:9090';

const api = axios.create({
    baseURL: `https://144.22.141.202:9090`,
    //headers: {
    //    'Content-Type': 'application/json'
    //}
})

export default api;