import React from 'react';

const ContactUs = () => {
    return (
        <div className="p-8 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
            
            <p className="mb-4 text-center text-gray-600">
                We're here to help and answer any questions you might have. Feel free to reach out to us.
            </p>

            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Our Office</h2>
                <p>123 Tech Avenue, Suite 100<br />Cityname, State, 12345</p>
            </div>

            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
                <p>Email: <a href="mailto:support@example.com" className="text-blue-600 underline">support@example.com</a></p>
                <p>Phone: <a href="tel:+11234567890" className="text-blue-600 underline">(123) 456-7890</a></p>
            </div>

            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-2">Send Us a Message</h2>
                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    <textarea
                        placeholder="Your Message"
                        rows="4"
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                    <button
                        type="button"
                        className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-blue-700"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
