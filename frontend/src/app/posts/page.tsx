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
            <div>Post</div>
            <div className='flex justify-center w-[400px]'>
                <PostCreate />

                <div>
                    {posts.length === 0 ? (
                        <div>Sorry</div>
                    ) : (
                        posts.map((post: any) => (
                            <div className='' key={post.id}>
                                <h2>{post?.title}</h2>
                                <p>{post?.content}</p>
                            </div>
                        ))
                    )}
                </div>
            </div>

        </div>
    )
}

export default Post 