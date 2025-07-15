import API, { BASE_URL } from "@/constant/base";
import axios from "axios";

import { StateCreator } from "zustand";

interface PostSlice {
    posts: any[];
    loading: boolean;
    errors: null;
    message: null,
    addPost: (data: any) => Promise<void>;
    setPost: (posts: any[]) => void;
    getPosts: () => Promise<any>;
}

const createPostSlice: StateCreator<PostSlice> = (set: any) => ({
    posts: [],
    message: null,
    loading: false,
    errors: null,
    addPost: async (data: any) => {
        try {
            const response = await axios.post(`${BASE_URL}/posts/create`, { ...data },
                {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
                        'Content-Type': 'application/json',
                    },
                }
            );
            set(() => ({ posts: response.data }))
            window.location.href = '/';
        } catch (err: any) {
            const errorData = err.response?.data?.errors;
            const errorMessage = typeof errorData === 'object'
                ? Object.values(errorData).flat().join(', ')
                : 'Groups failed.';
            set({ type: 'error', message: errorMessage });
        }
    },
    removePost: (id: number) => set((state: any) => ({
        posts: state.posts.filter((post: any) => post.id !== id)
    })),
    setPost: (posts: any[]) => set({ posts }),
    getPosts: async () => {
        set({ loading: true, error: null })
        try {
            const response = await axios.get(`${BASE_URL}/posts`);
            set(() => ({ posts: response.data, loading: false }));
            return true;
        } catch (errors: any) {
            set({ loading: true, error: null })
            return false;
        }
    },
})

export { createPostSlice };
export type { PostSlice };