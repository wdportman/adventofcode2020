const fs = require('fs');

const terms = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

const getValue = function(row, keyString) {
  const startIndex = row.indexOf(`${keyString}:`, 0) + 4;
  const endIndex = row.indexOf(('\n'), startIndex + 4);
  return row.slice(startIndex, endIndex)
};

fs.readFile('day4data.txt', 'utf8', (err, data) => {

  const dataArray = data.split('\n\n');
  const hasAllDataArray = [];

  let validCounter = 0;

  // Select passports w/ all required data present:
  for (const row of dataArray) {
    let includesCounter = 0;
    for (const term of terms) {
      if (row.includes(term)) {
        includesCounter += 1;
      }
    }
    if (includesCounter === terms.length) {
      hasAllDataArray.push(row);
    }
  }

  // Check that the data that is present is also valid:
  for (const row of hasAllDataArray) {
    let validDataCounter = 0;
    
    // byr
    byr = getValue(row, 'byr');
    console.log(byr);
    if (byr >= 1920 && byr <= 2002) {
      validDataCounter += 1;
    };

    // iyr
    iyr = getValue(row, 'iyr');
    if (iyr >= 2010 && iyr <= 2020) {
      validDataCounter += 1;
    };

    // eyr
    eyr = getValue(row, 'eyr');
    if (eyr >= 2020 && eyr <= 2030) {
      validDataCounter += 1;
    };

    // hcl
    hcl = getValue(row, 'hcl');
    const hclValidChars = '#abcdef0123456789';
    let invalidHcl = 0;
    for (const character of hcl) {
      if (!hclValidChars.includes(character)) {
        invalidHcl += 1;
      }
    }
    if (hcl[0] !== '#') {
      invalidHcl += 1;
    };
    if (invalidHcl === 0) {
      validDataCounter += 1;
    };

    // ecl
    ecl = getValue(row, 'ecl', 3);
    const eyeColors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];
    if (eyeColors.includes(ecl)) {
      validDataCounter += 1;
    };

    // pid
    pid = getValue(row, 'pid', 9);
    const pidValidChars = '0123456789';

    // hgt


    // total valid:
    if (validDataCounter === 5) {
      validCounter += 1;
    }
    //
  }

  console.log("validCounter:", validCounter)
});