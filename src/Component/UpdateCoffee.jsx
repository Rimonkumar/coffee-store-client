import React, { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router';
import { FaArrowLeft } from 'react-icons/fa';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, quentity, supplier, taste, price, details, photo,  } = coffee;
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleUpdateCoffee = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quentity = form.quentity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const price = form.price.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = { name, quentity, supplier, taste, price, details, photo };

        // Send data to the server
        fetch(`https://coffee-store-server-lemon-chi.vercel.app/coffees/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div className="bg-white p-4 md:p-24 min-h-screen">
            <div className="max-w-6xl mx-auto">
                {/* Back to Home Link */}
                <Link to="/" className="flex items-center gap-2 text-[#331A15] text-2xl mb-8 hover:underline" style={{ fontFamily: "'Rancho', cursive" }}>
                    <FaArrowLeft />
                    <span>Back to home</span>
                </Link>

                <div className="bg-[#F4F3F0] rounded-lg p-8 md:p-20">
                    <div className="text-center mb-10">
                        <h2 className="text-[#374151] text-5xl mb-6" style={{ fontFamily: "'Rancho', cursive" }}>Update Existing Coffee Details</h2>
                        <p className="text-gray-500 max-w-3xl mx-auto">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                        </p>
                    </div>

                    <form onSubmit={handleUpdateCoffee}>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            {/* Name Field */}
                            <div className="form-control">
                                <label className="label font-bold text-gray-700">Name</label>
                                <input type="text" name='name' defaultValue={name} className="input bg-white w-full border-none h-12" placeholder="Enter coffee name" />
                            </div>

                            {/* Chef Field */}
                            <div className="form-control">
                                <label className="label font-bold text-gray-700">Quentity</label>
                                <input type="text" name='quentity' defaultValue={quentity} className="input bg-white w-full border-none h-12" placeholder="Enter coffee quentity" />
                            </div>

                            {/* Supplier Field */}
                            <div className="form-control">
                                <label className="label font-bold text-gray-700">Supplier</label>
                                <input type="text" name='supplier' defaultValue={supplier} className="input bg-white w-full border-none h-12" placeholder="Enter coffee supplier" />
                            </div>

                            {/* Taste Field */}
                            <div className="form-control">
                                <label className="label font-bold text-gray-700">Taste</label>
                                <input type="text" name='taste' defaultValue={taste} className="input bg-white w-full border-none h-12" placeholder="Enter coffee taste" />
                            </div>

                            {/* Price Field */}
                            <div className="form-control">
                                <label className="label font-bold text-gray-700">Price</label>
                                <input type="text" name='price' defaultValue={price} className="input bg-white w-full border-none h-12" placeholder="Enter coffee category" />
                            </div>

                            {/* Details Field */}
                            <div className="form-control">
                                <label className="label font-bold text-gray-700">Details</label>
                                <input type="text" name='details' defaultValue={details} className="input bg-white w-full border-none h-12" placeholder="Enter coffee details" />
                            </div>

                            {/* Photo URL Field */}
                            <div className="form-control md:col-span-2">
                                <label className="label font-bold text-gray-700">Photo</label>
                                <input type="text" name='photo' defaultValue={photo} className="input bg-white w-full border-none h-12" placeholder="Enter photo URL" />
                            </div>
                        </div>

                        {/* Update Button */}
                        <div className="mt-8">
                            <button type="submit" className="btn btn-block bg-[#D2B48C] border-2 border-[#331A15] text-[#331A15] hover:bg-[#b89d7a] font-bold h-12 min-h-0" style={{ fontFamily: "'Rancho', cursive", fontSize: '24px' }}>
                                Update Coffee Details
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateCoffee;