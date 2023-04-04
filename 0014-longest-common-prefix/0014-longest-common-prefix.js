/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  for (let i = 1; i <= strs[0].length; i++) {
    const temp = strs[0].slice(0, i);
    const regexp = new RegExp(`^${temp}`);
    if (!strs.every((el) => regexp.test(el))) {
      return strs[0].slice(0, i - 1);
    }
  }

  return strs[0];
};