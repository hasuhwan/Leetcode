/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function (nums) {
  const set = new Set(nums);

  for (let num of nums) {
    const temp = String(num).split("").reverse().join("");
    set.add(parseInt(temp));
  }
  return set.size;
};