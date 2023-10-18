/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let answer="";
    let i=0;
    while(i<word1.length||i<word2.length){
        if(word1[i]!==undefined){
            answer+=word1[i];
        }
        if(word2[i]!==undefined){
            answer+=word2[i];
        }
        i++;
    }
    return answer;
};