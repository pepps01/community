import { BASE_URL } from "@/constant/base";
import axios from "axios";
import { StateCreator } from "zustand";

interface GroupSlice {
    group: number;
    addGroup: () => Promise<void>;
    removeGroup: () => void;
    resetGroup: () => void;
    setGroup: (group: number) => void;
    getGroup: () => Promise<void>;
}

const createGroupSlice: StateCreator<GroupSlice> = (set: any) => ({
    group: 0,
    addGroup: async () => {
        await axios.post(`${BASE_URL}/api/groups`, { /* group data */ });
        set((state: any) => ({
            group: state.group + 1
        }));
    },
    removeGroup: () => set((state: any) => ({ group: state.group - 1 })),
    resetGroup: () => set({ group: 0 }),
    setGroup: (group: number) => set({ group }),
    getGroup: async () => {
        const response = await axios.get(`${BASE_URL}/api/groups`);
        set((state: any) => ({
            group: response.data.group
        }));
    },
});

export { createGroupSlice };
export type { GroupSlice };
