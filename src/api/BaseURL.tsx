import axios from 'axios';


export const BaseURL                   = 'http://192.168.1.198:8080/';

export const insecureInstance   = axios.create({
    baseURL: BaseURL,
    httpsAgent: {
        rejectUnauthorized: false,
    },
});
