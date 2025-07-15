'use client'
import GroupCreate from '@/components/GroupCreate'
import Navbar from '@/components/Navbar'
import React, { useEffect } from 'react'
import { useStore } from '../../../store';
import Button from '@/components/Button';
import Link from 'next/link';

const Group: React.FC = () => {
    const { groups, getGroups, group_loading } = useStore()

    useEffect(() => {
        getGroups()
    }, [])

    if (group_loading) return <p>loading posts</p>
    console.log("groups", groups.length)
    return (
        <div>
            <Navbar />
            <div className="flex flex-row justify-end items-center w-full">
                <Link href={"/group/create"} className="bg-gray-800 hover:bg-blue-700 text-center text-white font-bold py-3 px-4 rounded my-2 cursor-pointer w-[200px]">Create Group</Link>
            </div>
            <div>
                {groups.length === 0 ? (
                    <div className="text-gray-500 text-lg flex flex-col items-center justify-center">
                        No posts available. Please create a post.
                        <Button
                            title="Create Post"
                            type="button"
                        />
                    </div>
                ) : (
                    groups.map((group: any) => (
                        <div key={group.id} className="bg-white shadow-md rounded-lg p-4 m-2">
                            <h2 className="text-xl font-bold">{group.name}</h2>
                            <p className="text-gray-600">{group.description}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default Group