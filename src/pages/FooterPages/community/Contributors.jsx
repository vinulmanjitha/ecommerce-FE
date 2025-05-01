import React from 'react';

const Contributors = () => {
    return (
        <div className="p-8 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-6">Contributors</h1>
            <p className="text-center mb-4 text-gray-600">
                Meet the people who help make this community and platform better every day.
            </p>
            <ul className="space-y-4">
                <li className="border p-4 rounded shadow">
                    <h2 className="font-semibold">Aarav Sinha</h2>
                    <p className="text-gray-500">Lead Developer & Community Mentor</p>
                </li>
                <li className="border p-4 rounded shadow">
                    <h2 className="font-semibold">Neha Kapoor</h2>
                    <p className="text-gray-500">Content Writer & Product Research</p>
                </li>
            </ul>
        </div>
    );
};

export default Contributors;
