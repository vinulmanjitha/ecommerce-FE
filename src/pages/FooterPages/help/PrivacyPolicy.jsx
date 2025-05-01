import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="p-8 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-6">Privacy Policy</h1>
            <p className="mb-4 text-center text-gray-600">
                We are committed to protecting your privacy. This Privacy Policy explains how we collect and use your personal information.
            </p>

            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
                <p>We may collect personal information such as your name, email address, and payment information to provide our services.</p>
            </div>

            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">How We Use Your Information</h2>
                <p>We use your information to provide, improve, and personalize our services, as well as for communication and marketing purposes.</p>
            </div>

            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Data Security</h2>
                <p>We take the protection of your personal data seriously and implement appropriate security measures to safeguard it.</p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
