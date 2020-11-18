$.get("/url", {}, (response) => {
	let qr = qrcode(4, "L");
	qr.addData(response);
	qr.make();
	document.getElementById("QR").innerHTML = qr.createImgTag(5, 8);
});
