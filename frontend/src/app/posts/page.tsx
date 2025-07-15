'use client'
import Navbar from '@/components/Navbar'
import PostCreate from '@/components/PostCreate'
import React, { useEffect } from 'react'
import { useStore } from '../../../store'

const Post: React.FC = () => {
    const { getPosts, posts, group_loading } = useStore()
    useEffect(() => {
        getPosts()
        console.log("groups fetching,,,", posts)
    }, [])

    // const posts = getPost()
    return (
        <div>
            <Navbar />
            <div className='flex flex-row justify-start'>
                <PostCreate />
            </div>
        </div>
    )
}
export default Post 