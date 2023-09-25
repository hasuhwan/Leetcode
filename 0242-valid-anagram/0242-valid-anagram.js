/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    function sort(str){
        return str.split("").sort().join("");
    }
    return sort(s)===sort(t);
};