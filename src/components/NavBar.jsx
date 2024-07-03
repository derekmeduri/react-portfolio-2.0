"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { title } from "process";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";


const navLinks = [
    {
        title: "About",
        path: "#about"
    },
    {
        title: "Projects",
        path: "#projects"
    },
    {
        title: "Contact",
        path: "#contact"
    },
];

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className="fixed mx-auto border border-black top-0 left-0 right-0 z-10 bg-black">
            <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
                <Link href={'/'} className="text-xl md:text-5xl text-white font-semibold">MEDURI
                </Link>
                <div className="mobile-menu block md:hidden">
                    {!navbarOpen ? (
                            <button onClick={() => setNavbarOpen(true)} className="text-white flex items-center px-3 py-2 border rounded border-white hover:text-red-600"><Bars3Icon className="h-5 w-5" /></button>
                        ) : (
                            <button onClick={() => setNavbarOpen(false)} className="flex items-center px-3 py-2 border rounded border-white text-white hover:text-red-600"><XMarkIcon className="h-5 w-5" />
                            </button>
                        )
                    }

                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                 <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                  {navLinks.map((link, index) => (
                    <li key={index}>
                        <NavLink href={link.path} title={link.title} />
                    </li>
                ))
                }
                   
                </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks}/> : null}
        </nav>
    )
}

export default Navbar;

