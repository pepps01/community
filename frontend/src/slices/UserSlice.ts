import API, { BASE_URL } from "@/constant/base";
import axios from "axios";

import { StateCreator } from "zustand";

interface UserSlice {
    user: any;
    register: (userData: any) => Promise<void>;
    login: (credentials: any) => Promise<void>;
    logout: () => Promise<void>;
    getUser: (userId: string) => Promise<void>;
    updateUser: (userId: string, userData: any) => Promise<void>;
}

const createUserSlice: StateCreator<UserSlice> = (set: any) => ({
    user: null,
    register: async (userData: any) => {
        try {
            console.log('Registering user:', userData);
            const response = await axios.post(`${BASE_URL}/users/register`, userData);
            console.log('Registration response:', response.data);
            set({ user: response.data });
        } catch (err: any) {
            const errorData = err.response?.data?.errors;
            const errorMessage = typeof errorData === 'object'
                ? Object.values(errorData).flat().join(', ')
                : 'Registration failed.';
            set({ type: 'error', message: errorMessage });
        }
    },
    login: async (credentials: any) => {
        const response = await axios.post(`${BASE_URL}/auth/login`, credentials);
        localStorage.setItem('access_token', response.data.access);
        localStorage.setItem('refresh_token', response.data.refresh);

        console.log("response", response)
        console.log('data', response.data.user)
    },
    logout: async () => {
        set({ user: null });
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        delete API.defaults.headers.common['Authorization'];
        window.location.href = '/login';
    },
    getUser: async (userId: string) => {
        const response = await axios.get(`${BASE_URL}/api/users/${userId}`);
        set({ user: response.data });
    },
    updateUser: async (userId: string, userData: any) => {
        const response = await axios.put(`${BASE_URL}/api/users/${userId}`, userData);
        set({ user: response.data });
    }
})

export { createUserSlice };
export type { UserSlice };