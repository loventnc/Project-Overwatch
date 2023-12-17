import React from "react";
import { Outlet, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Home, Login, Profile, Register, ResetPassword } from "./Pages";
import { useSelector } from "react-redux";

function Layout() {
    const {user} = useSelector(state=> state.user);
    const location = useLocation();
    return user?.token? (
        <Outlet />
    ) : (
        <Navigate to='/Login' state= {{from: location}} replace />
    );
}

function Community() {
    return (
      <div className="w-full min-h-[100vh]">
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Route index element={<Home />} />
                <Route path="profile/:id" element={<Profile />} />
              </Layout>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </div>
    );
  }
  
  export default Community;