import React from "react";
import Logo from "../image/Logo.png";
import { BiUser } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";
import { MapsDropdown } from "./MapsDropdown";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
// import { navitems } from "./Navitems";
// import { DropdowmMenu } from "./DropdowmMen";
import { UserContext } from "../contexts/UserContext";

export default function Navbar() {
  const { setUserInfo, userInfo } = useContext(UserContext);
  const [toggleHero, setToggleHero] = useState(false);
  const [toggleMap, setToggleMap] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch("http://localhost:3000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <>
      <div>
        <div className=" lg:hidden grid justify-items-center">
          <img src={Logo} className="mx-5" alt="" width="50px" />
          <div className="hover:bg-[#ece9e9] hover:rounded-md p-1">
            <NavLink to="">Overview</NavLink>
          </div>
          <div className="w-screen text-center	 my-1">
            <div
              onClick={() => {
                setToggleHero(!toggleHero);
              }}
            >
              Hero
            </div>
            {toggleHero ? (
              <div>
                <div className="my-1">
                  <NavLink to="Heroes">All</NavLink>
                </div>
                <div className="my-1">
                  <NavLink to="HeroesTank">Tank</NavLink>
                </div>
                <div className="my-1">
                  <NavLink to="HeroesDamage">Damage</NavLink>
                </div>
                <div className="my-1">
                  <NavLink to="HeroesSupport">Support</NavLink>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="w-screen text-center my-1	">
            <div
              onClick={() => {
                setToggleMap(!toggleMap);
              }}
            >
              Map
            </div>
            {toggleMap ? (
              <div>
                <div className="my-1">
                  <NavLink to="Maps">All</NavLink>
                </div>
                <div className="my-1">
                  <NavLink to="/MapsAssault">Assault</NavLink>
                </div>
                <div className="my-1">
                  <NavLink to="/MapsCapture">CaptureFlag</NavLink>
                </div>
                <div className="my-1">
                  <NavLink to="/MapsControl">Control</NavLink>
                </div>
                <div className="my-1">
                  <NavLink to="/MapsDeathmatch">Deathmatch</NavLink>
                </div>
                <div className="my-1">
                  <NavLink to="/MapsElimination">Elimination</NavLink>
                </div>
                <div className="my-1">
                  <NavLink to="/MapsEscort">Escort</NavLink>
                </div>
                <div className="my-1">
                  <NavLink to="/MapsFlashpoint">Flashpoint</NavLink>
                </div>
                <div className="my-1">
                  <NavLink to="/MapsHybrid">Hybrid</NavLink>
                </div>
                <div className="my-1">
                  <NavLink to="/MapsPush">Push</NavLink>
                </div>
                <div className="my-1">
                  <NavLink to="/MapsTeamDeathMatch">TeamDeathMatch</NavLink>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <label tabIndex={0} className="my-1">
            <NavLink to="/Community">Community</NavLink>
          </label>
          <div>
            {username ? (
              <div className="w-screen text-center	">
                <span className="badge badge-outline mt-4 text-[#405275] my-1">
                  Hello, {username}!
                </span>
                <Link
                  to="/community/create"
                  className="btn btn-outline btn-info"
                >
                  Create new post
                </Link>
                <a
                  onClick={logout}
                  className="text-[#405275] hover:underline my-1"
                >
                  Logout
                </a>
              </div>
            ) : (
              <div className="w-screen text-center">
                <div className="my-3">
                  <NavLink to="/community/login">Log in</NavLink>
                </div>

                <div className="my-3">
                  <NavLink to="/community/register">Sign Up</NavLink>
                </div>
              </div>
            )}
          </div>
          <li className="btn btn-warning my-4">
            <NavLink
              to="https://download.battle.net/en-us?product=ow&blzcmp=ow_gamesite"
              target="blank"
            >
              Play Now
            </NavLink>
          </li>
        </div>
        <div className="lg:flex hidden justify-center items-center bg-[#DDF2FD] h-[70px] p-1.5 w-full">
          {/* Head */}
          <div className="flex space-x-4 justify-between items-center h-[90%] w-[90%] bg-white text-black px-5 rounded-lg ">
            <div className="flex items-center">
              <img src={Logo} className="mx-5" alt="" width="50px" />
              <ul className="flex justify-between gap-14 text-[18px] rounded-full">
                <li className="hover:bg-[#ece9e9] hover:rounded-md p-1">
                  <NavLink to="">Overview</NavLink>
                </li>
                <div className="dropdown dropdown-hover">
                  <div className="flex flex-row">
                    <label tabIndex={0} className="p-1">
                      Heroes
                    </label>
                    <p className="pt-3.5 ml-1 text-xs">
                      <AiOutlineDown />
                    </p>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-1 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <NavLink className="my-1" to="Heroes">
                        All
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="my-1" to="HeroesTank">
                        Tank
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="my-1" to="HeroesDamage">
                        Damage
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="my-1" to="HeroesSupport">
                        Support
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="dropdown dropdown-hover">
                  <div className="flex flex-row">
                    <label tabIndex={0} className="p-1">
                      Maps
                    </label>
                    <p className="pt-3.5 ml-1 text-xs">
                      <AiOutlineDown />
                    </p>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-1 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <NavLink to="Maps">All</NavLink>
                    </li>
                    <li>
                      <NavLink to="/MapsAssault">Assault</NavLink>
                    </li>
                    <li>
                      <NavLink to="/MapsCapture">CaptureFlag</NavLink>
                    </li>
                    <li>
                      <NavLink to="/MapsControl">Control</NavLink>
                    </li>
                    <li>
                      <NavLink to="/MapsDeathmatch">Deathmatch</NavLink>
                    </li>
                    <li>
                      <NavLink to="/MapsElimination">Elimination</NavLink>
                    </li>
                    <li>
                      <NavLink to="/MapsEscort">Escort</NavLink>
                    </li>
                    <li>
                      <NavLink to="/MapsFlashpoint">Flashpoint</NavLink>
                    </li>
                    <li>
                      <NavLink to="/MapsHybrid">Hybrid</NavLink>
                    </li>
                    <li>
                      <NavLink to="/MapsPush">Push</NavLink>
                    </li>
                    <li>
                      <NavLink to="/MapsTeamDeathMatch">TeamDeathMatch</NavLink>
                    </li>
                  </ul>
                </div>
                <div className="dropdown dropdown-hover">
                  <div className="flex flex-row">
                    <label tabIndex={0} className="p-1">
                      <NavLink to="/Community">Community</NavLink>
                    </label>
                  </div>
                </div>
              </ul>
            </div>

            <div className="flex items-center">
              <ul className="flex justify-between gap-14 text-[18px] rounded-full">
                {username && (
                  <>
                    <span className="badge badge-outline mt-4 text-[#405275]">
                      Hello, {username}!
                    </span>
                    <Link
                      to="/community/create"
                      className="btn btn-outline btn-info"
                    >
                      Create new post
                    </Link>
                    <a
                      onClick={logout}
                      className="text-[#405275] hover:underline mt-3"
                    >
                      Logout
                    </a>
                  </>
                )}
                {!username && (
                  <div className="dropdown dropdown-hover">
                    <div className="flex flex-row mt-1">
                      <label tabIndex={0} className="p-1 ">
                        Account
                      </label>
                      <p className="pt-3.5 ml-1 text-xs ">
                        <AiOutlineDown />
                      </p>
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-1 shadow bg-base-100 rounded-box w-52"
                    >
                      <li className="bg-[#99ccff] rounded-md text-white text-center">
                        <NavLink to="/community/login">Log in</NavLink>
                      </li>
                      <li>
                        <NavLink to="/community/register">Sign Up</NavLink>
                      </li>
                    </ul>
                  </div>
                )}

                <li className="btn btn-warning">
                  <NavLink
                    to="https://download.battle.net/en-us"
                    target="blank"
                  >
                    Play Now
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
