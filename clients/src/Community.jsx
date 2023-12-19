import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Post from './Components/Post';
import Navbar from './Components/Navbar';
import { useEffect, useState } from 'react';



const Community = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/posts').then(response => {
      response.json().then(posts => {
        setPosts(posts)
      })
    })
  },[])
  return (
    <div>
      {posts.length > 0 && posts.map(post => (
        <Post {...post}/>
      ))}
        
    </div>
  );
};

export default Community;
