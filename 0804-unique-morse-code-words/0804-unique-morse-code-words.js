/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const morse=[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    const set=new Set();
    words.forEach(str=>{
        let temp="";
        for(let i=0; i<str.length; i++){
            temp+=morse[str[i].charCodeAt()-97];
        }
        set.add(temp);
    });
    return set.size;
};