require('dotenv').config();

const path = require('path');
const chalk = require('chalk');
const express = require('express');
const app = express();
const port = process.env.PORT || 80;

const log = (input) => {
	if (typeof input == 'string') {
		console.log(`${chalk.blue('server')} ${input}`);
	}
}

app
	.use(express.static(path.join(__dirname, 'public')))
	.listen(port, function () {
		log('listening on port ' + chalk.blue(port));
	});
