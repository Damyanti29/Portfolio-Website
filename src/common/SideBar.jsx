import React, { useState } from 'react';
import profile from '../asset/profile-img.png';
import { AiOutlineHome } from "react-icons/ai";
import { MdPersonOutline } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { GoProjectSymlink } from "react-icons/go";
import { FiMenu, FiX } from "react-icons/fi"; 
import { NavLink } from 'react-router-dom';

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);  

    return (
        <>
            {/* Mobile Menu Button */}
            <div className="md:hidden flex justify-between items-center bg-gray-800 text-white px-4 py-3 fixed top-0 left-0 right-0 z-50">
                <h1 className="text-xl font-bold">Damayanti</h1>
                <button
                    className="text-2xl"
                    onClick={() => setIsOpen(!isOpen)}  
                    aria-label="Toggle Sidebar"
                >
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Sidebar */}
            <div
                className={`fixed md:static top-0 left-0 z-50 min-h-screen w-48 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}  // Toggle sidebar visibility on mobile
                style={{ backgroundColor: '#2a2b30' }}
            >
                {/* Profile Section */}
                <div className="relative h-52 w-full">
                    <img src={profile} alt="Profile" className="h-full w-full object-cover" />
                    <h1 className="absolute bottom-0 w-full text-center text-2xl font-bold text-white bg-black bg-opacity-55 py-2">
                        Damayanti Epili
                    </h1>
                </div>

                {/* Navigation Section */}
                <div className="flex flex-col">
                    {/* Home Link */}
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `flex items-center space-x-2 border-b border-gray-900 px-4 py-3 ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}`
                        }
                    >
                        <AiOutlineHome />
                        <span>Home</span>
                    </NavLink>

                    {/* About Link */}
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `flex items-center space-x-2 border-b border-gray-900 px-4 py-3 ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}`
                        }
                    >
                        <MdPersonOutline />
                        <span>About</span>
                    </NavLink>

                    {/* Project Link */}
                    <NavLink
                        to="/project"
                        className={({ isActive }) =>
                            `flex items-center space-x-2 border-b border-gray-900 px-4 py-3 ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}`
                        }
                    >
                        <GoProjectSymlink />
                        <span>Projects</span>
                    </NavLink>

                    {/* Contact Link */}
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `flex items-center space-x-2 border-b border-gray-900 px-4 py-3 ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}`
                        }
                    >
                        <IoMailOutline />
                        <span>Contact</span>
                    </NavLink>
                </div>

                {/* Footer Section */}
                <footer className="mt-auto text-xs text-gray-500 px-4 py-2">
                    <p>
                        Developed By:
                        <a href="mailto:damayantiepili29@gmail.com" className="text-gray-600 hover:underline">
                            damayantiepili29@gmail.com
                        </a>
                    </p>
                    <p>Feel Free To Connect!!!</p>
                </footer>

            </div>

            <div
                className={`transition-all duration-300 ease-in-out ${isOpen ? "ml-48" : "ml-0"}`}
                style={{ minHeight: "100vh" }}
            >
            </div>
        </>
    );
};

export default SideBar;


