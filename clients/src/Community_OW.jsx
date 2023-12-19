import React, { useEffect, useState } from 'react';
import Post from './Components/Post';

const Community_OW = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/community/posts').then(response => {
      response.json().then(posts => {
        setPosts(posts)
      })
    })
  }, []);

  // Slice the array to show only the first 3 posts
  const limitedPosts = posts.slice(0, 3);

  return (
    <div className="flex border-gray-300 justify-center items-center">
      <div className='p-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8'>
          {limitedPosts.length > 0 && limitedPosts.map(post => (
            <Post key={post.id} {...post} />
          ))}
        </div>
      </div>


    </div>

  );
};

export default Community_OW;
