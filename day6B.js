const fs = require('fs');

fs.readFile('day6data.txt', 'utf8', (err, data) => {

  // Format data so each group is an array of strings:
  const dataArray = data.split('\n\n');
  const formattedArray = [];
  for (const row of dataArray) {
    const newRow = row.split('\n');
    formattedArray.push(newRow);
  }

  // Get the # of questions *everyone* answered yes to per group:
  const individualSums = formattedArray.map(function(group) {

    const letters = 'abcdefghijklmnopqrstuvwxyz';
    let unanimousLetters = 0;

    for (const letter of letters) {
      let letterPresence = 0;
      for (const individual of group) {
        if (individual.includes(letter)) {
          letterPresence += 1;
        }
      }
      if (letterPresence === group.length) {
        unanimousLetters += 1;
      }
    }

    return unanimousLetters;

  })

  // Sum all groups' # of unique questions:
  const total = individualSums.reduce(function(tally, current) {
    return tally + current
  }, 0);

  console.log(total);

})