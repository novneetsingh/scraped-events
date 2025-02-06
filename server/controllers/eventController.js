const Event = require("../models/Event");
const Subscription = require("../models/Subscription");

// get all events
exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find();

    res.status(200).json({
      message: "Events fetched successfully",
      data: events,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// subscribe an user through email
exports.subscribeUser = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    const subscription = await Subscription.create({ email });
    res.status(201).json({
      message: "User subscribed successfully",
      data: subscription,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
