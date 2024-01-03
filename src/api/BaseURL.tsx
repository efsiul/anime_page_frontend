import axios from 'axios';


const BaseURL                   = 'http://192.168.1.198:8000/';

export const insecureInstance   = axios.create({
    baseURL: BaseURL,
    httpsAgent: {
        rejectUnauthorized: false,
    },
});
