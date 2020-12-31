const fs = require('fs');

fs.readFile('day7data.txt', 'utf8', (err, data) => {
  const dataArray = data.split('\n');

  const rowPartsArray = [];
  
  // Format data into an array containing (i) the bag and (ii) what bag(s) it contains:
  for (const row of dataArray) {
    const rowParts = row.split('contain');
    // console.log("part 1:", rowParts[0]);
    // console.log("part 2:", rowParts[1]);
    rowPartsArray.push(rowParts);
  };

  // Get the names of all bags that can hold a shiny gold bag directly:
  const containsShinyGold = [];

  for (const row of rowPartsArray) {

    const bag = row[0].substring(0, row[0].length-2); // <-- remove "s " from each bag:
    const bagContents = row[1];

    // Add all bags to containsShinyGold that directly contain shiny gold:
    if (bagContents.includes('shiny gold bag')) {
      containsShinyGold.push(bag);      
    };
    // Add all bags who indirectly contain shiny gold:
    for (const containingBag of containsShinyGold) {
      if (bagContents.includes(containingBag)) {
        containsShinyGold.push(bag);
      }
    }
  };
  
  console.log(containsShinyGold.length);

})



    
