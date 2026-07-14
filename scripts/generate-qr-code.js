const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

// Configuration for each property
const properties = [
  {
    name: 'Soroi Amboseli',
    outputDir: path.join(__dirname, '..', 'amboseli-guest-guide', 'qr-codes'),
    filePrefix: 'amboseli',
    bgColor: '#f0ebe3',
    textColor: '#2c2c2c',
    guides: [
      {
        url: 'https://amboseliguestinformation.vercel.app/#review-us',
        name: 'Guest Guide',
        filePrefix: 'amboseli-qr-code',
      },
      {
        url: 'https://search.google.com/local/writereview?placeid=ChIJBwcLDwCZMBgRH4UuDWHSw0o',
        name: 'Google Reviews',
        filePrefix: 'amboseli-google-qr-code',
      },
      {
        url: 'https://www.tripadvisor.com/UserReviewEdit-d34465046?m=66883',
        name: 'TripAdvisor',
        filePrefix: 'amboseli-tripadvisor-qr-code',
      },
    ],
  },
  {
    name: 'Soroi Blue Diani',
    outputDir: path.join(__dirname, '..', 'Marketing', 'archive', 'marketing', 'Guest-Information', 'blueguestinformation', 'qr-codes'),
    filePrefix: 'diani',
    bgColor: '#F5EFE4',
    textColor: '#1E2A22',
    guides: [
      {
        url: 'https://blueguestinformation.vercel.app/#review-us',
        name: 'Guest Guide',
        filePrefix: 'diani-qr-code',
      },
      {
        url: 'https://search.google.com/local/writereview?placeid=ChIJWxMKwdFFQBgRLC5EdagNqww',
        name: 'Google Reviews',
        filePrefix: 'diani-google-qr-code',
      },
      {
        url: 'https://www.tripadvisor.com/UserReviewEdit-d34465047?m=66883',
        name: 'TripAdvisor',
        filePrefix: 'diani-tripadvisor-qr-code',
      },
    ],
  },
];

properties.forEach((prop) => {
  // Ensure output directory exists
  if (!fs.existsSync(prop.outputDir)) {
    fs.mkdirSync(prop.outputDir, { recursive: true });
  }

  prop.guides.forEach((guide) => {
    // Generate high-quality PNG for printing
    QRCode.toFile(
      path.join(prop.outputDir, `${guide.filePrefix}-hq.png`),
      guide.url,
      {
        errorCorrectionLevel: 'H',
        type: 'image/png',
        quality: 1,
        margin: 2,
        width: 500,
      },
      (err) => {
        if (err) {
          console.error(`Error generating PNG for ${prop.name} (${guide.name}):`, err);
        } else {
          console.log(`✓ PNG QR code: ${guide.filePrefix}-hq.png (${guide.name})`);
        }
      }
    );

    // Generate SVG for scalability (vector format, infinitely scalable)
    QRCode.toFile(
      path.join(prop.outputDir, `${guide.filePrefix}.svg`),
      guide.url,
      {
        errorCorrectionLevel: 'H',
        type: 'image/svg+xml',
        margin: 2,
        width: 500,
      },
      (err) => {
        if (err) {
          console.error(`Error generating SVG for ${prop.name} (${guide.name}):`, err);
        } else {
          console.log(`✓ SVG QR code: ${guide.filePrefix}.svg (${guide.name})`);
        }
      }
    );
  });
});

console.log('\n✓ All QR codes generated successfully!');
console.log('\nAmboseli QR codes:');
console.log('  - amboseli-qr-code-hq.png / .svg (Guest Guide)');
console.log('  - amboseli-google-qr-code-hq.png / .svg (Google Reviews)');
console.log('  - amboseli-tripadvisor-qr-code-hq.png / .svg (TripAdvisor)');
console.log('\nDiani QR codes:');
console.log('  - diani-qr-code-hq.png / .svg (Guest Guide)');
console.log('  - diani-google-qr-code-hq.png / .svg (Google Reviews)');
console.log('  - diani-tripadvisor-qr-code-hq.png / .svg (TripAdvisor)');
