import React from 'react';

const ReturnRefundPolicy = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6">Return & Refund Policy</h1>

      <p className="mb-4 text-gray-700">
        Thank you for shopping with us. If you are not entirely satisfied with your purchase, we're here to help.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Returns</h2>
      <p className="mb-4 text-gray-700">
        You have 30 calendar days to return an item from the date you received it. To be eligible for a return,
        your item must be unused and in the same condition that you received it. Your item must be in the original packaging.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Refunds</h2>
      <p className="mb-4 text-gray-700">
        Once we receive your item, we will inspect it and notify you of the status of your refund. If your return is approved,
        we will initiate a refund to your original method of payment. You will receive the credit within a certain number of days,
        depending on your card issuer's policies.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Shipping</h2>
      <p className="text-gray-700">
        You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable.
      </p>
    </div>
  );
};

export default ReturnRefundPolicy;
