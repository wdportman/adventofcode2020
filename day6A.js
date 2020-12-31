const fs = require('fs');

fs.readFile('week1/day6data.txt', 'utf8', (err, data) => {
  const dataArray = data.split('\n\n');
  console.log(dataArray);
})