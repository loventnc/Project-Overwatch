import React from "react";
import Logo from "../image/Logo.png";
import drop from "../image/drop.png";
import {BiUser} from 'react-icons/bi';
import {AiOutlineSearch} from 'react-icons/ai';
import {AiOutlineDown} from 'react-icons/ai';

import { NavLink } from "react-router-dom";

function Navbar(){
    return (
    <><div className="bg-[#DDF2FD] h-[70px] pt-2">
        <div className="flex space-x-4 justify-between items-center h-[50px] bg-white text-black container mx-auto px-[5px] rounded-lg ">
            <div className="flex items-center">
                    <img src={Logo} className="mx-5" alt="" width="50px" />
                    <ul className="flex justify-between gap-14 text-[18px] rounded-full">
                    <li className="hover:bg-[#ece9e9] hover:rounded-md p-1" >
                        <NavLink to ="">Overview</NavLink>
                    </li>
                    <li className="flex colum hover:bg-[#ece9e9] hover:rounded-md p-1">
                        <NavLink to ="Heroes">Heroes</NavLink>
                        <p className="pt-2.5 ml-1 text-xs"><AiOutlineDown/></p>
                    </li>
                    <li className="flex colum hover:bg-[#ece9e9] hover:rounded-md p-1">
                        <>Maps</>
                        <p className="pt-2.5 ml-1 text-xs"><AiOutlineDown/></p>
                    </li>
                    <li className="flex colum hover:bg-[#ece9e9] hover:rounded-md p-1">
                        <>Community</>
                        <p className="pt-2.5 ml-1 text-xs"><AiOutlineDown/></p>
                    </li>
                    </ul>
            </div>
            <div className="flex items-center">
                    <ul className="flex justify-between gap-14 text-[18px] rounded-full">
                    <p className="mt-1 hover:bg-[#ece9e9] hover:rounded-md p-1"><AiOutlineSearch/></p>
                    <li className="flex colum hover:bg-[#ece9e9] hover:rounded-md p-1">
                        <p className="pt-1 mx-2"><BiUser/></p>
                        <>Account</>
                        <p className="pt-2.5 ml-1 text-xs"><AiOutlineDown/></p>
                    </li>
                    <li className="bg-[#FF9737] h-[33px] w-[100px] rounded-md text-white text-center hover:bg-[#ff7a37] hover:rounded-md p-1">
                        <>Play Now</>
                    </li>
                    </ul>
            </div>
        </div>
    </div>
    </>
    )
}

export default Navbar