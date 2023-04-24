function generateQRCode() {
  const url = urlInput.value;
  if (url === '') {
    alert('Please enter a URL');
    return;
  }

  // create a new QRCode instance with options
  const qrCode = new QRCode({
    content: url,
    width: 256,
    height: 256,
    colorDark: '#000000',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.H
  });

  // get the generated QR code image
  const qrCodeImage = qrCode._el.firstChild;

  // append the image to the qrCodeDiv
  qrCodeDiv.appendChild(qrCodeImage);

  qrCodeDiv.style.display = 'block';
  downloadBtn.style.display = 'block';
  downloadBtn.disabled = false;
}
