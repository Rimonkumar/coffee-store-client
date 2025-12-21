import React from 'react';
import { Link } from 'react-router';

const CoffeSection = () => {
    return (
        <div className="text-center mb-12 mt-10">
            <p className="font-sans text-[#1B1A1A] mb-2 text-lg">
                --- Sip & Savor ---
            </p>
            <h1 className="text-[#331A15] text-5xl md:text-6xl font-bold mb-6" 
                style={{ fontFamily: "'Rancho', cursive" }}>
                Our Popular Products
            </h1>
            <Link to="/addCoffee">
                <button className="bg-[#E3B577] text-[#331A15] border-2 border-[#331A15] py-2 px-5 inline-flex items-center gap-2 rounded-md shadow-md hover:bg-[#d2a66a] transition-all"
                    style={{ fontFamily: "'Rancho', cursive", fontSize: '24px' }}>
                    Add Coffee 
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M432 160H96l16 160h288l32-160zm-320 0l-16-48h352l-16 48H112zM32 448h448v32H32v-32zm416-256l-32 160H96L64 192h384z"></path>
                    </svg>
                </button>
            </Link>
        </div>
    );
};

export default CoffeSection;