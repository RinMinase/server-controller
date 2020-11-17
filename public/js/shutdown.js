$(document).ready(() => {
	$("#shutdown").click(() => {
		$.post("/shutdown")
	});
});
