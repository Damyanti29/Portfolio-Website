// Header.js
import React from 'react';
import Layout from '../common/Layout';
import { MdPersonOutline } from "react-icons/md";
import resume from '../asset/resume.pdf';
import { FaHtml5 } from "react-icons/fa";
import { MdCss } from "react-icons/md";
import { FaJava } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaNode } from "react-icons/fa";


const About = () => {

    const handleDownload = () => {
        window.open(resume, '_blank');
    };

    return (
        <div className="flex flex-col items-start px-8 md:px-16 bg-gray-50 min-h-screen">
            <div className="flex items-center justify-between mb-2 w-full mt-14">
                <h2 className="text-4xl font-bold">About Me</h2>
                <MdPersonOutline size={36} />
            </div>
            <hr className="border-t border-dotted border-gray-400 w-full mb-8" />

            <div className="flex flex-col lg:flex-row gap-12">
                {/* Left Section */}
                <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4">Tech Enthusiast</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed text-xl">
    I am a second-year IT undergrad with a strong academic background and a passion
    for emerging technologies. Skilled in Java, C++, GitHub, and databases.
    I enjoy exploring new tools and implementing them in projects.
</p>
<p className="text-gray-600 mb-6 leading-relaxed text-xl">
    I am actively seeking internship and hackathon opportunities to gain hands-on
    experience in a professional environment. I recently won the Cognition Intra-College
    Competition 2024 for my project on the Cafeteria Billing System, showcasing my ability
    to apply technical skills in real-world scenarios.
</p>

                </div>

                {/* Right Section */}
                <div className="flex-1 lg:ml-8">
                    <h3 className="text-2xl font-bold mb-4">Personal Information</h3>
                    <div className="text-gray-600 space-y-2">
                    <p className="text-xl">
    <span className="font-semibold">Name:</span> Damayanti Epili
</p>
<p className="text-xl">
    <span className="font-semibold">Age:</span> 19 Years
</p>
<p className="text-xl">
    <span className="font-semibold">Residence:</span> Navi Mumbai
</p>
<p className="text-xl">
    <span className="font-semibold">Email: </span>
    <a href="mailto:damayantiepili29@gmail.com" className="text-gray-600 hover:underline">
        damayantiepili29@gmail.com
    </a>
</p>
<p className="text-xl">
    <span className="font-semibold">Phone:</span>
    <a href="tel:+917738941495" className="text-gray-600 hover:underline">
        (+91) 7738941495
    </a>
</p>

                    </div>
                    <button onClick={handleDownload} className="mt-6 px-6 py-2 border border-blue-500 text-blue-500 font-semibold rounded hover:bg-black hover:text-white transition">
                        RESUME HERE
                    </button>
                </div>
            </div>

            <div className="flex justify-center space-x-8 text-3xl text-gray-700">
                <h2 className='text-black'>Skills</h2>
                <FaHtml5 className="hover:text-orange-500 transition-all duration-200" />
                <MdCss className="hover:text-blue-500 transition-all duration-200" />
                <FaJava className="hover:text-red-600 transition-all duration-200" />
                <FaGithub className="hover:text-gray-800 transition-all duration-200" />
                <BiLogoPostgresql className="hover:text-green-500 transition-all duration-200" />
                <FaNode className="hover:text-green-600 transition-all duration-200" />
            </div>

        </div>

    );
};

export default About;