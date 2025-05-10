import React from 'react';

const ContactUs = () => {
    return (
        <div className="p-8 max-w-4xl mx-auto bg-white rounded-2xl shadow-md">
            <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">Contact Us</h1>
            
            <p className="mb-8 text-center text-gray-600">
                We're here to help and answer any questions you might have. Feel free to reach out to us anytime.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                    <h2 className="text-xl font-semibold mb-2 text-gray-700">Our Office</h2>
                    <p className="text-gray-600">
                        123 Tech Avenue, Suite 100<br />Cityname, State, 12345
                    </p>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-2 text-gray-700">Contact Information</h2>
                    <p className="text-gray-600">
                        Email: <a href="mailto:support@example.com" className="text-blue-600 underline">support@example.com</a>
                    </p>
                    <p className="text-gray-600">
                        Phone: <a href="tel:+11234567890" className="text-blue-600 underline">(123) 456-7890</a>
                    </p>
                </div>
            </div>

            <div>
                <h2 className="text-xl font-semibold mb-4 text-gray-700">Send Us a Message</h2>
                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <textarea
                        placeholder="Your Message"
                        rows="4"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
