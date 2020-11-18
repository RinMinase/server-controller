$(document).ready(() => {
	$.get("/size", {}, ({ free, size }) => {
		const used = size - free;
		const percent = parseInt((used / size) * 100);
		const percentText = `${percent}%`;
		const GB = 1073741824;

		free = (free / GB).toFixed(2);
		size = (size / GB).toFixed(2);

		$("#progress")
			.text(percentText)
			.css("width", percentText);

		if (percent >= 90) {
			$("#progress").addClass("danger");
		} else if (percent >= 75) {
			$("#progress").addClass("warning");
		}

		$("#free").text(`${free} GB`);
		$("#size").text(`${size} GB`);
	});

});
