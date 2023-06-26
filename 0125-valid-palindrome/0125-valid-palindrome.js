/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const str=s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
    const reverse=str.split("").reverse().join("");
    if(str===reverse){
        return true;
    }
    return false;
};