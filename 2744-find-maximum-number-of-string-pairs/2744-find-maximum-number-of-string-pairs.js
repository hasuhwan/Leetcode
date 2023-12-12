/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
    let answer=0;
    const map=new Map();
    words.forEach(str=>{
        const sort=str[0]>str[1]?str[1]+str[0]:str;
        if(map.has(sort)){
            answer++;
        }else{
            map.set(sort,true);
        }
    });
    return answer;
};