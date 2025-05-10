import React, { useEffect, useState } from 'react';
import { GetAllLaptops } from '../services/workflow/LaptopService';
import { useNavigate } from 'react-router-dom';
import ScrollToTop from "react-scroll-to-top";

const Laptops = () => {
    const [laptopDetails, setLaptopdetails] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchAllLaptopDetails();
    }, []);

    const fetchAllLaptopDetails = async () => {
        try {
            const result = await GetAllLaptops();
            setLaptopdetails(result);
            console.log("responseeee", result);
        } catch (error) {
            console.error("Failed to fetch laptop details:", error);
        }
    };

    const handleOnClick = (id) => {
        navigate(`/item/${id}`);
    };

    return (
        <div className="bg-zinc-50 min-h-screen p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-6">
                {laptopDetails.map((laptop) => (
                    <div
                        key={laptop.id}
                        onClick={() => handleOnClick(laptop.id)}
                        className="w-full bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg dark:border-gray-200 cursor-pointer transition duration-300"
                    >
                        <img
                            className="p-4 rounded-t-lg h-40 w-full object-contain"
                            src={
                                laptop.imageData
                                    ? `data:${laptop.imageType};base64,${laptop.imageData}`
                                    : "https://via.placeholder.com/300"
                            }
                            alt={`${laptop.brand} ${laptop.model}`}
                        />

                        <div className="px-4 pb-4">
                            <h5 className="text-base font-semibold text-gray-900 dark:text-black truncate">
                                {laptop.brand} {laptop.model}
                            </h5>


                            <div className="flex items-center justify-between">
                                <span className="text-sm font-bold text-gray-900 dark:text-black">Rs {laptop.price}/-</span>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        alert("Add to cart clicked!");
                                    }}
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium rounded-md p-2 dark:bg-blue-600"
                                    aria-label="Add to cart"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-4 h-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.25 3h1.386a.75.75 0 01.728.546L5.91 8.25m0 0l1.102 4.406a.75.75 0 00.728.546h9.302a.75.75 0 00.728-.546L20.636 6H6.272M5.91 8.25H19.5M8.25 21a.75.75 0 100-1.5.75.75 0 000 1.5zm9 0a.75.75 0 100-1.5.75.75 0 000 1.5z"
                                        />
                                    </svg>
                                </button>

                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <ScrollToTop
                smooth
                color="rgb(211, 210, 210)"
                height={20}
                style={{
                    backgroundColor: 'rgba(93, 92, 92, 0.65)',
                    borderRadius: '9999px',
                    boxShadow: '0 4px 12px rgba(15, 14, 14, 0.1)',
                    zIndex: 50,
                }}
                className="dark:bg-neutral-800 dark:text-white"
            />
        </div>

    );

};

export default Laptops;
