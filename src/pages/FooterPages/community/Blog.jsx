import React from 'react';

const Blog = () => {
    return (
        <div className="p-8 max-w-4xl mx-auto bg-white rounded-2xl shadow-md">
            <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">Blog</h1>

            <p className="text-center mb-8 text-gray-600">
                Explore insightful articles, tips, and the latest updates about our products and the tech industry.
            </p>

            <div className="space-y-6">
                <div className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Top 5 Laptops for 2025</h2>
                    <p className="text-gray-600 mb-2">📅 Published on April 15, 2025</p>
                    <p className="text-gray-700 mb-4">
                        Discover the best laptops to buy in 2025 based on performance, design, and value for money.
                        We break down the top models to help you choose the perfect device.
                    </p>
                    <a href="#" className="text-blue-600 font-medium hover:underline">Read More →</a>
                </div>

                <div className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Behind the Scenes: Our Product Journey</h2>
                    <p className="text-gray-600 mb-2">📅 Published on March 10, 2025</p>
                    <p className="text-gray-700 mb-4">
                        Go behind the curtain to see how we build and launch our products — from concept to market.
                        A look into the challenges, milestones, and innovation driving our team forward.
                    </p>
                    <a href="#" className="text-blue-600 font-medium hover:underline">Read More →</a>
                </div>

                <div className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">How AI is Shaping the Future of E-Commerce</h2>
                    <p className="text-gray-600 mb-2">📅 Published on February 20, 2025</p>
                    <p className="text-gray-700 mb-4">
                        Artificial Intelligence is revolutionizing how online businesses operate. Learn how AI is used for personalization,
                        customer service, inventory management, and fraud detection.
                    </p>
                    <a href="#" className="text-blue-600 font-medium hover:underline">Read More →</a>
                </div>
            </div>
        </div>
    );
};

export default Blog;
