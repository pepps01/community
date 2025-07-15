'use client';
import Button from "@/components/Button";
import { useStore } from "../../store";
import List from "../components/List";
import Navbar from "../components/Navbar";
import PostCreate from "../components/PostCreate";
import { useEffect } from "react";

const Home: React.FC = () => {
  const { posts, getPosts, loading } = useStore()
  // const posts = useStore((state: any) => state.posts);

  useEffect(() => {
    getPosts()
  }, [])

  if (loading) return <p>loading posts</p>
  console.log("posts counts", posts)

  return (
    <div className="">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 w-600s">
        {posts.length === 0 ? (
          <div className="text-gray-500 text-lg flex flex-col items-center justify-center">
            No posts available. Please create a post.
            <Button
              title="Create Post"
              type="button"
            />
          </div>
        ) : (
          posts.map((post: any) => (
            <div key={post.id} className="bg-white shadow-md rounded-lg p-4 m-2 ">
              <h2 className="text-xl font-bold">{post.title}</h2>
              <p className="text-gray-600">{post.content}</p>
            </div>
          ))
        )}

      </div>

    </div>
  );
}
export default Home;