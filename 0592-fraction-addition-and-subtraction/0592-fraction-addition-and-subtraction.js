/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function (expression) {
  const arr = expression.match(/-?\d+\/\d+/g).map((el) => {
    const [first, second] = el.split("/");
    return [Number(first), Number(second)];
  });
  while (arr.length !== 1) {
    const [tempFirst, tempSecond] = arr.pop();
    const [nextFirst, nextSecond] = arr.pop();
    const sum = [
      tempFirst * nextSecond + tempSecond * nextFirst,
      tempSecond * nextSecond,
    ];
    arr.push(sum);
  }
  function gcd(a, b) {
    let n, temp;
    if (a < b) {
      temp = b;
      b = a;
      a = temp;
    }
    while (b !== 0) {
      n = a % b;
      a = b;
      b = n;
    }
    return a;
  }
  const [up, down] = arr[0];

  const temp = gcd(Math.abs(up), down);
  return up / temp + "/" + down / temp;
};