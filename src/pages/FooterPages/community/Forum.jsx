import React from 'react';

const Forum = () => {
    return (
        <div className="p-8 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-6">Community Forum</h1>
            <p className="text-center mb-4 text-gray-600">
                Join the discussion! Connect with fellow users, ask questions, and share your knowledge.
            </p>
            <div className="space-y-4">
                <div className="p-4 border rounded shadow">
                    <h2 className="font-semibold">How do I track my order?</h2>
                    <p className="text-gray-500">Started by JaneDoe123 • 5 replies</p>
                </div>
                <div className="p-4 border rounded shadow">
                    <h2 className="font-semibold">Laptop recommendations for students</h2>
                    <p className="text-gray-500">Started by TechGuy • 8 replies</p>
                </div>
            </div>
        </div>
    );
};

export default Forum;
