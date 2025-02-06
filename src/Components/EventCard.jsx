import React from "react";

const EventCard = ({ event, onGetTickets }) => {
  const { title, date, location } = event;

  return (
    <div className="bg-white rounded-lg shadow-lg flex flex-col h-full transform hover:scale-105 transition duration-300">
      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-2xl font-bold mb-3 text-gray-800">{title}</h2>
        <p className="text-gray-600 mb-1">
          <span className="font-semibold">Date:</span> {date}
        </p>
        <p className="text-gray-600 mb-4">
          <span className="font-semibold">Location:</span> {location}
        </p>
        <div className="mt-auto">
          <button
            onClick={() => onGetTickets(event)}
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-700 transition"
          >
            GET TICKETS
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
