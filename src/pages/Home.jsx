import React, { useEffect, useState } from "react";
import { Button, Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Home() {
  const posts = useSelector((state) => state.post.posts);
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/all-posts');
  };
  // const [posts, setPosts] = useState([])

  // useEffect(() => {
  //     appwriteService.getPosts([]).then((posts) => {
  //         if (posts) {
  //             setPosts(posts.documents)
  //         }
  //     })
  // }, [])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full py-8 mt-4 text-center">
        <div className="container mx-auto">
          <div className="flex flex-col items-center">
            <h1 className="text-9xl text-white mb-8">
              Create blogs without limits
            </h1>
            <h2 className="text-2xl text-white mb-8">
              Write and read with confidence. To keep growing, learn to share
              your thoughts, helping others to build new perspectives.
            </h2>
            <button
              className="bg-white text-black hover:bg-blue-500 hover:text-white py-2 px-4 rounded"
              onClick={handleGetStartedClick}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // return (
  //     <div className='w-full py-8'>
  //         <Container>
  //             <div className='flex flex-wrap'>
  //                 {posts.map((post) => (
  //                     <div key={post.$id} className='p-2 w-1/4'>
  //                         <PostCard {...post} />
  //                     </div>
  //                 ))}
  //             </div>
  //         </Container>
  //     </div>
  // )
}

export default Home;
