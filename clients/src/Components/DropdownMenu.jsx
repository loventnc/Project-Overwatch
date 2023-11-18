import React, { useState } from "react";
import { HeroesDropdown } from "./Navitems";
import { Link } from "react-router-dom";

function DropdownMenu() {
    const [dropdown, setDropdown] = useState(false);

    return (
    <>
        <ul
        className={dropdown ? "Heroes-submenu clicked" : "Heroes-submenu"}
        onClick={() => setDropdown(!dropdown)}
        >
        {HeroesDropdown.map((item) => {
            return (
            <li key={item.id}>
                <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown(false)}
                >
                {item.title}
                </Link>
            </li>
            );
        })}
        </ul>
    </>
    );
}

export default DropdownMenu;