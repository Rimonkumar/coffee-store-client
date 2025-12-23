import React from 'react';
import Swal from 'sweetalert2';

const AddCoffee = () => {

    const haldleAddCoffee = e => {
        e.preventDefault();
        const from = e.target
        const fromData = new FormData(from);
        const newCoffee = Object.fromEntries(fromData.entries());
        console.log(newCoffee)


        fetch('https://coffee-store-server-lemon-chi.vercel.app/coffees', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log('Coffee successfuly added')

                    Swal.fire({
                        title: "Coffee Add Successfuly!",
                        icon: "success",
                        draggable: true
                    });

                    // form.reset();
                }


            })
    }

    return (
        <div className='p-20 bg-[#F4F3F0] max-w-6xl mx-auto '>
            <div className='p-12 text-center space-y-10'>
                <h1 className="text-6xl">Add New Coffee</h1>
                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal  of letters, as opposed to using Content here.</p>
            </div>

            <form onSubmit={haldleAddCoffee}>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                    {/* Name Field */}
                    <div className="form-control">
                        <label className="label font-bold text-gray-700">Name</label>
                        <input type="text" name='name' className="input bg-white w-full border-none" placeholder="Enter coffee name" />
                    </div>

                    {/* Quentity Field */}
                    <div className="form-control">
                        <label className="label font-bold text-gray-700">Quentity</label>
                        <input type="text" name='quentity' className="input bg-white w-full border-none" placeholder="Enter coffee Quentity" />
                    </div>

                    {/* Supplier Field */}
                    <div className="form-control">
                        <label className="label font-bold text-gray-700">Supplier</label>
                        <input type="text" name='supplier' className="input bg-white w-full border-none" placeholder="Enter coffee supplier" />
                    </div>

                    {/* Taste Field */}
                    <div className="form-control">
                        <label className="label font-bold text-gray-700">Taste</label>
                        <input type="text" name='taste' className="input bg-white w-full border-none" placeholder="Enter coffee taste" />
                    </div>

                    {/* price Field */}
                    <div className="form-control">
                        <label className="label font-bold text-gray-700">Price</label>
                        <input type="text" name='price' className="input bg-white w-full border-none" placeholder="Enter coffee price" />
                    </div>

                    {/* Details Field */}
                    <div className="form-control">
                        <label className="label font-bold text-gray-700">Details</label>
                        <input type="text" name='details' className="input bg-white w-full border-none" placeholder="Enter coffee details" />
                    </div>

                    {/* Photo URL Field (Full Width) */}
                    <div className="form-control md:col-span-2">
                        <label className="label font-bold text-gray-700">Photo</label>
                        <input type="text" name='photo' className="input bg-white w-full border-none" placeholder="Enter photo URL" />
                    </div>
                </div>

                {/* Submit Button */}
                <div className="mt-6">
                    <button type="submit" className="btn btn-block bg-[#D2B48C] border-2 border-[#331A15] text-[#331A15] hover:bg-[#b89d7a] font-bold">
                        Add Coffee
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;