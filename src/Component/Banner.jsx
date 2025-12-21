import React from 'react';
import bannerBg from '../assets/photo/Rectangle 2.png';
import icon1 from '../assets/photo/1 1.png';
import icon2 from '../assets/photo/2 1.png';
import icon3 from '../assets/photo/3 1.png';
import icon4 from '../assets/photo/4 1.png';

const Banner = () => {
    return (
        <div>
            {/* --- Hero Banner Section --- */}
            <div 
                className="hero min-h-[500px] md:min-h-[700px] flex items-center justify-center md:justify-end px-6 md:pr-40" 
                style={{ 
                    backgroundImage: `url(${bannerBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="max-w-xl text-white text-center md:text-left space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight" style={{ fontFamily: 'Rancho, cursive' }}>
                        Would you like a Cup of Delicious Coffee?
                    </h1>
                    <p className="text-lg opacity-90">
                        It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! 
                        Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
                    </p>
                    <button className="btn bg-[#E3B577] border-none rounded-none px-8 text-[#242222] text-xl font-normal hover:bg-[#d2a66a]" style={{ fontFamily: 'Rancho, cursive' }}>
                        Learn More
                    </button>
                </div>
            </div>

            {/* --- Features Section --- */}
            <div className="bg-[#ECEAE3] py-24">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    
                    {/* Feature 1 */}
                    <div className="space-y-3 text-center md:text-left">
                        <img src={icon1} alt="Aroma" className="w-16 h-16 mx-auto md:mx-0" />
                        <h3 className="text-3xl text-[#331A15]" style={{ fontFamily: 'Rancho, cursive' }}>Awesome Aroma</h3>
                        <p className="text-[#1B1A1A]">You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>

                    {/* Feature 2 */}
                    <div className="space-y-3 text-center md:text-left">
                        <img src={icon2} alt="Quality" className="w-16 h-16 mx-auto md:mx-0" />
                        <h3 className="text-3xl text-[#331A15]" style={{ fontFamily: 'Rancho, cursive' }}>High Quality</h3>
                        <p className="text-[#1B1A1A]">We served the coffee to you maintaining the best quality</p>
                    </div>

                    {/* Feature 3 */}
                    <div className="space-y-3 text-center md:text-left">
                        <img src={icon3} alt="Grades" className="w-16 h-16 mx-auto md:mx-0" />
                        <h3 className="text-3xl text-[#331A15]" style={{ fontFamily: 'Rancho, cursive' }}>Pure Grades</h3>
                        <p className="text-[#1B1A1A]">The coffee is made of the green coffee beans which you will love</p>
                    </div>

                    {/* Feature 4 */}
                    <div className="space-y-3 text-center md:text-left">
                        <img src={icon4} alt="Roasting" className="w-16 h-16 mx-auto md:mx-0" />
                        <h3 className="text-3xl text-[#331A15]" style={{ fontFamily: 'Rancho, cursive' }}>Proper Roasting</h3>
                        <p className="text-[#1B1A1A]">Your coffee is brewed by first roasting the green coffee beans</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;