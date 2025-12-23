import React from 'react';
import { FaEdit, FaEye, FaTrash, FaPlusSquare } from 'react-icons/fa';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees, addToCart }) => {
    const { _id, name, chef, photo, price } = coffee;

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://coffee-store-server-lemon-chi.vercel.app/coffees/${_id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        Swal.fire("Deleted!", "Your coffee has been deleted.", "success");
                        const remaining = coffees.filter(cof => cof._id !== _id);
                        setCoffees(remaining);
                    }
                });
            }
        });
    }

    return (
        <div className="max-w-6xl mx-auto w-full px-4">
            <div className="card lg:card-side bg-[#F5F4F1] shadow-xl p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 mb-6">
                <figure className="w-full lg:w-1/3 flex justify-center">
                    <img src={photo} alt={name} className="w-full lg:max-w-full object-contain h-40" />
                </figure>

                <div className="flex flex-col md:flex-row justify-between w-full items-center gap-6">
                    <div className="space-y-3 text-center md:text-left">
                        <p className="text-lg"><span className="font-bold text-gray-800">Name:</span> {name}</p>
                        <p className="text-lg"><span className="font-bold text-gray-800">Chef:</span> {chef || "Mr. Matin Paul"}</p>
                        <p className="text-lg"><span className="font-bold text-gray-800">Price:</span> {price} Taka</p>
                        
                        <button 
                            onClick={addToCart}
                            className="btn btn-sm bg-[#372727] text-white border-none hover:bg-[#E3B577] hover:text-black mt-2 transition-all"
                        >
                            <FaPlusSquare className="mr-2" /> Add to Cart
                        </button>
                    </div>

                    <div className="card-actions">
                        <div className="flex flex-row md:flex-col gap-3">
                            <Link to={`/coffeeDetails/${_id}`} className="btn btn-square bg-[#D2B48C] border-none text-white hover:bg-[#bca07a]"><FaEye size={20} /></Link>
                            <Link to={`/updateCoffee/${_id}`} className="btn btn-square bg-[#3C393B] border-none text-white hover:bg-[#2a282a]"><FaEdit size={20} /></Link>
                            <button onClick={() => handleDelete(_id)} className="btn btn-square bg-[#EA4744] border-none text-white hover:bg-[#c63a37]"><FaTrash size={20} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;