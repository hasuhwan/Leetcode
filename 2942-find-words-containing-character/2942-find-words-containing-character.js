/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    const answer=[];
    words.forEach((el,idx)=>{
        if(el.includes(x)){
            answer.push(idx);
        }
    });
    return answer;
};