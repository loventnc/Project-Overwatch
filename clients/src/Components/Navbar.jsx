import React from "react";
import Logo from "../image/Logo.png";
import {BiUser} from 'react-icons/bi';
import {AiOutlineSearch} from 'react-icons/ai';
import {AiOutlineDown} from 'react-icons/ai';
import { MapsDropdown } from "./MapsDropdown";

import { NavLink } from "react-router-dom";
// import { navitems } from "./Navitems";
// import { DropdowmMenu } from "./DropdowmMen";

function Navbar(){
    // const [dropdown, setDropdown] = useState(false);
    
    return (
    <>
    <div className="bg-[#DDF2FD] h-[70px] pt-2">
        {/* Head */}
        <div className="flex space-x-4 justify-between items-center h-[50px] bg-white text-black container mx-auto px-[5px] rounded-lg ">
            <div className="flex items-center">
                    <img src={Logo} className="mx-5" alt="" width="50px" />
                    <ul className="flex justify-between gap-14 text-[18px] rounded-full">
                        <li className="hover:bg-[#ece9e9] hover:rounded-md p-1" >
                            <NavLink to ="">Overview</NavLink>
                        </li>
                        <div className="dropdown dropdown-hover">
                            <div className="flex flex-row">
                                <label tabIndex={0} className="p-1">Heroes</label>
                                <p className="pt-3.5 ml-1 text-xs"><AiOutlineDown/></p>
                            </div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-1 shadow bg-base-100 rounded-box w-52">
                                <li><a>All</a></li>
                                <li><a>Tank</a></li>
                                <li><a>Damage</a></li>
                                <li><a>Support</a></li>
                            </ul>
                        </div>
                        <div className="dropdown dropdown-hover">
                            <div className="flex flex-row">
                                <label tabIndex={0} className="p-1">Maps</label>
                                <p className="pt-3.5 ml-1 text-xs"><AiOutlineDown/></p>
                            </div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-1 shadow bg-base-100 rounded-box w-52">
                                <li><a>All</a></li>
                                <li><a>CaptureFlag</a></li>
                                <li><a>Control</a></li>
                                <li><a>Deathmatch</a></li>
                                <li><a>Elimination</a></li>
                                <li><a>Escort</a></li>
                                <li><a>Flashpoint</a></li>
                                <li><a>Hybrid</a></li>
                                <li><a>Push</a></li>
                                <li><a>TeamDeathMatch</a></li>
                                {/* {MapsDropdown .map((MapDropdown, index) => {
                                    return(
                                        <>
                                        <li >{MapDropdown.title}</li>
                                        </>
                                    )
                                })} */}
                            </ul>
                        </div>
                        <div className="dropdown dropdown-hover">
                            <div className="flex flex-row">
                                <label tabIndex={0} className="p-1">
                                    <NavLink to="Community">Community</NavLink>
                                </label>
                            </div>
                        </div>
                    </ul>
            </div>
            <div className="flex items-center">
                    <ul className="flex justify-between gap-14 text-[18px] rounded-full">
                    <p className="mt-1 hover:bg-[#ece9e9] hover:rounded-md p-1"><AiOutlineSearch/></p>
                    <div className="dropdown dropdown-hover">
                        <div className="flex flex-row">
                            <label tabIndex={0} className="p-1">Account</label>
                            <p className="pt-3.5 ml-1 text-xs"><AiOutlineDown/></p>
                        </div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-1 shadow bg-base-100 rounded-box w-52">
                            <li className="bg-[#218FFE] h-[33px] w-[100px] rounded-md text-white text-center"><a><NavLink to="Login">Log in</NavLink></a></li>
                            <li className=""><a>Account Setting</a></li>
                            <li>
                                <NavLink to="Signup">Sign Up</NavLink>
                            </li>
                        </ul>
                    </div>
                    <li className="bg-[#FF9737] h-[33px] w-[100px] rounded-md text-white text-center hover:bg-[#ff7a37] hover:rounded-md p-1">
                    <NavLink to='https://download.battle.net/en-us?product=ow&blzcmp=ow_gamesite'>Play Now</NavLink>
                    </li>
                    </ul>
            </div>
        </div>
    </div>

    </>
    )
}

export default Navbar