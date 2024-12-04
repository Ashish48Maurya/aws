require('dotenv').config();
const express = require("express");
const app = express();
const routes  = require('./routes/todo');
const mongoConnect = require('./db');

app.use(express.json());
mongoConnect();
app.use("/api", routes); 

module.exports = app;