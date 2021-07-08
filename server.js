const express = require('express');

const connectDB = require("./config/connectDB");


const app = express();


app.use(express.json());
app.use("/api/users", require("./routes/user"));


connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, err =>
  err ? console.error(err) : console.log(`server is running on ${PORT}`)
);
