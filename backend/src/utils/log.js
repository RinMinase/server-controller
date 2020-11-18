const chalk = require("chalk");

module.exports = (input, error) => {
	if (typeof error == "boolean" && error) {
		console.log(`${chalk.red("error")} ${input}`);
	}

	if (typeof input == "string") {
		console.log(`${chalk.blue("server")} ${input}`);
	}
}
