// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import EventCard from "../Components/EventCard";
import EmailModal from "../Modals/EmailModal";

const Home = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  // Use state to track which events have a submitted email
  const [submittedEmails, setSubmittedEmails] = useState({});

  // Fetch events from the API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/events`
        );
        // Assuming your API response is structured as: { data: [...] }
        let eventsData = response.data.data;
        // If not an array, force it to be one
        if (!Array.isArray(eventsData)) {
          eventsData = [eventsData];
        }
        setEvents(eventsData);
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };

    fetchEvents();
  }, []);

  // Handle Get Tickets click on an event card
  const handleGetTickets = (event) => {
    // Check our state record for email submission using ticketLink as the key
    if (submittedEmails[event.ticketLink]) {
      // Redirect directly in a new tab
      window.open(event.ticketLink, "_blank");
    } else {
      setSelectedEvent(event);
      setShowModal(true);
    }
  };

  // Handle modal submit
  const handleModalSubmit = async (email, event) => {
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/events/subscribe`, {
        email,
      });
      // Record the submission in our state
      setSubmittedEmails((prev) => ({
        ...prev,
        [event.ticketLink]: email,
      }));
      // Redirect the user to the ticket link in a new tab
      window.open(event.ticketLink, "_blank");
    } catch (err) {
      alert("Something went wrong. Please try again.");
    }
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-extrabold text-center mb-10 text-indigo-600">
          Sydney Events
        </h1>
        {loading && (
          <p className="text-center text-xl text-gray-600">Loading events...</p>
        )}
        {error && <p className="text-center text-xl text-red-500">{error}</p>}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <EventCard
              key={index}
              event={event}
              onGetTickets={handleGetTickets}
            />
          ))}
        </div>
        {showModal && selectedEvent && (
          <EmailModal
            event={selectedEvent}
            onClose={() => setShowModal(false)}
            onSubmit={handleModalSubmit}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
