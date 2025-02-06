import React, { useState } from "react";

const EmailModal = ({ event, onClose, onSubmit }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (!email) {
      alert("Please enter an email address.");
      return;
    }
    onSubmit(email, event);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      <div className="bg-white rounded-lg p-8 w-11/12 sm:w-96 shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Subscribe for Tickets
        </h2>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
          >
            Submit &amp; Go
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailModal;
