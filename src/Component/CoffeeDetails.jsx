import React, { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router';
import { FaArrowLeft } from 'react-icons/fa';

const CoffeeDetails = () => {
    const coffee = useLoaderData();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!coffee) {
        return <div className="text-center py-20 text-2xl font-bold">Loading...</div>;
    }

    const { name, chef, supplier, taste, category, details, photo } = coffee;

    return (
        <div className="min-h-screen py-10 px-4 md:px-24 bg-white">
            <div className="max-w-6xl mx-auto mb-10">
                <Link 
                    to="/" 
                    className="flex items-center gap-2 text-[#331A15] text-3xl hover:underline" 
                    style={{ fontFamily: "'Rancho', cursive" }}
                >
                    <FaArrowLeft />
                    <span>Back to home</span>
                </Link>
            </div>

            <div className="max-w-6xl mx-auto bg-[#F4F3F0] rounded-lg p-12 md:p-24 flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="w-full md:w-1/2 flex justify-center">
                    <img 
                        src={photo} 
                        alt={name} 
                        className="max-w-xs md:max-w-sm drop-shadow-2xl object-contain" 
                    />
                </div>

                <div className="w-full md:w-1/2">
                    <h2 
                        className="text-[#331A15] text-5xl font-bold mb-8" 
                        style={{ fontFamily: "'Rancho', cursive" }}
                    >
                        Niceties
                    </h2>

                    <div className="space-y-4 text-xl text-[#5C5B5B]">
                        <p><span className="font-bold text-[#1B1A1A]">Name:</span> {name}</p>
                        <p><span className="font-bold text-[#1B1A1A]">Chef:</span> {chef || "Mr. Matin Paul"}</p>
                        <p><span className="font-bold text-[#1B1A1A]">Supplier:</span> {supplier}</p>
                        <p><span className="font-bold text-[#1B1A1A]">Taste:</span> {taste}</p>
                        <p><span className="font-bold text-[#1B1A1A]">Category:</span> {category || "Regular"}</p>
                        <p><span className="font-bold text-[#1B1A1A]">Details:</span> {details}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;