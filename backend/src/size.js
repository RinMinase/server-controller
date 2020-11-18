const checkSpace = require("check-disk-space");

module.exports = (req, res) => {
	let drive = process.env.DRIVE || "C";

	drive = drive.charAt(0);
	checkSpace(`${drive}:`).then((space) => {
		res.json(space);
	});
}
