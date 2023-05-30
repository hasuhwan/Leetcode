/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const regexp=new RegExp(/[a-zA-Z]{1,}/,"g");
    const arr=s.match(regexp);

return arr[arr.length-1].length;
};