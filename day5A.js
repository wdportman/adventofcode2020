const fs = require('fs');

const findSeatID = function(code) {
  let rowMin = 0;
  let rowMax = 127;
  let colMin = 0;
  let colMax = 7;

  // Find row & column:
  for (const letter of code) {

    // Row:
    if (letter === 'F') {
      rowMax = Math.floor((rowMin + rowMax) / 2);
    };
    if (letter === 'B') {
      rowMin = Math.ceil((rowMin + rowMax) / 2);
    };

    // Column:
    if (letter === 'L') {
      colMax = Math.floor((colMin + colMax) / 2);
    };
    if (letter === 'R') {
      colMin = Math.ceil((colMin + colMax) / 2);
    };
  };

  const ID = colMin + rowMin * 8;

  return ID;
};

fs.readFile('day5data.txt', 'utf8', (err, data) => {
  const dataArray = data.split('\n');

  let highestID = -Infinity;

  for (const seat of dataArray) {

    const ID = findSeatID(seat);

    if (ID > highestID) {
      highestID = ID;
    }
  }

  console.log('highestID:', highestID)
});