import React from 'react';

const TermsAndConditions = () => {
    return (
        <div className="p-8 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-6">Terms and Conditions</h1>
            <p className="mb-4 text-center text-gray-600">
                Please read these terms and conditions carefully before using our website.
            </p>

            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Introduction</h2>
                <p>Welcome to our website. By accessing or using our services, you agree to abide by the terms outlined here.</p>
            </div>

            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">User Responsibilities</h2>
                <p>As a user of our website, you agree to use our services for lawful purposes only and adhere to our terms.</p>
            </div>

            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Privacy</h2>
                <p>We respect your privacy. Please read our <a href="/privacy-policy" className="text-blue-600 underline">Privacy Policy</a> for more details on how we handle your personal data.</p>
            </div>
        </div>
    );
};

export default TermsAndConditions;
