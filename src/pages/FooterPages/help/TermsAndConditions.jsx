import React from 'react';

const TermsAndConditions = () => {
    return (
        <div className="p-8 max-w-4xl mx-auto bg-white rounded-2xl shadow-md">
            <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">Terms and Conditions</h1>

            <p className="mb-8 text-center text-gray-600">
                Please read these terms and conditions carefully before using our website or services.
            </p>

            <div className="space-y-6">
                <section className="border border-gray-200 p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-semibold mb-2 text-gray-800">Introduction</h2>
                    <p className="text-gray-700">
                        Welcome to our website. By accessing or using our services, you agree to comply with and be bound by these
                        terms. If you do not agree with any part of the terms, you must not use our services.
                    </p>
                </section>

                <section className="border border-gray-200 p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-semibold mb-2 text-gray-800">User Responsibilities</h2>
                    <p className="text-gray-700">
                        You agree to use our services only for lawful purposes and in a way that does not infringe the rights of,
                        restrict, or inhibit anyone else's use of the website. You must not misuse the website by introducing viruses
                        or attempting unauthorized access.
                    </p>
                </section>

                <section className="border border-gray-200 p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-semibold mb-2 text-gray-800">Intellectual Property</h2>
                    <p className="text-gray-700">
                        All content on this site, including text, graphics, logos, and images, is our property or that of our licensors
                        and is protected by copyright and other laws. You may not reproduce, distribute, or create derivative works
                        without our express written permission.
                    </p>
                </section>

                <section className="border border-gray-200 p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-semibold mb-2 text-gray-800">Privacy</h2>
                    <p className="text-gray-700">
                        Your privacy is important to us. Please review our
                        {' '}
                        <a href="/privacy-policy" className="text-blue-600 underline">Privacy Policy</a>
                        {' '}to understand how we collect, use, and safeguard your information.
                    </p>
                </section>

                <section className="border border-gray-200 p-6 rounded-lg shadow-sm">
                    <h2 className="text-2xl font-semibold mb-2 text-gray-800">Changes to Terms</h2>
                    <p className="text-gray-700">
                        We may update these Terms and Conditions from time to time. Continued use of the website after changes
                        indicates your acceptance of the revised terms.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default TermsAndConditions;
