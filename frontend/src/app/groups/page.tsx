'use client'
import GroupCreate from '@/components/GroupCreate'
import Navbar from '@/components/Navbar'
import React, { useEffect } from 'react'
import { useStore } from '../../../store';
import Button from '@/components/Button';

const Group: React.FC = () => {
    const { groups, getGroups, group_loading } = useStore()

    useEffect(() => {
        getGroups()
        console.log("GETTING Groups FROM THE APPLICATION", groups)
    }, [])


    if (group_loading) return <p>loading posts</p>
    console.log("groups", groups.length)
    return (
        <div>
            <Navbar />
            {/* <GroupCreate /> */}
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