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
        const downloadLink = document.createElement("a");
        downloadLink.download = "qrcode.png";
        downloadLink.innerHTML = "Download QR Code";
        if (window.navigator.msSaveBlob) { // For IE and Edge
            downloadLink.addEventListener("click", function() {
                window.navigator.msSaveBlob(blob, "qrcode.png");
            });
        } else {
            downloadLink.href = URL.createObjectURL(blob);
            downloadLink.onclick = function() {
                requestAnimationFrame(function() {
                    URL.revokeObjectURL(downloadLink.href);
                    downloadLink.removeAttribute("href");
                });
            };
        }
        downloadContainer.innerHTML = "";
        downloadContainer.appendChild(downloadLink);

        qrCodeDiv.style.display = "block";
        downloadLink.style.display = "block";
    });
}

generateBtn.addEventListener("click", generateQRCode);
