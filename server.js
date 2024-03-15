const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const compression = require("compression");
const serverless = require("serverless-http");
const app = express();
const path = require("path");
app.use(compression({ threshold: 100 }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
if (process.env.NODE_ENV == "production") {
    console.log = function () { };
}
app.get("/", (req, res) => {
    res.send("Hello Ginno Car Rental Project!");
});

require('./routes/userRoute')(app);
// require('./routes/adminRoute')(app);
// require('./routes/partnerRoute')(app);



mongoose.Promise = global.Promise;
mongoose.set("strictQuery", true);

mongoose.connect(process.env.DB_URL, /*{ useNewUrlParser: false, useUnifiedTopology: false, }*/).then((data) => {
    console.log(`Shashikant-coin-switch-Project Mongodb Connected With Server: ${data.connection.host}`);
});

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}!`);
});

module.exports = app;
module.exports.handler = serverless(app)