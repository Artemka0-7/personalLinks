const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const dotenv = require("dotenv").config();
const { createPath, handleError } = require("./helpers/helper");
const chalk = require("chalk");
const { cms } = require("./helpers/cms")
const successMsg = chalk.bgKeyword("green").white.bold;
const errorMsg = chalk.bgKeyword("white").red;
const reqMsg = chalk.bgKeyword("purple").cyan.bold.underline;

const app = express();
app.set("view engine");

/*mongoose  
  .connect(process.env.MONGO_URL)  
  .then((res) => console.log(successMsg('Connected to DB'))) 
  .catch((error) => console.log(errorMsg(error))); */

app.listen(process.env.PORT, (error) => {
  error
    ? console.log(errorMsg(error))
    : console.log(successMsg(`Listening port ${process.env.PORT}`));
});

app.use(
  morgan(
    reqMsg(":method :url :status :res[content-length] - :response-time ms")
  )
);
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: false }));


app.get("/api/cms", (req, res) => {
  res.json(cms)
});

