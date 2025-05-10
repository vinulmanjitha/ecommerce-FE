import React, { useEffect, useState } from 'react';
import ScrollToTop from "react-scroll-to-top";
import { getLaptopById, getLaptopByImageId } from '../services/workflow/LaptopService';
import { useParams } from 'react-router-dom';

const Item = () => {
    const [laptopItem, setLaptopItem] = useState(null);
    const [laptopImage, setLaptopImage] = useState(null);

    const { id } = useParams();


    useEffect(() => {
        let imageURL;

        const fetchLaptopById = async () => {
            try {
                const result = await getLaptopById(id);
                const blob = await getLaptopByImageId(id);
                imageURL = URL.createObjectURL(blob);
                setLaptopItem(result);
                setLaptopImage(imageURL);
            } catch (error) {
                console.error("Failed to fetch laptop details or image:", error);
            }
        };

        fetchLaptopById();

        return () => {
            if (imageURL) {
                URL.revokeObjectURL(imageURL);
            }
        };
    }, [id]);


    if (!laptopItem) {
        return <div>Loading...</div>;
    }

    return (
        <div className="bg-white">
            <div className="pt-6">
                {/* Image Gallery */}
                <div className="mx-auto mt-12 max-w-2xl sm:px-6 lg:px-8 flex justify-center items-center">
                    <img
                        src={laptopImage}
                        alt={`${laptopItem.brand} ${laptopItem.model}`}
                        className="aspect-[4/5] w-full max-w-md object-cover sm:rounded-lg"
                    />
                </div>


                {/* Product Info */}
                <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{laptopItem.brand} {laptopItem.model}</h1>
                        <div>
                            <h3 class="sr-only">Description</h3>

                            <div class="space-y-6">
                                <p class="text-base text-gray-900">{laptopItem.description}</p>
                            </div>
                        </div>

                    </div>


                    {/* Options Section */}
                    <div className="mt-4 lg:row-span-3 lg:mt-0">
                        <p className="text-3xl tracking-tight text-gray-900">Rs.{laptopItem.price}/-</p>

                        {/* Specs */}
                        <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Password requirements:</h2>
                        <ul class="max-w-md space-y-1 text-black-900 list-disc list-inside dark:text-gray-800">
                            <li>
                                {laptopItem.os}
                            </li>
                            <li>
                                {laptopItem.processor} Processor
                            </li>
                            <li>
                                {laptopItem.ramSize} GB RAM
                            </li>
                            <li>
                                {laptopItem.storageSize} GB {laptopItem.storageType} Memory
                            </li>
                            <li>
                                {laptopItem.vga} Graphics
                            </li>
                            <li>
                                <b>{laptopItem.accessories} FREE</b>
                            </li>
                        </ul>

                        {/* Add to Cart Button */}
                        <button
                            type="submit"
                            className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
            <ScrollToTop
                smooth
                color=" rgb(211, 210, 210)"
                height={20}
                style={{
                    backgroundColor: ' rgba(93, 92, 92, 0.65)',
                    borderRadius: '1rem',
                    boxShadow: '0 4px 12px rgba(15, 14, 14, 0.1)',
                    borderRadius: '9999px',
                    zIndex: 50,
                }}
                className="dark:bg-neutral-800 dark:text-white"
            />
        </div>
    );
};

export default Item;
