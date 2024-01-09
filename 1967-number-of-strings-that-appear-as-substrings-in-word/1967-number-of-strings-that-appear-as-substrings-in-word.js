/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function(patterns, word) {
    let answer=0;
    patterns.forEach(str=>{
        if(word.indexOf(str)!==-1){
            answer++;
        }
    });
    return answer;
};