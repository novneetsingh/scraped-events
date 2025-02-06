const cron = require("node-cron");
const Event = require("../models/Event");
const axios = require("axios");
const cheerio = require("cheerio");

// run cron scheduler and create events every 24 hour
exports.eventScraper = () => {
  cron.schedule("0 0 * * *", async () => {
    console.log(
      `🔄 Running daily event scraper... at ${new Date().toLocaleString()}`
    );

    try {
      const url =
        "https://www.eventbrite.com.au/d/australia--sydney/all-events/";
      const response = await axios.get(url);

      const $ = cheerio.load(response.data);

      const events = [];

      $(".Stack_root__1ksk7").each((index, element) => {
        const ticketLink = $(element).find("a").attr("href");

        const title = $(element).find("h3").text().trim();

        const date = $(element)
          .find("p")
          .filter(function () {
            const text = $(this).text().trim().toLowerCase();
            return (
              text.includes("mon") ||
              text.includes("tue") ||
              text.includes("wed") ||
              text.includes("thu") ||
              text.includes("fri") ||
              text.includes("sat") ||
              text.includes("sun")
            );
          })
          .text()
          .trim();

        const location =
          $(element).find("p:last").text().trim() + ", Sydney, Australia";

        if (title && date && ticketLink && location) {
          const event = { title, date, location, ticketLink };
          if (
            !events.some(
              (existingEvent) =>
                existingEvent.title === event.title &&
                existingEvent.date === event.date
            )
          ) {
            events.push(event);
          }
        }
      });

      // first delete all events and then create new events
      await Event.deleteMany({});
      await Event.insertMany(events);

      console.log("✅ Daily event scraper completed.");
    } catch (error) {
      console.error("❌ Error in event scraper:", error.message);
    }
  });
};
