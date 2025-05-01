import React from 'react';

const Blog = () => {
    return (
        <div className="p-8 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-6">Blog</h1>
            <p className="text-center mb-4 text-gray-600">
                Explore articles, tips, and news about our products and the tech industry.
            </p>
            <div className="space-y-6">
                <div className="border p-4 rounded shadow">
                    <h2 className="text-xl font-semibold">Top 5 Laptops for 2025</h2>
                    <p className="text-gray-600">Published on April 15, 2025</p>
                </div>
                <div className="border p-4 rounded shadow">
                    <h2 className="text-xl font-semibold">Behind the Scenes: Our Product Journey</h2>
                    <p className="text-gray-600">Published on March 10, 2025</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
