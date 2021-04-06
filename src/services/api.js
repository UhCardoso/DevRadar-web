import axios from 'axios';

const api = axios.create({
    baseURL: "https://api-devradar.herokuapp.com:443"
})

export default api;