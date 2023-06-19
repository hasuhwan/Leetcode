/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function(words, queries) {
    const answer=[];
    const vowel=["a","e","i","o","u"];
    const regexp=new RegExp(/a|e|i|o|u/);
    const vowelArr=[];
    words.forEach((word,idx)=>{
        if(regexp.test(word[0])&&regexp.test(word[word.length-1])){
            vowelArr.push(idx);
        }
    });
queries.forEach(([start,end])=>{
const temp=vowelArr.reduce((acc,cur)=>{
       if(cur>=start&&cur<=end){
           return acc+1;
       } else{
           return acc
       }
    },0);
    answer.push(temp);
})
    return answer;
};