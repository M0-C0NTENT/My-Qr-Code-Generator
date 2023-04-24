
 @@ -4,40 +4,28 @@ const qrCodeDiv = document.getElementById("qrCode");
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

 	function downloadQRCode() {
 		canvas.toBlob(function(blob) {
 			saveAs(blob, "qrcode.png");
 		});
 	}
 	downloadLink.addEventListener("click", downloadQRCode);
     const url = urlInput.value.trim();

     if (url === "") {
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
     canvas.toBlob(function(blob) {
         saveAs(blob, "qrcode.png");
     });
 }

 generateBtn.addEventListener("click
 generateBtn.addEventListener("click", generateQRCode
