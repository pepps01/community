import { createGroupSlice, GroupSlice } from '@/slices/GroupSlice'
import { createPostSlice, PostSlice } from '@/slices/PostSlice'
import { createUserSlice, UserSlice } from '@/slices/UserSlice'
import { create, StateCreator } from 'zustand'
import { persist } from 'zustand/middleware'

type StoreState = GroupSlice & PostSlice & UserSlice

type MyStateCreator = StateCreator<
    StoreState,
    [],
    [['zustand/persist', StoreState]],
    StoreState
>

export const useStore = create<StoreState>()(
    persist(
        ((set, get, store) => ({
            ...createUserSlice(set, get, store),
            ...createPostSlice(set, get, store),
            ...createGroupSlice(set, get, store),
        })) as MyStateCreator,
        {
            name: 'community-storage', // unique name for the storage
            storage: {
                getItem: (name) => {
                    const item = localStorage.getItem(name)
                    return item ? JSON.parse(item) : null
                },
                setItem: (name, value) => localStorage.setItem(name, JSON.stringify(value)),
                removeItem: (name) => localStorage.removeItem(name),
            }, // use localStorage as the storage
        }
    )
)