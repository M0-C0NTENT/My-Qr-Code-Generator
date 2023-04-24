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
const imageUrl = 'https://example.com/image.png';
const imageName = 'my-image.png';
downloadImage(imageUrl, imageName);
function downloadImage(url, name) {
  const link = document.createElement('a');
  link.href = url;
  link.download = name;
  link.click();
}
