const urlInput = document.getElementById('urlInput');
const generateBtn = document.getElementById('generateBtn');
const qrCodeDiv = document.getElementById('qrCode');
const downloadBtn = document.getElementById('downloadBtn');

generateBtn.addEventListener('click', generateQRCode);

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
}

downloadBtn.addEventListener('click', downloadQRCode);

function downloadQRCode() {
  const qrCodeImage = qrCodeDiv.querySelector('img');
  const downloadLink = document.createElement('a');
  downloadLink.href = qrCodeImage.src;
  downloadLink.download = 'qr-code.png';
  downloadLink.click();
}
