import { Link } from 'react-router-dom'
import HeadHero from "../src/image/HeadHero.png";
import BgOverviews from "../src/image/BgOverviews.jpg";
import Assault from "../src/image/Assault.jpg";
import CaptureFlag from "../src/image/CaptureFlag.png";
import Control from "../src/image/Control.png";
import Deathmatch from "../src/image/Deathmatch.png";
import Elimination from "../src/image/Elimination.png";
import Escort from "../src/image/Escort.png";
import Flashpoint from "../src/image/Flashpoint.png";
import Hybrid from "../src/image/Hybrid.png";
import Push from "../src/image/Push.png";
import TeamDeathMatch from "../src/image/TeamDeathMatch.png";
import HeoresMenu from "../src/image/HeoresMenu.jpg";
import MapMenu from "../src/image/MapMenu.jpg";
import CaptureFlagPIC from "../src/image/CaptureFlagPIC.jpg";
import ControlPIC from "../src/image/ControlPIC.jpg";
import DeathmatchPIC from "../src/image/DeathmatchPIC.jpg";
import EliminationPIC from "../src/image/EliminationPIC.jpg";
import EscortPIC from "../src/image/EscortPIC.jpg";
import FlashpointPIC from "../src/image/FlashpointPIC.jpg";
import HybridPIC from "../src/image/HybridPIC.jpg";
import PushPIC from "../src/image/PushPIC.jpg";
import TeamDeathMatchPIC from "../src/image/TeamDeathMatchPIC.jpg";
import { SlArrowLeft } from "react-icons/sl";
import './Overview.css'



const Overview = () => {

  
  return (
    <>
    {/* Hearder */}
    <div className="bg-cover bg-center bg-BgOverviews backdrop-blur-md bg-white bg-opacity-30 h-[660px]">
      <div className="grid grid-cols-2">
        <div className="mt-28">
          <h1 className="ml-36 ">
          <span className="text-black text-[50px] font-bold " >OVERWATCH 2 WIKI </span>
          <span className="text-[18px] "> <br></br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Overwatch 2 is a free-to-play, team-based action game set in the optimistic future, where every match is the ultimate 5v5 battlefield brawl. Play as a time-jumping freedom fighter, a beat-dropping battlefield DJ, or one of over 30 other unique heroes as you battle it out around the globe. Enjoy high-octane conflict with a fresh lineup of heroes, more maps to explore, and 5v5 combat that gives every player game-changing power.</span>
          </h1>
          <p className="italic font-bold text-center bg-[#FF9737] h-[31px] w-[200px] rounded-md text-white mt-10 ml-28 hover:bg-[#ff7a37] hover:rounded-md p-1">  JOIN OUR COMMUNITY</p>
        </div>
        <div className="mt-20">
          <img src={HeadHero} className="hover:scale-110 transition duration-50" alt="" width="800px" />
        </div>
      </div>
    </div>


    {/* Heroes/Map */}
    <div className=' bg-[#DDF2FD] grid grid-cols-2 '>
      <div className='hover:scale-110 transition duration-50 hover:shadow-2xl'><img src={HeoresMenu} className="" alt=""  /></div>
      <div className='hover:scale-110 transition duration-50 hover:shadow-2xl'><img src={MapMenu} className="" alt=""  /></div>
    </div>

    {/* GAME MODES */}
    <div className="bg-[#DDF2FD] pt-10">
      <div className='flex flex-col justify-center items-center '>
        <h1 className='text-[40px] font-semibold'>GAME MODES</h1>
        <h2 className="text-[18px] w-2/3 ">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Travel the world and fight for the future in diverse locations around the globe. From the technological marvels of Busan to the snow-dusted streets of Toronto, every map has objectives to accomplish, secrets to uncover, and strategies to explore.</h2>
      </div>

      {/* icons */}
      <div className='flex flex-row justify-center gap-10 pt-5'>
        <div className='flex flex-col justify-center' width="50px">
          <div className='flex justify-center'>
            <img src="https://overfast-api.tekrop.fr/static/gamemodes/assault-icon.svg" className="bg-neutral-300 rounded-full w-[40px]"  alt=""  />
          </div>
          <span className=''>Assault</span>
        </div>
        <div className='flex flex-col justify-center' width="50px">
          <div className='flex justify-center'>
            <img src={CaptureFlag} className="bg-neutral-300 rounded-full" alt="" />
          </div>
          <span className=''>CaptureFlag</span>
        </div>
        <div className='flex flex-col justify-center' width="50px">
          <div className='flex justify-center'>
            <img src={Control} className="bg-neutral-300 rounded-full" alt=""  />
          </div>
          <span>Control</span>
        </div>
        <div className='flex flex-col justify-center' width="50px">
          <div className='flex justify-center'>
            <img src={Deathmatch} className="bg-neutral-300 rounded-full" alt="" />
          </div>
          <span>Deathmatch</span>
        </div>
        <div className='flex flex-col justify-center' width="50px">
          <div className='flex justify-center'>
            <img src={Elimination} className="bg-neutral-300 rounded-full" alt="" />
          </div>
          <span>Elimination</span>
        </div>
        <div className='flex flex-col justify-center' width="50px">
          <div className='flex justify-center'>
            <img src={Escort} className="bg-neutral-300 rounded-full" alt="" />
          </div>
          <span>Escort</span>
        </div>
        <div className='flex flex-col justify-center' width="50px">
          <div className='flex justify-center'>
            <img src={Flashpoint} className="bg-neutral-300 rounded-full" alt="" />
          </div>
          <span>Flashpoint</span>
        </div>
        <div className='flex flex-col justify-center' width="50px">
          <div className='flex justify-center'>
            <img src={Hybrid} className="bg-neutral-300 rounded-full" alt="" />
          </div>
          <span>Hybridg</span>
        </div>
        <div className='flex flex-col justify-center' width="50px">
          <div className='flex justify-center'>
            <img src={Push} className="bg-neutral-300 rounded-full" alt="" />
          </div>  
          <span>Push</span>
        </div>
        <div className='flex flex-col justify-center' width="50px">
          <div className='flex justify-center'>
            <img src={TeamDeathMatch} className="bg-neutral-300 rounded-full" alt="" />
          </div>
          <span>TeamDeathMatch</span>
        </div>
      </div>
    {/* pictures */}
    {/* <div className='flex justify-center mt-10' >
      <img src={CaptureFlagPIC} className="" alt="" width="800px" />
    </div>
    <SlArrowLeft /> */}
    </div>
    
    {/* function pictures() {
      return (<div>
        <Carousel />
      </div>
      );
    } */}

    {/* pictures slide */}
    <div className='bg-[#DDF2FD] pt-10'>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={CaptureFlagPIC} className="mx-auto" width="700px" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide10" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src={ControlPIC} className="mx-auto" width="700px"/>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src={DeathmatchPIC} className="mx-auto" width="700px" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
        <img src={EliminationPIC} className="mx-auto" width="700px"/>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide5" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
        <img src={EscortPIC} className="mx-auto" width="700px"/>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide6" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
        <img src={FlashpointPIC} className="mx-auto" width="700px"/>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide5" className="btn btn-circle">❮</a> 
            <a href="#slide7" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide7" className="carousel-item relative w-full">
        <img src={HybridPIC} className="mx-auto" width="700px"/>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide6" className="btn btn-circle">❮</a> 
            <a href="#slide8" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide8" className="carousel-item relative w-full">
        <img src={PushPIC} className="mx-auto" width="700px"/>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide7" className="btn btn-circle">❮</a> 
            <a href="#slide9" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide9" className="carousel-item relative w-full">
        <img src={TeamDeathMatchPIC} className="mx-auto" width="700px"/>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide8" className="btn btn-circle">❮</a> 
            <a href="#slide10" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide10" className="carousel-item relative w-full">
        <img src={Assault} className="mx-auto" width="700px"/>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide9" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default Overview