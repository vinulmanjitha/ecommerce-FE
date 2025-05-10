import React from 'react';

const Events = () => {
    return (
        <div className="p-8 max-w-4xl mx-auto bg-white rounded-2xl shadow-md">
            <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">Upcoming Events</h1>
            
            <p className="text-center mb-8 text-gray-600">
                Stay informed about our latest webinars, product launches, and community meetups.
            </p>

            <div className="space-y-6">
                <div className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Tech Webinar 2025</h2>
                    <p className="text-gray-600">📅 Date: <span className="font-medium">June 10, 2025</span></p>
                    <p className="text-gray-600">🌐 Location: <span className="font-medium">Online</span></p>
                </div>

                <div className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Annual Community Meetup</h2>
                    <p className="text-gray-600">📅 Date: <span className="font-medium">August 23, 2025</span></p>
                    <p className="text-gray-600">📍 Location: <span className="font-medium">Bangalore, India</span></p>
                </div>
            </div>
        </div>
    );
};

export default Events;
