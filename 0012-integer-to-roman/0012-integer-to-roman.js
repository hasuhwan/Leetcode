/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let answer = "";
  const valueArr = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];

  for (let i = 0; i < valueArr.length; i++) {
    const repeat = Math.floor(num / valueArr[i][1]);
    num = num % valueArr[i][1];
    answer += valueArr[i][0].repeat(repeat);
    if (num === 0) {
      break;
    }
  }
  return answer;
};