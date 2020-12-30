const fs = require('fs');

const terms = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

fs.readFile('day4data.txt', 'utf8', (err, data) => {

  const dataArray = data.split('\n\n');

  let validCounter = 0;

  for (const row of dataArray) {
    let includesCounter = 0;
    for (const term of terms) {
      if (row.includes(term)) {
        includesCounter += 1;
      }
    }
    if (includesCounter === terms.length) {
      validCounter += 1;
    }
  }
  console.log("validCounter:", validCounter)
})