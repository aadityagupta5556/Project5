const express = require("express");
const bodyParser = require("body-parser");
const route = require("./routes/route.js");
const mongoose = require("mongoose");
const app = express();
const multer =require("multer");

app.use(bodyParser.json()); // bodyParser means translator.
app.use(multer().any());

mongoose.connect(
    "mongodb+srv://functionup:Qa8Frz5zwqHmw33u@cluster0.3pryrpd.mongodb.net/group58Database",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("MongoDb is connected"))
  .catch( err => console.log(err));


app.use("/", route);

app.listen(process.env.PORT || 3000, function () {
  console.log("Express app running on port " + (process.env.PORT || 3000));
});