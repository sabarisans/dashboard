const mongoose = require("mongoose");
const dashboardSchema = mongoose.Schema(
    {
        end_year: Number,
        intensity: Number,
        sector: String,
        topic: String,
        insight: String,
        url: String,
        region: String,
        start_year: Number,
        impact: Number,
        added: Date,
        published: Date,
        country: String,
        relevance: Number,
        pestle: String,
        source: String,
        title: String,
        likelihood: Number,
    },
    { timestamps: true }
);

const dashboardModel = mongoose.model("info", dashboardSchema);

module.exports = dashboardModel;
