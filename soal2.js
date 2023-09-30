const fs = require('fs');
const payload = 'homework.log';
const output = 'log.txt';

fs.readFile(payload, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    fs.writeFile(output, data, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Teks berhasil ditulis");
    }
    });
  }
});

