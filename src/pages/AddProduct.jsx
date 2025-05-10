import React, { useState } from "react";
import { AddNewLaptop } from "../services/workflow/LaptopService";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/16/solid'


const AddProduct = () => {
    const navigate = useNavigate();
    const notify = () => toast("Laptop Added Successfully!");
    const [file, setFile] = useState();
    function getFile(event) {
        setFile(URL.createObjectURL(event.target.files[0]))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const form = event.target;
        const formData = new FormData(form);
    
        // Construct the laptop details object manually
        const laptopDetails = {
            brand: form.brand.value,
            model: form.model.value,
            processor: form.processor.value,
            ramSize: form.ramSize.value,
            storageSize: form.storageSize.value,
            storageType: form.storageType.value,
            price: form.price.value,
            quantity: form.quantity.value,
            vga: form.vga.value,
            os: form.os.value,
            additionalStorage: form.additionalStorage.value,
            accessories: form.accessories.value,
            description: form.description.value
        };
    
        const finalFormData = new FormData();
        finalFormData.append("request", new Blob([JSON.stringify(laptopDetails)], { type: "application/json" }));
        finalFormData.append("imageFile", form.imageFile.files[0]);
    
        try {
            const response = await AddNewLaptop(finalFormData); 
            notify();
            setTimeout(() => {
                navigate('/laptops');
            }, 3000);
        } catch (err) {
            console.error("Upload failed", err);
        }
    };
    
    

    return (
        <div className="min-h-screen p-4 md:p-8 ">
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Brand</label>
                        <input type="text" id="brand" name="brand" className="input" required />
                    </div>
                    <div>
                        <label htmlFor="model" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Model</label>
                        <input type="text" id="model" name="model" className="input" required />
                    </div>
                    <div>
                        <label htmlFor="processor" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Processor</label>
                        <input type="text" id="processor" name="processor" className="input" required />
                    </div>
                    <div>
                        <label htmlFor="ramSize" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">RAM Size (GB)</label>
                        <input type="number" id="ramSize" name="ramSize" className="input" required />
                    </div>
                    <div>
                        <label htmlFor="storageSize" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Storage Size (GB)</label>
                        <input type="number" id="storageSize" name="storageSize" className="input" required />
                    </div>
                    <div>
                        <label htmlFor="storageType" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Storage Type</label>
                        <input type="text" id="storageType" name="storageType" className="input" required />
                    </div>
                    <div>
                        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Price ($)</label>
                        <input type="number" step="0.01" id="price" name="price" className="input" required />
                    </div>
                    <div>
                        <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Quantity</label>
                        <input type="number" id="quantity" name="quantity" className="input" required />
                    </div>
                    <div>
                        <label htmlFor="vga" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">VGA</label>
                        <input type="text" id="vga" name="vga" className="input" required />
                    </div>
                    <div>
                        <label htmlFor="os" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Operating System</label>
                        <input type="text" id="os" name="os" className="input" required />
                    </div>
                    <div>
                        <label htmlFor="additionalStorage" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Additional Storage</label>
                        <input type="text" id="additionalStorage" name="additionalStorage" className="input" required />
                    </div>
                    <div>
                        <label htmlFor="accessories" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Accessories</label>
                        <input type="text" id="accessories" name="accessories" className="input" required />
                    </div>
                </div>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div className="text-center">
                        <PhotoIcon aria-hidden="true" className="mx-auto size-12 text-gray-300" />
                        <div className="mt-4 flex flex-col items-center gap-2 text-sm/6 text-gray-600">
                            <label
                                htmlFor="file-upload"
                                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-indigo-500"
                            >
                                <span>Upload a file</span>
                                <input id="file-upload" name="imageFile" type="file" className="sr-only" onChange={getFile} />
                                </label>
                            <p>or drag and drop</p>
                            {file && (
                                <img src={file} alt="Preview" className="max-h-40 rounded-md object-contain border border-gray-200 p-1" />
                            )}
                        </div>
                        <p className="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                    </div>
                </div>

                <div>
                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Description</label>
                    <textarea id="description" name="description" className="input h-24 resize-none" required></textarea>
                </div>
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={notify}>
                    Submit
                </button>
                <ToastContainer />
            </form>
        </div>
    )
}

export default AddProduct
