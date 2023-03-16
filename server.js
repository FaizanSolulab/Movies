const express = require("express");
const connectDb = require("./db");
const logger = require("./logger");

connectDb();

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());


app.use("/movies", require("./routes/movies"));

app.listen(port, () => {
    logger.info(`Server runnning on port ${port}`);
});