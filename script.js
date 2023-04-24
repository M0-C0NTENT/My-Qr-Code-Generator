const urlInput = document.getElementById("urlInput");
		const generateBtn = document.getElementById("generateBtn");
		const qrCodeDiv = document.getElementById("qrCode");
		const downloadContainer = document.getElementById("downloadContainer");

		function generateQRCode() {
			const url = urlInput.value;

			if (url.trim() === "") {
				alert("Please enter a valid URL.");
				return;
			}

			qrCodeDiv.innerHTML = "";

			const qrCode = new QRCode(qrCodeDiv, {
				text: url,
				width: 256,
				height: 256,
				colorDark: "#000000",
				colorLight: "#ffffff",
				correctLevel: QRCode.CorrectLevel.H
			});

			const canvas = qrCode._el.firstChild;
			const dataURL = canvas.toDataURL();

			const downloadLink = document.createElement("a");
			downloadLink.href = dataURL;
			downloadLink.download = "qrcode.png";
			downloadLink.textContent = "Download QR Code";
			downloadContainer.innerHTML = "";
			downloadContainer.appendChild(downloadLink);
		}

		generateBtn.addEventListener("click", generateQRCode);
