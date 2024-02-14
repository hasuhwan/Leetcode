/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function(s, words) {
    let str="";
    for(let word of words){
        str+=word;
        if(s===str){
            return true;
        }
    }
    return false;
};