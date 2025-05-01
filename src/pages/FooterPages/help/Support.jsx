import React from 'react';

const Support = () => {
    return (
        <div className="p-8 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-6">Support</h1>
            <p className="mb-4 text-center text-gray-600">
                Our support team is here to assist you with any issues or questions you may have.
            </p>

            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Contact Support</h2>
                <p>If you're experiencing issues, please reach out to our support team:</p>
                <p>Email: <a href="mailto:support@example.com" className="text-blue-600 underline">support@example.com</a></p>
                <p>Phone: <a href="tel:+11234567890" className="text-blue-600 underline">(123) 456-7890</a></p>
            </div>

            <div>
                <h2 className="text-xl font-semibold mb-2">FAQs</h2>
                <p>Visit our <a href="/faqs" className="text-blue-600 underline">FAQs page</a> for answers to common questions.</p>
            </div>
        </div>
    );
};

export default Support;
