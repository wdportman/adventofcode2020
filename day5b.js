/* It's a completely full flight, so your seat should be the only missing boarding pass in your list. However, there's a catch: some of the seats at the very front and back of the plane don't exist on this aircraft, so they'll be missing from your list as well.

Your seat wasn't at the very front or back, though; the seats with IDs +1 and -1 from yours will be in your list.

What is the ID of your seat? */

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

  const allIDs = [];

  for (const seat of dataArray) {

    const ID = findSeatID(seat);
    allIDs.push(ID);
  }

  allIDs.sort(function(a, b) {
    return a - b;
  });

  let answer = 0;

  for (let i = 0; i < allIDs.length; i++) {
    if (!allIDs.includes(allIDs[i] - 1)) {
      answer = allIDs[i] - 1;
    }
  }

  console.log(answer);

});