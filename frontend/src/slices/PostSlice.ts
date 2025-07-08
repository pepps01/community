import { BASE_URL } from "@/constant/base";
import axios from "axios";
import { StateCreator } from "zustand";

interface PostSlice {
    posts: number;
    addPost: (name: string) => Promise<void>;
    removePost: () => void;
    resetPost: () => void;
    setPost: (posts: number) => void;
    getPost: () => Promise<void>;
}

const createPostSlice: StateCreator<PostSlice> = (set: any) => ({
    posts: 0,
    addPost: async (name: string) => {
        console.log('Adding post:', name);
        await axios.post(`${BASE_URL}/api/posts`, { /* post data */ });
        set((state: any) => ({
            posts: state.posts + 1
        }));
    },
    removePost: () => set((state: any) => ({ posts: state.posts - 1 })),
    resetPost: () => set({ posts: 0 }),
    setPost: (posts: number) => set({ posts }),
    getPost: async () => {
        const response = await axios.get(`${BASE_URL}/api/posts`);
        set((state: any) => ({
            posts: response.data.posts
        }));
    },
})

export { createPostSlice };
export type { PostSlice };