const fs = require('fs');

const terms = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid', 'cid']


fs.readFile('day4data.txt', 'utf8', (err, data) => {
  const dataArray = data.split('\n\n');
  let validCounter = 0;
  for (const row of dataArray) {
    if (row.includes('byr')) {
      validCounter += 1;
    }
  }
  console.log("validCounter:", validCounter)
  console.log("dataArray length:", dataArray.length)
})