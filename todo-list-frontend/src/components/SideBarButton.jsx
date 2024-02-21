import React from 'react'
import { NavLink } from "react-router-dom";

function SideBarButton({ children, path }) {
    return (
        <>
            <div>
                <NavLink
                    to={path} 
                   
                    className={({ isActive}) =>
                       ` block  text-white py-2 px-3 duration-150 w-full rounded-md ${isActive? " bg-slate-700/50": "bg-slate-900"} `
                    }
                >
                    {children}
                </NavLink>
            </div>
        </>
    );
}

export default SideBarButton;