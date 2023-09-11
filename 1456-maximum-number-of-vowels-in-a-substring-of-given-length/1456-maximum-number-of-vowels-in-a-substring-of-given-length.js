/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let answer=0;
    const vowel=["a","e","i","o","u"];
    const arr=s.split("").map(el=>vowel.includes(el)?1:0);
    let temp=arr.slice(0,k).reduce((acc,cur)=>acc+cur,0);
    answer=temp;
    for(let i=k; i<arr.length; i++){
        temp+=arr[i]-arr[i-k];
        answer=Math.max(answer,temp);
    }
    return answer;
};