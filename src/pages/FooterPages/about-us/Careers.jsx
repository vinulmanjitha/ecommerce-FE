import React from 'react';

const Careers = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6">Careers</h1>
      <p className="text-gray-700 mb-4">
        At our company, we’re building more than just an eCommerce platform — we’re building a culture of creativity, collaboration, and constant learning.
      </p>
      <p className="text-gray-700 mb-4">
        We’re a diverse team of innovators, problem-solvers, and go-getters who are passionate about making an impact. Whether you're a seasoned developer or a curious intern, there’s a place for you here.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Current Openings</h2>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li><strong>Frontend Developer (React)</strong> – Create beautiful, responsive interfaces with React and Tailwind.</li>
        <li><strong>Backend Engineer (Spring Boot)</strong> – Build scalable APIs and work with databases like Oracle and PostgreSQL.</li>
        <li><strong>Product Designer</strong> – Design intuitive user experiences with a keen eye for detail.</li>
        <li><strong>Content Strategist</strong> – Plan and craft compelling content that connects with users.</li>
      </ul>

      <p className="text-gray-700">
        Interested in joining us? Email your resume and portfolio to <a href="mailto:careers@example.com" className="text-blue-600 underline">careers@example.com</a>. We're always excited to meet new talent!
      </p>
    </div>
  );
};

export default Careers;
