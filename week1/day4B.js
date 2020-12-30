const fs = require('fs');

const terms = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

const getValue = function(row, keyString) {
  const startIndex = row.indexOf(`${keyString}:`, 0) + 4;
  const endIndex = row.indexOf(('\n'), startIndex + 4);
  return row.slice(startIndex, endIndex)
};

fs.readFile('day4data.txt', 'utf8', (err, data) => {

  const dataArray = data.split('\n\n');
  const completeDataArray = [];
  const formattedDataArray = [];

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
      completeDataArray.push(row);
    }
  };

  // Format each passport as an object in an array:
  for (const row of completeDataArray) {
    const newRow = row.split(/\r?\n| /).reduce((obj, str) => {
      let strParts = str.split(":");
      if (strParts[0] && strParts[1]) {
        obj[strParts[0]] = strParts[1];
      }
      return obj;
    }, {});
    formattedDataArray.push(newRow);
  };

  // Check that the data present in each passport is also valid:
  for (const row of formattedDataArray) {
    let validDataCounter = 0;
    
    // byr
    if (row.byr >= 1920 && row.byr <= 2002) {
      validDataCounter += 1;
    };

    // iyr
    if (row.iyr >= 2010 && row.iyr <= 2020) {
      validDataCounter += 1;
    };

    // eyr
    if (row.eyr >= 2020 && row.eyr <= 2030) {
      validDataCounter += 1;
    };

    // hgt
    let hgtcm = row.hgt.slice(0,3);
    let hgtin = row.hgt.slice(0,2);
    if (row.hgt.includes('cm') && !row.hgt.includes('in') && hgtcm >= 150 && hgtcm <= 193) {
      validDataCounter += 1;
    };
    if (!row.hgt.includes('cm') && row.hgt.includes('in') && hgtin >= 59 && hgtin <= 76) {
      validDataCounter += 1;
    };

    // hcl
    const hclValidChars = '#abcdef0123456789';
    let invalidHcl = 0;
    for (const character of row.hcl) {
      if (!hclValidChars.includes(character)) {
        invalidHcl += 1;
      }
    }
    if (row.hcl[0] !== '#') {
      invalidHcl += 1;
    };
    if (invalidHcl === 0) {
      validDataCounter += 1;
    };

    // ecl
    const eyeColors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];
    if (eyeColors.includes(row.ecl)) {
      validDataCounter += 1;
    };

    // pid
    const pidValidChars = '0123456789';
    let invalidPid = 0;
    for (const character of row.pid) {
      if (!pidValidChars.includes(character)) {
        invalidPid += 1;
      }
    };
    if (row.pid.length !== 9) {
      invalidPid += 1;
    };
    if (invalidPid === 0) {
      validDataCounter += 1;
    };

    // total valid:
    if (validDataCounter === terms.length) {
      validCounter += 1;
    }
  }
  console.log("validCounter:", validCounter)
});