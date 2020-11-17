require('dotenv').config();

const path = require('path');
const util = require('util');
const express = require('express');
const app = express();
const port = process.env.PORT || 80;

app
	.use(express.static(path.join(__dirname, 'public')))
	.listen(port, function () {
		util.log('Server listening on port ' + port);
	});
