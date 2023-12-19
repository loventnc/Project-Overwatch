import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Overview from './Overview'
import Heroes from './Heroes'
import Maps from './Maps'
import MapsDetail from './MapsDetail'
import HeroesTank from './HeroesTank'
import HeroesDamage from './HeroesDamage'
import HeroesSupport from './HeroesSupport'
import Community from './Community'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import CreatePost from './pages/CreatePost'
import { UserContextProvider } from './contexts/UserContext';


import Character from './character'
import MapAssault from './MapsAssault'
import MapsCapture  from './MapsCapture'
import MapsControl from './MapsControl'

import {Routes, Route} from 'react-router-dom'
import Followus from './Components/Followus'
import PostPage from './pages/PostPage'
import EditPost from './pages/EditPost'

// import DropdownMenu from "./DropdownMenu";

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/Heroes" element={<Heroes />} />
          <Route path="/Maps" element={<Maps />} />
          <Route path='/HeroesTank' element={<HeroesTank />} />
          <Route path='/HeroesDamage' element={<HeroesDamage />} />
          <Route path='/HeroesSupport' element={<HeroesSupport />} />
          <Route path="/Maps/:detail" element={<MapsDetail />} />
          <Route path='/Heroes/:name' element={<Character />} />
          <Route path='/MapsAssault' element={<MapAssault />} />
          <Route path='/MapsCapture' element={<MapsCapture />} />
          <Route path='/MapsControl' element={<MapsControl />} />
          <Route path='/Community/*' element={<Community />} />
          <Route path="/Community/Login" element={<LoginPage />} />
          <Route path="/Community/Register" element={<RegisterPage />} />
          <Route path="/Community/Create" element={<CreatePost />} />
          <Route path="/Community/Posts/:id" element={<PostPage />} />
          <Route path="/Community/Edit/:id" element={<EditPost />} />
        </Routes>
        <Followus />
      </>
    </UserContextProvider>
    
  ) 
}

export default App