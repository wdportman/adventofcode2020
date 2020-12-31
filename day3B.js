const fs = require('fs');

const treeFunc = function(dataArray, right, down) {
  let position = 0;
  let treeCounter = 0;
  for (let i = 0; i < dataArray.length; i += down) {
    if (dataArray[i][position] === '#') {
      treeCounter += 1;
    }
    position += right;
    if (position >= dataArray[i].length) {
      position = Math.abs(dataArray[i].length - position);
    }
  }
  console.log('treeCounter:', treeCounter);  
}

fs.readFile('day3data.txt', 'utf8', (err, data) => {
  const dataArray = data.split('\n');
  treeFunc(dataArray, 1, 2);
})