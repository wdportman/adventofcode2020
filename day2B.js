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

    // Check if character is at min or max position in password:
    if (((password[min-1] === character) && !(password[max-1] === character)) || (!(password[min-1] === character) && (password[max-1] === character))) {
      validPasswordCounter += 1;
    }
  }
  console.log(validPasswordCounter);
})

// 15-19 p: pppbpcppxcptppvmpppb
// 3-4 m: fqmwcncsmp

// [ '15-19', 'p:', 'pppbpcppxcptppvmpppb' ]
// [ '3-4', 'm:', 'fqmwcncsmp' ]