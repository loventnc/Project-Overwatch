import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Overview from './Overview'
import Heroes from './Heroes'
import Signup from './Signup'
import Login from './Login'
import Maps from './Maps'
import HeroesTank from './HeroesTank'

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
        <Route path='/HeroesTank' element={<HeroesTank />} />
      </Routes>
      <Followus />
    </>
  )
}

export default App