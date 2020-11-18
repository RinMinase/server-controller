const powerOff = require("power-off");

module.exports = (req, res) => {
	powerOff((err) => {
		if (err) {
			log(err)
			res.status(500).json({ error: "Error in powering-off" })
		} else {
			res.end()
		}
	});
}
