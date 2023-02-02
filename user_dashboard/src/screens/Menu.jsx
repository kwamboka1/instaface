import React, { useState } from 'react';
// import { FiMenu } from "react-icons/fi";
// import { Album, Photo } from '.';
import { NavLink } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "./assets/logo192.png";

function Menu() {
    const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
        <div className="Header bg-purple-200 w-full text-purple-900 hover:underline">
        <div className="max-w-[1440px] mx-auto py-6 px-10 flex justify-between">
            <div>
            <NavLink to="/">
                <img className="h-8 w-70 ml-16" src={logo} alt="Logo"></img>
            </NavLink>
            </div>
            <div className="hidden lg:flex">
            <nav className="flex items-center">
                <NavLink to="/" className={({ isActive }) => (isActive ? "text-purple-900 block p-3 text-lg navlink" : "block p-3 text-lg navlink")}>
                Home
                </NavLink>
                <NavLink to="/User" className={({ isActive }) => (isActive ? "text-purple-900 block p-3 text-lg navlink" : "block p-3 text-lg navlink")}>
                User
                </NavLink>
                <NavLink to="/album" className={({ isActive }) => (isActive ? "text-purple-900 block p-3 text-lg navlink" : "block p-3 text-lg navlink")}>
                Album
                </NavLink>
                <NavLink to="/Photo" className={({ isActive }) => (isActive ? "text-purple-900 block p-3 text-lg navlink" : "block p-3 text-lg navlink")}>
                Photo
                </NavLink>
            </nav>
            </div>

            {/* Hamburger menu */}
            <div onClick={handleNav} className="block lg:hidden mr-0 p-2 rounded-2xl hover:bg-purple-900 duration-300">
            {nav ? <AiOutlineClose size={30} className="" /> : <AiOutlineMenu size={30} className="" />}
            </div>

            {/* Mobile Menu */}
            <div className={nav ? "w-full left-0 flex justify-center text-center bg-purple-200 top-[80px] absolute z-10" : "absolute left-[-100%]"}>
            <nav className="pb-8">
                <NavLink to="/" className={({ isActive }) => (isActive ? "text-purple-900 block p-3 text-lg navlink" : "block p-3 text-lg navlink")}>
                Home
                </NavLink>
                <NavLink to="/user" className={({ isActive }) => (isActive ? "text-purple-900 block p-3 text-lg navlink" : "block p-3 text-lg navlink")}>
                User
                </NavLink>
                <NavLink to="/album" className={({ isActive }) => (isActive ? "text-purple-900 block p-3 text-lg navlink" : "block p-3 text-lg navlink")}>
                Album
                </NavLink>
                <NavLink to="/photo" className={({ isActive }) => (isActive ? "text-purple-900 block p-3 text-lg navlink" : "block p-3 text-lg navlink")}>
                Photo
                </NavLink>
                
            </nav>
            </div>
        </div>
        </div>
    </>
  );
}

export default Menu;