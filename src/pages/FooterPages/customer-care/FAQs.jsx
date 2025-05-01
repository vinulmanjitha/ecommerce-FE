import React from 'react';

const FAQs = () => {
  const faqs = [
    {
      question: "How can I track my order?",
      answer: "Once your order is shipped, we will send you an email with tracking details.",
    },
    {
      question: "What is your return policy?",
      answer: "We accept returns within 30 days of delivery. The item must be unused and in original condition.",
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes! You can contact us via email at support@example.com or call us at (123) 456-7890.",
    },
    {
      question: "Can I change or cancel my order?",
      answer: "Yes, but only before the item is shipped. Please contact our support team as soon as possible.",
    },
  ];

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index}>
            <h2 className="text-xl font-semibold text-gray-800">{faq.question}</h2>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
