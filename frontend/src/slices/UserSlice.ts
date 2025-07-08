import { BASE_URL } from "@/constant/base";
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
        console.log('Registering user:', userData);
        const response = await axios.post(`${BASE_URL}/api/users/register`, userData);
        set({ user: response.data });
    },
    login: async (credentials: any) => {
        console.log('Logging in user:', credentials);
        const response = await axios.post(`${BASE_URL}/api/users/login`, credentials);
        set({ user: response.data });
    },
    logout: async () => {
        await axios.post(`${BASE_URL}/api/users/logout`);
        set({ user: null });
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