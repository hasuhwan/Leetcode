/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function(words, left, right) {
    words=words.slice(left,right+1);
    const map=new Map();
    ["a","e","i","o","u"].forEach(al=>{
        map.set(al,true);
    })
    let answer=0;
    words.forEach(str=>{
        if(map.get(str[0])&&map.get(str[str.length-1])){
            answer++;
        }
    });
    return answer;
};