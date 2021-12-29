require("dotenv").config();

const express = require("express");
const schedule = require("node-schedule");

const PORT = process.env.PORT || 3000;

const app = express();

// Runing every minute
schedule.scheduleJob("* * * * *", () => {
  console.log("The answer to life, the universe, and everything!");
});

app.get("/schedule", async (req, res) => {
  console.log(`Hello World!`);
});

app.listen(PORT, () => {
  console.log(`App runing on port ${PORT}`);
});
