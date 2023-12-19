import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
import { eliminationMaps } from './eliminationMaps.js';

const MapsElimination = () => {


    return (
        <>
        {/* Hearder */}
        <div className='bg-cover bg-center bg-BGMaps h-[660px]'>
            <div className="ml-32 pt-72">
            {/* <h1 className='text-white text-[50px] font-semibold '>HEROES</h1> */}
            </div>
        </div>
            {/* roles */}
            <div className='bg-[#DDF2FD]'>
                <div className='flex flex-col items-center pt-10'>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-row items-center gap-10'> 
                            <Link to = "/MapsAssault">
                                <div className='flex flex-row justify-center bg-black h-[40px] w-[180px] font-semibold'>
                                    <img src="https://overfast-api.tekrop.fr/static/gamemodes/assault-icon.svg" className="" alt="" width="40px" />
                                    <h1 className='text-[22px] pt-1 pl-2 text-white'>Assault</h1>
                                </div>
                            </Link>
                            <Link to ="/MapsCapture">
                                <div className='flex flex-row justify-center bg-black h-[40px] w-[180px] font-semibold'>
                                    <img src={CaptureFlag} className="" alt="" width="40px" />
                                    <h1 className='text-[22px] pt-1 pl-2 text-white'>CaptureFlag</h1>
                                </div>
                            </Link>
                            <Link to ="/MapsControl">
                                <div className='flex flex-row justify-center bg-black h-[40px] w-[180px] font-semibold'>
                                    <img src={Control} className="" alt="" width="40px" />
                                    <h1 className='text-[22px] pt-1 pl-2 text-white'>Control</h1>
                                </div>
                            </Link>
                            <Link to ="/MapsDeathmatch">
                                <div className='flex flex-row justify-center bg-black h-[40px] w-[180px] font-semibold'>
                                    <img src={Deathmatch} className="" alt="" width="40px" />
                                    <h1 className='text-[22px] pt-1 pl-2 text-white'>Deathmatch</h1>
                                </div>
                            </Link>
                            <Link to ="/MapsElimination">
                                <div className='flex flex-row justify-center bg-black h-[40px] w-[180px] font-semibold'>
                                    <img src={Elimination} className="" alt="" width="40px" />
                                    <h1 className='text-[22px] pt-1 pl-2 text-white'>Elimination</h1>
                                </div>
                            </Link>
                            </div>
                        
                        <div className='flex flex-row items-center gap-10'>
                            <Link to ="/MapsEscort">
                                <div className='flex flex-row justify-center bg-black h-[40px] w-[180px] font-semibold'>
                                    <img src={Escort} className="" alt="" width="40px" />
                                    <h1 className='text-[22px] pt-1 pl-2 text-white'>Escort</h1>
                                </div>
                            </Link>
                            <Link to ="/MapsFlashpoint">
                                <div className='flex flex-row justify-center bg-black h-[40px] w-[180px] font-semibold'>
                                    <img src={Flashpoint} className="" alt="" width="40px" />
                                    <h1 className='text-[22px] pt-1 pl-2 text-white'>Flashpoint</h1>
                                </div>
                            </Link>
                            <Link to ="/MapsHybrid">
                                <div className='flex flex-row justify-center bg-black h-[40px] w-[180px] font-semibold'>
                                    <img src={Hybrid} className="" alt="" width="40px" />
                                    <h1 className='text-[22px] pt-1 pl-2 text-white'>Hybrid</h1>
                                </div>
                            </Link>
                            <Link to ="/MapsPush">
                                <div className='flex flex-row justify-center bg-black h-[40px] w-[180px] font-semibold'>
                                    <img src={Push} className="" alt="" width="40px" />
                                    <h1 className='text-[22px] pt-1 pl-2 text-white'>Push</h1>
                                </div>
                            </Link>
                            <Link to ="/MapsTeamDeathMatch">
                                <div className='flex flex-row justify-center bg-black h-[40px] w-[240px] font-semibold'>
                                    <img src={TeamDeathMatch} className="" alt="" width="40px" />
                                    <h1 className='text-[22px] pt-1 pl-2 text-white'>TeamDeathMatch</h1>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='pt-4'>
                        <h4 className='flex justify-center text-center text-[18px]'>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Travel the world and fight for the future in diverse locations around the globe. From the technological marvels of Busan to the snow-dusted streets of Toronto, every map has objectives to accomplish, secrets to uncover, and strategies to explore.</h4>
                    </div>
                </div>
            </div>
                
            {/* Render maps data */}
            <div className='flex justify-center items-center bg-[#DDF2FD]'>
                <div className='grid grid-cols-4  gap-14 p-10'>
                    { eliminationMaps.map((map, index) => ( 
                        <div key={index} className='bg-white h-[220px] w-[180px] rounded-none text-center border-4 border-white hover:scale-110 transition duration-50 hover:shadow-2xl'>
                            <Link to={`/Maps/${map.name.toLowerCase()}`}>
                                <img src={map.screenshot} className="flex justify-center items-center bg-black" alt={map.name} width="180px" />
                                <h1 className='flex justify-center items-center pt-2 text-[18px] font-medium'>{map.name}</h1>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default MapsElimination