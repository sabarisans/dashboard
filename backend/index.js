const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const mongoose = require("mongoose");
const dashboardModel = require("./models/Dashboard.Model");

app.get("/info", async (req, res) => {
    const info = await dashboardModel.find();
    res.json({ error: false, info });
});
mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Connected"))
    .catch((e) => console.log(e.message, "Not connected"));

const port = 8000 || process.env.PORT;
app.listen(port, (e) => console.log("Server running"));
