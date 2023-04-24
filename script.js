const urlInput = document.getElementById('urlInput');
const generateBtn = document.getElementById('generateBtn');
const qrCodeDiv = document.getElementById('qrCode');

generateBtn.addEventListener('click', generateQRCode);

function generateQRCode() {
  const url = urlInput.value;
  if (url === '') {
    alert('Please enter a URL');
    return;
  }

  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  const qrCode = jsQR(url, canvas.width, canvas.height);

  if (qrCode) {
    canvas.width = qrCode.width;
    canvas.height = qrCode.height;
    context.drawImage(qrCode.imageData, 0, 0);
    const qrCodeImage = new Image();
    qrCodeImage.src = canvas.toDataURL();
    qrCodeDiv.innerHTML = '';
    qrCodeDiv.appendChild(qrCodeImage);
  }
}
