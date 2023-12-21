import axios from 'axios';

export const BASE_API_URL = 'https://capstone-backend-pi.vercel.app';

const authApi = axios.create({
    baseURL: BASE_API_URL,
});

authApi.interceptors.request.use(
    config => {
        config.headers.Accept = 'application/json';
        config.headers['Content-Type'] = 'application/json';
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default authApi;
