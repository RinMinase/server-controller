require("dotenv").config();

const path = require("path");
const chalk = require("chalk");
const express = require("express");
const powerOff = require("power-off");
const app = express();
const port = process.env.PORT || 80;

const log = (input, error) => {
	if (typeof error == "boolean" && error) {
		console.log(`${chalk.red("error")} ${input}`);
	}

	if (typeof input == "string") {
		console.log(`${chalk.blue("server")} ${input}`);
	}
}

app
	.use(express.static(path.join(__dirname, "public")))
	.get("/url", (req, res) => {
		const url = process.env.URL || "";
		res.json(url);
	})
	.post("/shutdown", (req, res) => {
		// powerOff((err) => {
		// 	if (err) {
		// 		log(err)
		// 		res.status(500).json({ error: "Error in powering-off" })
		// 	} else {
		// 		res.end()
		// 	}
		// });
	})
	.listen(port, () => {
		log("listening on port " + chalk.blue(port));
	});
