export const BASE_URL = "http://localhost:8000/api"

import axios from 'axios';

const API = axios.create({
    baseURL: BASE_URL,
    withCredentials: false,
});

API.interceptors.request.use((config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default API;
