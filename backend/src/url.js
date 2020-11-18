module.exports = (req, res) => {
	const url = process.env.URL || "";
	res.json(url);
}
