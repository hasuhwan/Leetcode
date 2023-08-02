/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
    const obj={};
    for(let i=0; i<s.length; i++){
        obj[s[i]]=(obj[s[i]]||0)+1;
    }
    return Math.floor(((obj[letter]||0)/s.length)*100);
};