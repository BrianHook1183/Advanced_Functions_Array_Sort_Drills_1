
// TODO Write a method sortNumbers that takes in an array of numbers, and returns the numbers, sorted least to greatest. Example: sortNumbers([56, -2, 3, 102]) //=> [-2, 3, 56, 102]
// * multi-line return
function sortWords(words) {
  return words.sort((a, b) => {
    return a.toLowerCase() > b.toLowerCase() ? 1 : -1;
  });
}
// * single-line return
// function sortWords(words) {
//   return words.sort((a, b) => a.toLowerCase() > b.toLowerCase() ? 1 : -1);
// }

//  TODO Write a method sortNumbers that takes in an array of numbers, and returns the numbers, sorted least to greatest.
function sortNumbers(numbers) {
  return numbers.sort((a, b) => a - b);
}
//  * ternary version
// function sortNumbers(numbers) {
//   return numbers.sort((a, b) => a > b ? 1 : -1);
// }

//  TODO returns the numbers, sorted greatest to least - the reverse of the previous function.
function largestFirst(numbers) {
  return numbers.sort((a, b) => b - a);
}
//  TODO takes in an array of flower objects, and sorts them by their hardinessZone
/* 
let flowers = [
  {
    name: "Pink Coneflower",
    zone: 6
  },
  {
    name: "Scarlet Phlox",
    zone: 3
  },
  {
    name: "Carnations",
    zone: 4
  },
  {
    name: "Hyacinths",
    zone: 3
  },
  {
    name: "Hydrangeas",
    zone: 5
  }
]
sortFlowersByZone(flowers) /*=> [
  {
    name: "Scarlet Phlox",
    zone: 3
  },
  {
    name: "Hyacinths",
    zone: 3
  },
  {
    name: "Carnations",
    zone: 4
  },
  {
    name: "Hydrangeas",
    zone: 5
  },
  {
    name: "Pink Coneflower",
    zone: 6
  },
]
 */
function sortFlowersByZone(flowers) {
  return flowers.sort((zoneA, ZoneB) => {
    return zoneA.zone - ZoneB.zone;
  });
}

// TODO takes in an array of strings, and returns the strings, sorted by length, shortest first.
// sortByLength(["Scarlet Phlox", "Hyacinths", "Carnations", "Hydrangeas", "Pink Coneflower"]) 
/* => [
  'Hyacinths',
  'Carnations',
  'Hydrangeas',
  'Scarlet Phlox',
  'Pink Coneflower'
]
*/
function sortByLength(strings) {
  return strings.sort((a, b) => a.length - b.length);
}

module.exports = {
   sortWords,
   sortNumbers,
   largestFirst,
   sortFlowersByZone,
   sortByLength
}