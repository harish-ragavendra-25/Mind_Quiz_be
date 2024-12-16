const express = require('express');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');
const route = require('./Router/route');
require('dotenv').config();
const DB_URL = process.env.DB_URL;

// mongoose.connect(DB_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   tlsAllowInvalidCertificates: true, // Temporary
// }).then(() => {
//   console.log("Database connected");
// }).catch(err => {
//   console.error("Database connection error:", err);
//   process.exit(1); // Exit the application if the database connection fails
// });

// mongoose.connect(DB_URL)
// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", () => {
//   console.log("Database connected");
// });

app.use('/mind_quiz/v1/',route)

app.use("/*",(req,res) => {
    res.send("No Routes Found");
})

app.listen(PORT,() => {
    console.log(`The server Listening to ${PORT}`);
})