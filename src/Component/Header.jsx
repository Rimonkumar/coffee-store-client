import React from 'react';
import { Link, NavLink } from 'react-router'; 
import coffeeicon from '../assets/photo/logo1 1.png';
import coName from '../assets/photo/Espresso Emporium.png';
import Swal from 'sweetalert2';

const Header = ({ cart = [], clearCart }) => {

    const handleOrder = () => {
        if (cart.length === 0) {
            Swal.fire({
                title: "Empty Cart!",
                text: "Please add some coffee first.",
                icon: "error",
                confirmButtonColor: "#372727",
            });
            return;
        }

        Swal.fire({
            title: "Order Successful!",
            text: "Your coffee order has been placed.",
            icon: "success",
            confirmButtonColor: "#372727",
        }).then((result) => {
            if (result.isConfirmed) {
                clearCart(); // অর্ডার সফল হলে কার্ট খালি করা
            }
        });
    };

    return (
        <div className="navbar bg-[#372727] px-2 md:px-16 py-3 shadow-2xl sticky top-0 z-50 border-b-[3px] border-[#E3B577]">
            {/* Mobile & Logo Section */}
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-[#372727] rounded-box w-52 text-white border border-[#E3B577]">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/addCoffee">Add Product</NavLink></li>
                        <li><NavLink to="/follow">Follow Us</NavLink></li>
                        <li><NavLink to="/signin">SignIn </NavLink></li>
                        <li><NavLink to="/signup">SignUp </NavLink></li>
                    </ul>
                </div>
                <Link to="/" className="flex items-center gap-2">
                    <img src={coffeeicon} alt="Logo" className="w-10 h-10 md:w-12 md:h-12" />
                    <img src={coName} alt="Name" className="hidden sm:block h-6 md:h-8" />
                </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white font-medium gap-4">
                    <li><NavLink to="/" className={({isActive}) => isActive ? "border-b-2 border-[#E3B577] text-[#E3B577]" : "hover:text-[#E3B577]"}>Home</NavLink></li>
                    <li><NavLink to="/addCoffee" className={({isActive}) => isActive ? "border-b-2 border-[#E3B577] text-[#E3B577]" : "hover:text-[#E3B577]"}>Add Product</NavLink></li>
                    <li><NavLink to="/follow" className={({isActive}) => isActive ? "border-b-2 border-[#E3B577] text-[#E3B577]" : "hover:text-[#E3B577]"}>Follow Us</NavLink></li>
                    <li><NavLink to="/signin" className={({isActive}) => isActive ? "border-b-2 border-[#E3B577] text-[#E3B577]" : "hover:text-[#E3B577]"}>SignIn</NavLink></li>
                    <li><NavLink to="/signup" className={({isActive}) => isActive ? "border-b-2 border-[#E3B577] text-[#E3B577]" : "hover:text-[#E3B577]"}>SignUp</NavLink></li>
                </ul>
            </div>

            {/* Cart Section */}
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#E3B577]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                            <span className="badge badge-sm indicator-item bg-white text-[#372727] font-bold">{cart.length}</span>
                        </div>
                    </div>
                    
                    {/* Cart Dropdown Content */}
                    <div tabIndex={0} className="card card-compact dropdown-content bg-white z-[1] mt-3 w-64 shadow-2xl border border-gray-200">
                        <div className="card-body">
                            <span className="text-lg font-bold text-[#372727] border-b pb-2">{cart.length} Items Selected</span>
                            <div className="max-h-56 overflow-y-auto">
                                {cart.length > 0 ? (
                                    cart.map((item, idx) => (
                                        <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                                            <div className="flex flex-col">
                                                <span className="text-sm font-semibold text-gray-800">{item.name}</span>
                                                <span className="text-xs text-gray-500">{item.price} TK</span>
                                            </div>
                                            <img src={item.photo} alt={item.name} className="w-8 h-8 rounded shadow-sm object-cover" />
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-center py-6 text-gray-400 italic">No coffee added yet!</p>
                                )}
                            </div>
                            
                            {/* Order Button with onClick handler */}
                            <div className="card-actions mt-3">
                                <button 
                                    onClick={handleOrder}
                                    className="btn bg-[#372727] text-white btn-block hover:bg-[#E3B577] hover:text-black border-none transition-colors"
                                >
                                    Order Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;