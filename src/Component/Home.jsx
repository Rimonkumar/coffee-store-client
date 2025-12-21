import React, { useState } from 'react';
import { useLoaderData, useOutletContext } from 'react-router'; // useOutletContext যোগ করা হয়েছে
import CoffeeCard from './CoffeeCard';
import Banner from './Banner';
import CoffeSection from './CoffeSection';
import Album from './Album';

const Home = () => {
    const loadedCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadedCoffees);
    
    const { addToCart } = useOutletContext();

    return (
        <div>
            <Banner />
            <CoffeSection />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-20">
                {
                    coffees.map(coffee => (
                        <CoffeeCard 
                            key={coffee._id} 
                            coffee={coffee} 
                            coffees={coffees} 
                            setCoffees={setCoffees}
                            addToCart={() => addToCart(coffee)} 
                        />
                    ))
                }
            </div>
            <Album />
        </div>
    );
};

export default Home;