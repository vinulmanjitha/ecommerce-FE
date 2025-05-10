import React from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
    return (
        <section className="bg-white py-8 antialiased md:py-16">
            <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Shopping Cart</h2>

                <div class="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                    <div class="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                        <div class="space-y-6">



                            <div class="rounded-xl border border-gray-200 bg-white p-6 shadow-md">
                                <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                                    <a href="#" class="shrink-0">
                                        <img class="h-24 w-24" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" alt="iMac image" />
                                    </a>

                                    <div class="flex-1 min-w-0 space-y-2">
                                        <a href="#" class="block text-base font-semibold text-black hover:underline">
                                            PC system All in One APPLE iMac (2023) mqrq3ro/a, Apple M3, 24" Retina 4.5K, 8GB, SSD 256GB, 10-core GPU, Keyboard layout INT
                                        </a>
                                        <div class="flex gap-4 text-sm text-gray-600">
                                            <button class="inline-flex items-center hover:text-black hover:underline">
                                                <svg class="me-1.5 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                                                </svg>
                                                Add to Favorites
                                            </button>
                                            <button class="inline-flex items-center text-red-600 hover:underline">
                                                <svg class="me-1.5 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
                                                </svg>
                                                Remove
                                            </button>
                                        </div>
                                    </div>

                                    <div class="flex items-center gap-6">
                                        <div class="flex items-center border rounded-md px-2 py-1">
                                            <button type="button" class="h-6 w-6 flex items-center justify-center rounded hover:bg-gray-100 text-black">
                                                <svg class="h-3 w-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M1 1h16" />
                                                </svg>
                                            </button>
                                            <input type="text" class="w-10 text-center border-0 bg-transparent text-black font-medium focus:outline-none" value="2" />
                                            <button type="button" class="h-6 w-6 flex items-center justify-center rounded hover:bg-gray-100 text-black">
                                                <svg class="h-3 w-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                                </svg>
                                            </button>
                                        </div>

                                        <p class="text-base font-bold text-black">$1,499</p>
                                    </div>

                                </div>
                            </div>



                            <div class="rounded-xl border border-gray-200 bg-white p-6 shadow-md">
                                <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                                    <a href="#" class="w-20 shrink-0">
                                        <img class="h-20 w-20" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-light.svg" alt="iPhone image" />
                                    </a>

                                    <div class="flex-1 min-w-0 space-y-2">
                                        <a href="#" class="block text-base font-semibold text-black hover:underline">
                                            APPLE iPhone 15 5G phone, 256GB, Gold
                                        </a>
                                        <div class="flex gap-4 text-sm text-gray-600">
                                            <button class="inline-flex items-center hover:text-black hover:underline">
                                                <svg class="me-1.5 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                                                </svg>
                                                Add to Favorites
                                            </button>
                                            <button class="inline-flex items-center text-red-600 hover:underline">
                                                <svg class="me-1.5 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
                                                </svg>
                                                Remove
                                            </button>
                                        </div>
                                    </div>

                                    <div class="flex items-center gap-6">
                                        <div class="flex items-center border rounded-md px-2 py-1">
                                            <button type="button" class="h-6 w-6 flex items-center justify-center rounded hover:bg-gray-100 text-black">
                                                <svg class="h-3 w-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M1 1h16" />
                                                </svg>
                                            </button>
                                            <input type="text" class="w-10 text-center border-0 bg-transparent text-black font-medium focus:outline-none" value="3" />
                                            <button type="button" class="h-6 w-6 flex items-center justify-center rounded hover:bg-gray-100 text-black">
                                                <svg class="h-3 w-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                                </svg>
                                            </button>
                                        </div>

                                        <p class="text-base font-bold text-black">$2,997</p>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>

                    <div class="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">

                        <div class="space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow-md">
                            <p class="text-xl font-semibold text-black">Order summary</p>

                            <div class="space-y-4">
                                <div class="space-y-2">
                                    <dl class="flex items-center justify-between">
                                        <dt class="text-base text-gray-500">Original price</dt>
                                        <dd class="text-base font-medium text-black">$7,592.00</dd>
                                    </dl>

                                    <dl class="flex items-center justify-between">
                                        <dt class="text-base text-gray-500">Savings</dt>
                                        <dd class="text-base font-medium text-green-600">-$299.00</dd>
                                    </dl>

                                    <dl class="flex items-center justify-between">
                                        <dt class="text-base text-gray-500">Store Pickup</dt>
                                        <dd class="text-base font-medium text-black">$99</dd>
                                    </dl>

                                    <dl class="flex items-center justify-between">
                                        <dt class="text-base text-gray-500">Tax</dt>
                                        <dd class="text-base font-medium text-black">$799</dd>
                                    </dl>
                                </div>

                                <dl class="flex items-center justify-between border-t border-gray-200 pt-4">
                                    <dt class="text-base font-bold text-black">Total</dt>
                                    <dd class="text-base font-bold text-black">$8,191.00</dd>
                                </dl>
                            </div>

                            <a href="#" class="flex w-full items-center justify-center rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400">
                                Proceed to Checkout
                            </a>

                            <div class="flex items-center justify-center gap-2 text-sm text-gray-600">
                                <span>or</span>
                                <Link to="/laptops" class="flex items-center gap-2 font-medium text-black underline hover:no-underline">
                                    Continue Shopping
                                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                                    </svg>
                                </Link>  
                            </div>
                        </div>

                        <div class="space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow-md">
                            <form class="space-y-4">
                                <div>
                                    <label for="voucher" class="block mb-2 text-sm font-medium text-black">
                                        Do you have a voucher or gift card?
                                    </label>
                                    <input
                                        type="text"
                                        id="voucher"
                                        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-black focus:border-black focus:ring-black"
                                        placeholder="Enter your code"
                                        required
                                    />
                                </div>
                                <button type="submit" class="flex w-full items-center justify-center rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400">
                                    Apply Code
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )

}

export default Cart
