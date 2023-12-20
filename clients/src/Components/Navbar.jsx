import React from "react";
import Logo from "../image/Logo.png";
import {BiUser} from 'react-icons/bi';
import {AiOutlineSearch} from 'react-icons/ai';
import {AiOutlineDown} from 'react-icons/ai';
import { MapsDropdown } from "./MapsDropdown";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
// import { navitems } from "./Navitems";
// import { DropdowmMenu } from "./DropdowmMen";
import { UserContext } from '../contexts/UserContext';

export default function Navbar(){

    const {setUserInfo, userInfo} = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:3000/profile', {
            credentials: 'include',
        }).then(response => {
            response.json().then(userInfo => {
                setUserInfo(userInfo);
            })
        });
    }, [])


    function logout(){
        fetch('http://localhost:3000/logout', {
            credentials: 'include',
            method: 'POST',
        })
        setUserInfo(null);
    }

    const username = userInfo?.username;
    
    return (
    <>
    <div className="flex justify-center items-center bg-[#DDF2FD] h-[70px] p-1.5 w-full">
        {/* Head */}
        <div className="flex space-x-4 justify-between items-center h-[90%] w-[90%] bg-white text-black px-5 rounded-lg ">
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
                                <li>
                                    <NavLink to="Heroes">All</NavLink>
                                </li>
                                <li>
                                    <NavLink to="HeroesTank">Tank</NavLink>
                                </li>
                                <li>
                                    <NavLink to="HeroesDamage">Damage</NavLink>
                                </li>
                                <li>
                                    <NavLink to ="HeroesSupport">Support</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="dropdown dropdown-hover">
                            <div className="flex flex-row">
                                <label tabIndex={0} className="p-1">Maps</label>
                                <p className="pt-3.5 ml-1 text-xs"><AiOutlineDown/></p>
                            </div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-1 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <NavLink to="Maps">All</NavLink>
                                </li>
                                <li>
                                    <NavLink to ="/MapsAssault">Assault</NavLink>
                                </li>
                                <li>
                                    <NavLink to = "/MapsCapture">CaptureFlag</NavLink>
                                </li>
                                <li>
                                    <NavLink to ="/MapsControl">Control</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/MapsDeathmatch">Deathmatch</NavLink>
                                </li>
                                <li>
                                    <NavLink to ="/MapsElimination">Elimination</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/MapsEscort">Escort</NavLink>
                                </li>
                                <li>
                                    <NavLink to ="/MapsFlashpoint">Flashpoint</NavLink>
                                </li>
                                <li>
                                    <NavLink to ="/MapsHybrid">Hybrid</NavLink>
                                </li>
                                <li>
                                    <NavLink to ="/MapsPush">Push</NavLink>
                                </li>
                                <li>
                                    <NavLink to ="/MapsTeamDeathMatch">TeamDeathMatch</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="dropdown dropdown-hover">
                            <div className="flex flex-row">
                                <label tabIndex={0} className="p-1">
                                    <NavLink to ="/Community">Community</NavLink>
                                </label>
                            </div>
                        </div>
                    </ul>
            </div>

                
            <div className="flex items-center">
                    <ul className="flex justify-between gap-14 text-[18px] rounded-full">
                    


                {username && (
                            <>
                                <span className="badge badge-outline mt-4 text-[#405275]">Hello, {username}!</span>
                                <Link to ="/community/create" className="btn btn-outline btn-info">Create new post</Link>
                                <a onClick={logout} className="text-[#405275] hover:underline mt-3">Logout</a>
                            </>
                )}
                {!username && (
                    <div className="dropdown dropdown-hover">
                        <div className="flex flex-row mt-1">
                            <label tabIndex={0} className="p-1 ">Account</label>
                            <p className="pt-3.5 ml-1 text-xs "><AiOutlineDown/></p>
                        </div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-1 shadow bg-base-100 rounded-box w-52">
                            <li className="bg-[#99ccff] rounded-md text-white text-center"><NavLink to="/community/login">Log in</NavLink></li>
                            <li>
                                <NavLink to="/community/register">Sign Up</NavLink>
                            </li>
                        </ul>
                    </div>
                )}

                    
                    <li className="btn btn-warning">
                    <NavLink to='https://download.battle.net/en-us?' target="blank">Play Now</NavLink>
                    </li>
                    </ul>
            </div>
        </div>
    </div>

    </>
    )
}
