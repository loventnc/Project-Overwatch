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
import MapsDetail from './MapsDetail'
import HeroesTank from './HeroesTank'
import HeroesDamage from './HeroesDamage'
import HeroesSupport from './HeroesSupport'
import Character from './character'
import MapAssault from './MapsAssault'
import MapsCapture  from './MapsCapture'
import MapsControl from './MapsControl'

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
        <Route path="/Maps/:detail" element={<MapsDetail />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Login' element={<Login />}/>
        <Route path='/HeroesTank' element={<HeroesTank />} />
        <Route path='/HeroesDamage' element={<HeroesDamage />} />
        <Route path='/heroesSupport' element={<HeroesSupport />} />
        <Route path='/Heroes/:name' element={<Character />} />
        <Route path='/MapsAssault' element={<MapAssault />} />
        <Route path='/MapsCapture' element={<MapsCapture />} />
        <Route path='/MapsControl' element={<MapsControl />} />
      </Routes>
      <Followus />
    </>
  )
}

export default App