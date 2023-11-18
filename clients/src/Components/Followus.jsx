import React from "react";
import { RiFacebookCircleFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { RiYoutubeFill } from "react-icons/ri";
import { NavLink, Link } from "react-router-dom";
import blizzard from "../image/blizzard.png";

function Followus() {
    return (
        <>
            <footer className='bg-[#43484C] flex justify-center'>
                <div className="">
                    <h1 className='font-medium text-[20px] text-center text-white'>FOLLOW US</h1>
                    <div className='flex flex-row justify-center text-white text-[30px] pt-2 gap-5'>
                        <Link to="https://www.facebook.com/OverwatchSEA/?brand_redir=292929874198161">
                            <RiFacebookCircleFill />
                        </Link>
                        <Link to='https://www.instagram.com/playoverwatch/'>
                            <RiInstagramFill />
                        </Link>
                        <Link to='https://www.youtube.com/PlayOverwatch'>
                            <RiYoutubeFill />
                        </Link>
                    </div>
                    <Link to='https://www.blizzard.com/en-us/'>
                        <img src={blizzard} className="" alt="" width="80px" />
                    </Link>
                </div>
            </footer>
        </>
    )
}

export default Followus