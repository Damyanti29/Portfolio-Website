
import React from 'react';
import profile from '../asset/profile-img.png';
import { AiOutlineHome } from "react-icons/ai";
import { MdPersonOutline } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { CiTrophy } from "react-icons/ci";
import { GoProjectSymlink } from "react-icons/go";
import { NavLink } from 'react-router-dom';

const SideBar = () => {
    return (
        <>

            <div className="text-white w-48 min-h-screen flex flex-col " style={{ backgroundColor: '#2a2b30' }}>
                {/* Profile Section */}
                <div className="relative h-52 w-full">
                    <img src={profile} alt="Profile" className="h-full w-full object-cover" />
                    <h1 className="absolute bottom-0 w-full text-center text-2xl font-bold text-white bg-black bg-opacity-55 py-2">
                        Damayanti Epili
                    </h1>
                </div>

                {/* Navigation Section */}
                <div className="flex flex-col ">
                    {/* Home Link */}
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `flex items-center space-x-2 border-b border-gray-900 px-4 py-3 ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                            }`
                        }
                    >
                        <div><AiOutlineHome /></div>
                        <div>Home</div>
                    </NavLink>

                    {/* About Link */}
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `flex items-center space-x-2 border-b border-gray-900 px-4 py-3 ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                            }`
                        }
                    >
                        <div><MdPersonOutline /></div>
                        <div>About</div>
                    </NavLink>

                    {/* Project Link */}
                    <NavLink
                        to="/project"
                        className={({ isActive }) =>
                            `flex items-center space-x-2 border-b border-gray-900 px-4 py-3 ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                            }`
                        }
                    >
                        <div><GoProjectSymlink /></div>
                        <div>Projects</div>
                    </NavLink>

                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `flex items-center space-x-2 border-b border-gray-900 px-4 py-3 ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                            }`
                        }
                    >
                        <div><IoMailOutline /></div>
                        <div>Contact</div>
                    </NavLink>
                    {/* 
                    <NavLink
                        to="/acheivements"
                        className={({ isActive }) =>
                            `flex items-center space-x-2 border-b border-gray-900 px-4 py-3 ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                            }`
                        }
                    >
                        <div><CiTrophy /></div>
                        <div>Acheivements</div>
                    </NavLink> */}

                </div>

                {/* Footer Section */}
                <footer className="mt-auto text-xs text-gray-500 px-4 py-2">
                    <p>
                        <div>Developed By:</div>
                        <a href="mailto:damayantiepili29@gmail.com" className="text-gray-600 hover:underline">
                            damayantiepili29@gmail.com
                        </a>
                    </p>
                    <p>Feel Free To connect!!!</p>
                </footer>
            </div>


        </>
    );
};

export default SideBar;
