import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import Overview from './Overview';
import Heroes from './Heroes';
import Signup from './Signup';
import Login from './Login';
import Maps from './Maps';

import {Routes, Route} from 'react-router-dom'
import Followus from './Components/Followus'
// import DropdownMenu from "./DropdownMenu";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/Heroes" element={<Heroes />} />
        <Route path="/Maps" element={<Maps />} />
        <Route path='/Signup' element={<Signup />}></Route>
        <Route path='/Login' element={<Login />}></Route>
      </Routes>
      <Followus />
    </>
  )
}

export default App