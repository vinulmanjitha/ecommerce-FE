import React from 'react';

const Careers = () => {
  return (
    <div className="px-6 py-12 max-w-5xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-6">Careers at EliteWare</h1>

      <p className="text-lg text-gray-700 mb-6">
        At <span className="font-semibold">EliteWare</span>, we don’t just build laptops — we build the future. We're looking for bold thinkers, problem-solvers, and creatives who are ready to challenge the norm.
      </p>

      <div className="mt-10 text-left space-y-10">
        <div>
          <h2 className="text-2xl font-semibold mb-2">🌍 Work That Matters</h2>
          <p className="text-gray-700">
            Whether you’re designing product experiences, writing code, or helping customers — your work directly impacts how people interact with technology around the world.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">💡 Culture of Innovation</h2>
          <p className="text-gray-700">
            EliteWare is where bold ideas are encouraged and autonomy is rewarded. We invest in creativity, collaboration, and continuous learning.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">🛡️ Benefits That Empower</h2>
          <p className="text-gray-700">
            Competitive pay, flexible work environments, comprehensive healthcare, generous leave, and hardware discounts are just the beginning.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">📍Open Roles</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Full Stack Developer</li>
            <li>UI/UX Designer</li>
            <li>Hardware QA Engineer</li>
            <li>Technical Support Specialist</li>
            <li>Marketing Strategist</li>
          </ul>
          <p className="mt-3">Don’t see a role that fits? Email us at <a href="mailto:careers@eliteware.com" className="text-red-600 hover:underline">careers@eliteware.com</a></p>
        </div>
      </div>

      <p className="mt-12 text-lg text-gray-700">
        Join us — and help redefine what’s possible in personal computing.
      </p>
    </div>
  );
};

export default Careers;
