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
    if (position <= (dataArray[i].length - 3)) {
      position += 3;
    } else {
      //29...
      if (dataArray[i].length - position === 2) {
        position = 0;
      }
      //30...
      if (dataArray[i].length - position === 1) {
        position = 1;
      }
      //31...
      if (dataArray[i].length - position === 0) {
        position = 2;
      }
    }
  }
  console.log('treeCounter:', treeCounter);
});