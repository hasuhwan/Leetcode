/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
return s.replace(/ {2,}/g," ").trim().split(" ").reverse().join(" ");
};