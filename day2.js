const fs = require('fs');

fs.readFile('day2data.txt', 'utf8', (err, data) => {
  const dataArray = data.split('\n');
  let validPasswordCounter = 0;
  for (const row of dataArray) {

    // Get variables:
    const splitRow = row.split(' ');
    const minMax = splitRow[0].split('-');
    const min = minMax[0];
    const max = minMax[1];
    const character = splitRow[1][0];
    const password = splitRow[2];

    // Add +1 to counter if the password "passes":
    let characterCounter = 0;
    for (const char of password) {
      if (char === character) {
        characterCounter += 1;
      }
    }
    console.log(characterCounter);
  }
})

// 15-19 p: pppbpcppxcptppvmpppb
// 3-4 m: fqmwcncsmp

// [ '15-19', 'p:', 'pppbpcppxcptppvmpppb' ]
// [ '3-4', 'm:', 'fqmwcncsmp' ]