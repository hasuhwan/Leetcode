/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function(words) {
    let answer=0;
    for(let i=0; i<words.length-1; i++){
        const str=words[i];
        for(let j=i+1; j<words.length; j++){
            if(words[j].startsWith(str)&&words[j].endsWith(str)){
                answer++;
            }
        }
    }
    return answer;
};