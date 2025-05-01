import React from 'react';

const Events = () => {
    return (
        <div className="p-8 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-6">Upcoming Events</h1>
            <p className="text-center mb-4 text-gray-600">
                Stay informed about our latest webinars, product launches, and community meetups.
            </p>
            <div className="space-y-6">
                <div className="border p-4 rounded shadow">
                    <h2 className="text-xl font-semibold">Tech Webinar 2025</h2>
                    <p>Date: June 10, 2025</p>
                    <p>Location: Online</p>
                </div>
                <div className="border p-4 rounded shadow">
                    <h2 className="text-xl font-semibold">Annual Community Meetup</h2>
                    <p>Date: August 23, 2025</p>
                    <p>Location: Bangalore, India</p>
                </div>
            </div>
        </div>
    );
};

export default Events;
