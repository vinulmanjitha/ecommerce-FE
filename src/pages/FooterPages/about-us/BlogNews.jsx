import React from 'react';

const BlogNews = () => {
  const posts = [
    {
      title: "How We're Improving Customer Experience in 2025",
      date: "April 15, 2025",
      summary: "Learn about the latest tools, services, and features we’ve implemented to streamline your shopping experience.",
    },
    {
      title: "Top 5 Tech Gadgets of the Year",
      date: "March 28, 2025",
      summary: "We review this year’s must-have gadgets—from smart wearables to next-gen laptops. See what made the list!",
    },
    {
      title: "Behind the Scenes: Our Warehouse Automation",
      date: "February 10, 2025",
      summary: "Take a peek at how we're using AI and robotics to speed up shipping and ensure order accuracy.",
    },
    {
      title: "Employee Spotlight: Meet the Team",
      date: "January 25, 2025",
      summary: "Each month we introduce you to the amazing people behind our platform. This month: Asha, our Lead UX Designer.",
    },
    {
      title: "Sustainability in eCommerce: Our Commitment",
      date: "December 12, 2024",
      summary: "From eco-friendly packaging to energy-efficient operations, here’s how we’re reducing our carbon footprint.",
    },
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6">Blog / News</h1>
      <div className="space-y-6">
        {posts.map((post, index) => (
          <div key={index} className="border-b pb-4">
            <h2 className="text-2xl font-semibold text-gray-800">{post.title}</h2>
            <p className="text-sm text-gray-500 mb-1">{post.date}</p>
            <p className="text-gray-700">{post.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogNews;
