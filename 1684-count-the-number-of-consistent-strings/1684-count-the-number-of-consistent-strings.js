/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    const map=new Map();
    let answer=0;
    for(let i=0; i<allowed.length; i++){
        map.set(allowed[i],true);
    };
    words.forEach(word=>{
        for(let i=0; i<word.length; i++){
            if(!map.has(word[i])){
                return;
            }
        }
        answer++;
    });
    return answer;
};