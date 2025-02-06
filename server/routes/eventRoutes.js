const express = require("express");

const router = express.Router();

const { getEvents, subscribeUser } = require("../controllers/eventController");

router.get("/", getEvents);
router.post("/subscribe", subscribeUser);

module.exports = router;
