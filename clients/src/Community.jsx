import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Post from './Components/Post';
import Navbar from './Components/Navbar';
import { useEffect, useState } from 'react';



const Community = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/community/posts').then(response => {
      response.json().then(posts => {
        setPosts(posts)
      })
    })
  },[])
  return (
    <div className='p-8 bg-[#DDF2FD] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8'>
      {posts.length > 0 && posts.map(post => (
        <Post key={post.id} {...post} />
      ))}
    </div>

  );
};

export default Community;
