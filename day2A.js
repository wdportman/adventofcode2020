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

    // Check how many times the character appears in the password:
    let characterCounter = 0;
    for (const char of password) {
      if (char === character) {
        characterCounter += 1;
      }
    }

    // Check whether the character counter is between max & min:
    if ((characterCounter >= min) && (characterCounter <= max)) {
      validPasswordCounter += 1;
    }
  }
  console.log(validPasswordCounter);
})

// 15-19 p: pppbpcppxcptppvmpppb
// 3-4 m: fqmwcncsmp

// [ '15-19', 'p:', 'pppbpcppxcptppvmpppb' ]
// [ '3-4', 'm:', 'fqmwcncsmp' ]