const express = require("express");
const router = express.Router();
const Movies = require('../models/movies.model');
const {getMovies} = require("../controllers/movies.controller");

router.route("/").get(getMovies);

module.exports = router;