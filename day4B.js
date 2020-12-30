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

  }
  console.log("formattedDataArray:", formattedDataArray)
});

// let foo = data.split("\n").reduce(function(obj, str, index) {
//   let strParts = str.split(":");
//   if (strParts[0] && strParts[1]) { //<-- Make sure the key & value are not undefined
//     obj[strParts[0].replace(/\s+/g, '')] = strParts[1].trim(); //<-- Get rid of extra spaces at beginning of value strings
//   }
//   return obj;
// }, {});

// console.log(foo);