require("dotenv").config();

const chalk = require("chalk");
const express = require("express");
const port = process.env.PORT || 80;

const log = require("./src/utils/log");

const urlRequest = require("./src/url");
const sizeRequest = require("./src/size");
const shutdownRequest = require("./src/shutdown");

express()
	.use(express.static(`${__dirname}/public`))

	.get("/url", urlRequest)
	.get("/size", sizeRequest)
	.post("/shutdown", shutdownRequest)

	.listen(port, "0.0.0.0", () => {
		log("listening on port " + chalk.blue(port));
	});
