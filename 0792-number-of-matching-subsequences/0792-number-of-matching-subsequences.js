/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(s, words) {
    let answer=0;
    words.forEach((el)=>{
        let i=0;
        let j=0;
        while(i<el.length &&j<s.length){
            if(el[i]===s[j]){
                i++;
                j++;
            }else{
                j++;
            }
        }
        if(i===el.length){
            answer++;
        }
    })
    return answer;
};