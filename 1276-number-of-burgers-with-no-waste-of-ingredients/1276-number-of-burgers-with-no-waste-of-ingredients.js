/**
 * @param {number} tomatoSlices
 * @param {number} cheeseSlices
 * @return {number[]}
 */
var numOfBurgers = function (tomatoSlices, cheeseSlices) {
  let small = 0;
  let jumbo = 0;
  small = cheeseSlices;
  tomatoSlices -= cheeseSlices * 2;
  while (tomatoSlices > 0 && small > 0) {
    tomatoSlices -= 2;
    small--;
    jumbo++;
  }
  if (tomatoSlices === 0) {
    return [jumbo, small];
  } else {
    return [];
  }
};