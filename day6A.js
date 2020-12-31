const fs = require('fs');

fs.readFile('day6data.txt', 'utf8', (err, data) => {

  // Format data so each group is one string:
  const dataArray = data.split('\n\n');
  const formattedArray = [];
  for (const row of dataArray) {
    const rowArray = row.split('\n');
    const newRow = rowArray.join('');
    formattedArray.push(newRow);
  }

  // Get the # of unique questions per group:
  const individualSums = formattedArray.map(function(group) {

    let usedCharacters = '';
    let uniqueCharacterCounter = 0;
    
    for (const character of group) {
      if (!usedCharacters.includes(character)) {
        usedCharacters += character;
        uniqueCharacterCounter += 1;
      }
    }
    return uniqueCharacterCounter;
  })

  // Sum all groups' # of unique questions:
  const total = individualSums.reduce(function(tally, current) {
    return tally + current
  }, 0);

  console.log(total);

})