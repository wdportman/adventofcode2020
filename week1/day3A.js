// Starting at the top-left corner of your map and following a slope of right 3 and down 1, how many trees would you encounter?

const fs = require('fs');

fs.readFile('day3data.txt', 'utf8', (err, data) => {
  const dataArray = data.split('\n');
  let position = 0;
  let treeCounter = 0;

  for (let i = 0; i < dataArray.length; i++) {
    if (dataArray[i][position] === '#') {
      treeCounter += 1;
    }
    if (position < 28) {
      position += 3;
    } else {
      if (position === 28) {
        position = 0;
      }
      if (position === 29) {
        position = 1;
      }
      if (position === 30) {
        position = 2;
      }
      if (position === 31) {
        position = 3;
      }
    }
  }
  console.log('treeCounter:', treeCounter);
});