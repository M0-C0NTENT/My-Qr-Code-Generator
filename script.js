function generateQRCode() {
  const url = urlInput.value;
  if (url === '') {
    alert('Please enter a URL');
    return;
  }

  const qrCode = new QRCode(qrCodeDiv, {
    text: url,
    width: 256,
    height: 256,
    colorDark: '#000000',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.H
  });

  qrCodeDiv.style.display = 'block';
  downloadBtn.style.display = 'block';
  downloadBtn.disabled = false;

  setTimeout(downloadQRCode, 500); // Add delay before calling downloadQRCode
}

function downloadQRCode() {
  const qrCodeImage = qrCodeDiv.querySelector('img');
  const downloadLink = document.createElement('a');
  downloadLink.href = qrCodeImage.src;
  downloadLink.download = 'qr-code.png';
  downloadLink.click();
}
