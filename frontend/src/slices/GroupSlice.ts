import API, { BASE_URL } from "@/constant/base";
import axios from "axios";

import { StateCreator } from "zustand";

interface GroupSlice {
    groups: any[];
    group_loading: boolean;
    error: string | null;
    addGroup: (data: any) => Promise<void>;
    getGroups: () => Promise<any>;
}

const createGroupSlice: StateCreator<GroupSlice> = (set: any) => ({
    groups: [],
    group_loading: false,
    error: null,
    addGroup: async (data: any) => {
        const response = await axios.post(`${BASE_URL}/groups/create`, { ...data },
            {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
                    'Content-Type': 'application/json',
                },
            });
        set({ groups: response?.data || 'Failed to load groups', loading: true });
        window.location.href = "/groups"
    },
    getGroups: async () => {
        set({ group_loading: true, error: null });
        try {
            const response = await axios.get(`${BASE_URL}/groups/fetch`);
            set(() => ({ groups: response.data, group_loading: false }));
            return true;
        } catch (error: any) {
            set({ error: error.response?.data || 'Failed to load groups', loading: false });
            return false;
        }
    },
});

export { createGroupSlice };
export type { GroupSlice };
