import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Overview from './Overview'
import Heroes from './Heroes'
import Signup from './Signup'
import Login from './Login'

import {Routes, Route, useNavigate} from 'react-router-dom'
import Followus from './Components/Followus'
// import DropdownMenu from "./DropdownMenu";

function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()

  //ซ่อน Navbar กับ Footer หน้าล็อคอิน
  const NoNav_Foot = ['/Signup', '/Login']


  const Hidenav = NoNav_Foot.includes(
    window.location.pathname
  )

  if (!Hidenav) {
    navigate('/')
  }

  return (
    <>
      {!Hidenav && <Navbar />}
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/" element={<Heroes />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
      {!Hidenav && <Followus />}
    </>
  )
}

export default App