import React from 'react';
import album1 from '../assets/photo/Rectangle 9.png';
import album2 from '../assets/photo/Rectangle 10.png';
import album3 from '../assets/photo/Rectangle 11.png';
import album4 from '../assets/photo/Rectangle 12.png';
import album5 from '../assets/photo/Rectangle 13.png';
import album6 from '../assets/photo/Rectangle 14.png';
import album7 from '../assets/photo/Rectangle 15.png';
import album8 from '../assets/photo/Rectangle 16.png';

const Album = () => {
    const images = [album1, album2, album3, album4, album5, album6, album7, album8];

    return (
        <div className="max-w-7xl mx-auto px-4 py-20">
            <div className="text-center mb-12">
                <p className="text-[#1B1A1A] text-lg">Follow Us Now</p>
                <h2 
                    className="text-[#331A15] text-5xl md:text-6xl font-bold mt-2"
                    style={{ fontFamily: "'Rancho', cursive" }}
                >
                    Follow on Instagram
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {images.map((img, index) => (
                    <div key={index} className="overflow-hidden rounded-xl group cursor-pointer">
                        <img 
                            src={img} 
                            alt={`Gallery ${index + 1}`} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Album;