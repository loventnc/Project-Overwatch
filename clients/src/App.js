// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { store } from './redux/store';
// import { useState } from 'react';
// import './App.css';
// import Navbar from './Components/Navbar'
// import Overview from './Overview';
// import Heroes from './Heroes';
// import Maps from './Maps';
// import Community from './Community';


// import {Routes, Route} from 'react-router-dom'
// import Followus from './Components/Followus'
// // import DropdownMenu from "./DropdownMenu";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <BrowserRouter>
//         <Community />
//       </BrowserRouter>
//     </Provider>
//   </React.StrictMode>,
// );


// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //       <Navbar />
// //       <Routes>
// //         <Route path="/" element={<Overview />} />
// //         <Route path="/Heroes" element={<Heroes />} />
// //         <Route path="/Maps" element={<Maps />} />

// //       </Routes>
// //       <Followus />
// //     </>
// //   )
// // }

// export default App

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

function App() {
    return (
      <div className="w-full min-h-[100vh]">
        <Routes>
          <Route element={<Layout />}>
                <Route path='/' element={<Home />} />
                <Route path='profile/:id' element={<Profile />} />
          </Route>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/reset-password' element={<ResetPassword />} />
        </Routes>
      </div>
    );
  }
  
  export default App;