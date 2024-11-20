// Header.js
import React from 'react';
import Layout from '../common/Layout';
import Hero from '../asset/hero.jpg';


const HomePage = () => {
    return (   
            <div
                className="flex-1 bg-cover bg-center h-screen text-white flex flex-col justify-center items-center relative"
            >
                <img src={Hero} alt="Profile" className="h-full w-full object-cover" />

                {/* Text inside the image */}
                <div className="absolute top-1/2 transform -translate-y-1/2 text-center">
                    <h1 className="text-6xl font-bold">
                        DAMAYANTI EPILI
                    </h1>
                    <p className="mt-4 text-lg font-semibold">Hello, I am a Software Developer</p>
                </div>
            </div>
    );
};

export default HomePage;
