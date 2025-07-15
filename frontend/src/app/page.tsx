'use client';
import Button from "@/components/Button";
import { useStore } from "../../store";
import List from "../components/List";
import Navbar from "../components/Navbar";
import PostCreate from "../components/PostCreate";
import { useEffect } from "react";
import Link from "next/link";

const Home: React.FC = () => {
  const { posts, getPosts, loading } = useStore()

  useEffect(() => {
    getPosts()
  }, [])

  if (loading) return <p>loading posts</p>
  return (
    <div>
      <Navbar />
      <div className="w-[1000px] mx-auto">
        <div className="flex flex-row justify-end items-center w-full">
          <Link href={"/posts"} className="bg-gray-800 hover:bg-blue-700 text-center text-white font-bold py-3 px-4 rounded my-2 cursor-pointer w-[200px]">Create Post</Link>
        </div>
        <div className="flex flex-col items-left justify-start min-h-screen">
          {posts.length === 0 ? (
            <div className="text-gray-500 text-lg flex flex-col items-center justify-center">
              No posts available. Please create a post.
              <Button title="Create Post" type="button" />
            </div>
          ) : (
            posts.map((post: any) => (
              <div key={post.id} className="bg-white shadow-md  p-4 m-2 ">
                <h2 className="text-xl font-bold">{post.title}</h2>
                <p className="text-gray-600">{post.content}</p>
              </div>
            ))
          )}

        </div>
      </div>

    </div>
  );
}
export default Home;