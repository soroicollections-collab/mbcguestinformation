const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

const url = 'https://amboseliguestinformation.vercel.app/';

// Create QR codes in different formats
const outputDir = path.join(__dirname, '..', 'amboseli-guest-guide', 'qr-codes');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Generate high-quality PNG for printing
QRCode.toFile(
  path.join(outputDir, 'amboseli-qr-code-hq.png'),
  url,
  {
    errorCorrectionLevel: 'H',
    type: 'image/png',
    quality: 1,
    margin: 2,
    width: 500,
  },
  (err) => {
    if (err) {
      console.error('Error generating PNG:', err);
    } else {
      console.log('✓ High-quality PNG QR code created: amboseli-qr-code-hq.png');
    }
  }
);

// Generate SVG for scalability (vector format, infinitely scalable)
QRCode.toFile(
  path.join(outputDir, 'amboseli-qr-code.svg'),
  url,
  {
    errorCorrectionLevel: 'H',
    type: 'image/svg+xml',
    margin: 2,
    width: 500,
  },
  (err) => {
    if (err) {
      console.error('Error generating SVG:', err);
    } else {
      console.log('✓ Scalable SVG QR code created: amboseli-qr-code.svg');
    }
  }
);

// Generate HTML file with embedded QR code for web use
const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Soroi Amboseli QR Code</title>
  <style>
    body {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      margin: 0;
      background: #f0ebe3;
      font-family: 'Poppins', sans-serif;
    }
    .container {
      text-align: center;
      padding: 40px;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    h1 {
      font-family: 'Cinzel', serif;
      color: #2c2c2c;
      margin-bottom: 10px;
      font-size: 24px;
    }
    p {
      color: #766553;
      margin-bottom: 30px;
      font-size: 14px;
    }
    img {
      max-width: 400px;
      width: 100%;
      height: auto;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Soroi Amboseli</h1>
    <p>Scan to view guest information</p>
    <img src="amboseli-qr-code-hq.png" alt="QR Code to Soroi Amboseli Guest Guide" />
  </div>
</body>
</html>`;

fs.writeFileSync(path.join(outputDir, 'qr-display.html'), htmlContent);
console.log('✓ Web display HTML created: qr-display.html');

console.log('\n✓ All QR codes generated successfully!');
console.log('Location: amboseli-guest-guide/qr-codes/\n');
console.log('Files created:');
console.log('  - amboseli-qr-code-hq.png (Print-ready, 500x500px)');
console.log('  - amboseli-qr-code.svg (Scalable vector format)');
console.log('  - qr-display.html (Web display)');
console.log('\nFor printing: Use the PNG or SVG at high resolution');
console.log('Link: ' + url);
