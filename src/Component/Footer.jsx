import React from 'react';
import bgimg from '../assets/photo/Rectangle 18.png';
import logo from '../assets/photo/logo1 1.png';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        
        <footer 
            style={{ 
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(${bgimg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }} 
            className="pt-16 md:pt-24"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-32 pb-16">
                
                
                <div className="space-y-6 text-center md:text-left">
                    <img src={logo} alt="Logo" className="w-16 mx-auto md:mx-0" />
                    <h2 className="text-4xl lg:text-5xl font-bold text-[#331A15]" style={{ fontFamily: 'Rancho, cursive' }}>
                        Espresso Emporium
                    </h2>
                    <p className="text-[#1B1A1A] text-base lg:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
                        Always ready to be your friend. Come & Contact with us to share your memorable moments, 
                        to share with your best companion.
                    </p>
                    
                    
                    <div className="flex justify-center md:justify-start gap-5 text-3xl text-[#331A15]">
                        <FaFacebook className="cursor-pointer hover:scale-110 transition-transform" />
                        <FaTwitter className="cursor-pointer hover:scale-110 transition-transform" />
                        <FaInstagram className="cursor-pointer hover:scale-110 transition-transform" />
                        <FaLinkedin className="cursor-pointer hover:scale-110 transition-transform" />
                    </div>
                    
                    <div className="space-y-4 pt-6">
                        <h3 className="text-3xl font-bold text-[#331A15]" style={{ fontFamily: 'Rancho, cursive' }}>Get in Touch</h3>
                        <div className="space-y-3 inline-block md:block text-left">
                            <p className="flex items-center gap-3"><FaPhoneAlt className="text-[#331A15]" /> +88 01533 333 333</p>
                            <p className="flex items-center gap-3"><FaEnvelope className="text-[#331A15]" /> info@gmail.com</p>
                            <p className="flex items-center gap-3"><FaMapMarkerAlt className="text-[#331A15]" /> 72, Wall street, King Road, Dhaka</p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 md:mt-0">
                    <h3 className="text-4xl font-bold text-[#331A15] mb-8 text-center md:text-left" style={{ fontFamily: 'Rancho, cursive' }}>
                        Connect with Us
                    </h3>
                    <form className="flex flex-col gap-4">
                        <input 
                            type="text" 
                            placeholder="Name" 
                            className="input w-full bg-white shadow-md border-none focus:ring-2 focus:ring-[#331A15] placeholder:text-gray-400" 
                        />
                        <input 
                            type="email" 
                            placeholder="Email" 
                            className="input w-full bg-white shadow-md border-none focus:ring-2 focus:ring-[#331A15] placeholder:text-gray-400" 
                        />
                        <textarea 
                            placeholder="Message" 
                            className="textarea w-full bg-white shadow-md border-none h-32 focus:ring-2 focus:ring-[#331A15] placeholder:text-gray-400"
                        ></textarea>
                        
                        <div className="text-center md:text-left">
                            <button className="btn rounded-full border-2 border-[#331A15] bg-transparent text-[#331A15] font-bold hover:bg-[#331A15] hover:text-white px-10 transition-all text-xl" style={{ fontFamily: 'Rancho, cursive' }}>
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="bg-[#331A15] py-4">
                <p className="text-white font-medium text-sm text-center px-4" style={{ fontFamily: 'Rancho, cursive', letterSpacing: '1px' }}>
                    Copyright Espresso Emporium ! All Rights Reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;