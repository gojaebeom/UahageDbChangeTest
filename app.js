require("dotenv").config();
const express = require("express");
const apiRouter = require("./src/api/index");
const app = express();

app.use(apiRouter);
app.listen(process.env.APP_PORT, () => console.log(`server is running on ${process.env.APP_PORT}`));