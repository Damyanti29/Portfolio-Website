import React from "react";
import Layout from "../common/Layout";
import { GoProjectSymlink } from "react-icons/go";
import project1 from '../asset/project/CafeteriaBillingSystem.png'; 
import project2 from '../asset/project2.png';  // New image for project2

const Projects = () => {
    const projects = [
        {
            title: "Cafeteria Billing System",
            image: project1,
            category: "Web Design",
            date: "September, 2024",
            description: "A web-based system to manage cafeteria billing, track orders, and generate invoices. It aims to make the process delightful and efficient, developed using Java in an IDE.",
            github: "https://github.com/Damyanti29/Cafeteria_Billing_System"  
        },
        {
            title: "Portfolio",
            image: project2,  
            category: "Web Development",
            date: "November, 2024",
            description: "A personal portfolio built with HTML, CSS, and JavaScript running on Node.js, showcasing my skills and learnings till now.",
            github: "https://github.com/Damyanti29/Portfolio-Website"  
        }
    ];

    return (
        <div className="flex flex-col items-center py-16 px-8 md:px-16 bg-gray-50 min-h-screen">
            {/* Heading */}
            <div className="flex items-center justify-between mb-2 w-full">
                <h2 className="text-4xl font-bold">Projects</h2>
                <GoProjectSymlink size={36} />
            </div>
            <hr className="border-t border-dotted border-gray-400 w-full mb-8" />

            {/* Project Blocks */}
            <div className="flex flex-col gap-8 w-full">
                {projects.map((project, index) => (
                    <div key={index} className="flex flex-col sm:flex-row gap-6 mb-8">
                        {/* Image Container: Stack on small screens */}
                        <div className="w-full sm:w-1/2">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-80 object-cover rounded-lg shadow-lg"
                            />
                        </div>

                        {/* Description Section: Stack on small screens */}
                        <div className="w-full sm:w-1/2 flex flex-col justify-center text-gray-700 mt-4 sm:mt-0">
                            <p className="text-xl text-black font-semibold mb-2">{project.title}</p>
                            <p className="text-base mb-4 text-gray-700 text-xl">{project.description}</p>
                            <p className="text-sm text-gray-500 mb-4">{project.date}</p>
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="mt-4">
                                <button className="px-6 py-1 border border-blue-500 text-blue-500 font-semibold rounded hover:bg-black hover:text-white transition">
                                    GitHub
                                </button>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
