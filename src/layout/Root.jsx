import React, { useState } from 'react';
import { Outlet } from 'react-router';
import Header from '../Component/Header';
import Footer from '../Component/Footer';

const Root = () => {
    const [cart, setCart] = useState([]); 

    const addToCart = (coffee) => {
        setCart((prevCart) => [...prevCart, coffee]); 
    };
    const clearCart = () => {
        setCart([]);
    };

    return (
        <div>
            {/* Header এ কার্ট ডাটা পাঠানো হলো */}
            <Header cart={cart} clearCart={clearCart} />
            
            <div className="min-h-[calc(100vh-300px)]">
                {/* context={...} এখানে দেওয়া বাধ্যতামূলক যাতে Home পেজ এটি পায় */}
                <Outlet context={{ addToCart }} />
            </div>
            
            <Footer />
        </div>
    );
};

export default Root;