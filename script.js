const urlInput = document.getElementById("urlInput");
const generateBtn = document.getElementById("generateBtn");
const qrCodeDiv = document.getElementById("qrCode");
const downloadContainer = document.getElementById("downloadContainer");

function generateQRCode() {
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

generateBtn.addEventListener("click", generateQRCode);
