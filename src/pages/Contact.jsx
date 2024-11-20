import React from "react";
import Layout from "../common/Layout";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const ContactMe = () => {
  return (

    <div className="flex flex-col items-center py-16 px-8 md:px-16 bg-gray-50 min-h-screen">
      {/* Heading */}

      <div className="flex items-center justify-between mb-2 w-full">
        <h2 className="text-4xl font-bold">Contact Me</h2>
        <MdEmail size={36} />
      </div>
      <hr className="border-t border-dotted border-gray-400 w-full mb-8" />

      {/* Form Section */}
      <h3 className="text-2xl font-bold mb-4 text-center">LET'S TALK</h3>
      <hr className="border-t-2 border-blue-500 w-24 mb-8" />

      <form className="w-full max-w-lg space-y-4 mb-12 ">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Name"
            className="flex-1 border border-gray-600 text-gray-800 px-4 py-2 focus:outline-none focus:border-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="flex-1 border border-gray-600 text-gray-800 px-4 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <textarea
          placeholder="How can we help you?"
          className="w-full border border-gray-600 text-gray-800 px-4 py-2 focus:outline-none focus:border-blue-500 h-32"
        ></textarea>
        <div className="flex justify-center">
          <button className="px-6 py-1 border border-blue-500 text-blue-500 font-semibold rounded hover:bg-black hover:text-white transition">
            SEND MESSAGE
          </button>
        </div>
      </form>


      {/* Contact Information Section */}
      <div className="flex justify-around gap-8 text-gray-600">
        <div className="flex flex-col items-center">
          {/* Email Link */}
          <a href="mailto:damayantiepili29@gmail.com" className="text-gray-700 hover:text-blue-500">
            <MdEmail size={32} />
            <p>Email</p>
          </a>
        </div>

        <div className="flex flex-col items-center">
          {/* LinkedIn Link */}
          <a href="https://www.linkedin.com/in/damayanti26/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-500">
            <FaLinkedin size={32} />
            <p>LinkedIn</p>
          </a>
        </div>

        <div className="flex flex-col items-center">
          {/* GitHub Link */}
          <a href="https://github.com/Damyanti29" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-500">
            <FaGithub size={32} />
            <p>GitHub</p>
          </a>
        </div>

      </div>
    </div>

  );
};

export default ContactMe;
