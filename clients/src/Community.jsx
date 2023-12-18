import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Post from './Components/Post';
import Navbar from './Components/Navbar';

const Community = () => {
  return (
    <div>
      <Routes>
        
        <Route
          index
          element={
            <div className="flex justify-center">
              <Post />
              <Post />
              <Post />

            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default Community;
