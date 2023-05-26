/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let answer=0;
    let str="";
    for(let i=0; i<s.length; i++){
        const index=str.indexOf(s[i]);
        if(index!==-1){
            answer=Math.max(answer,str.length);
            str=str.slice(index+1)+s[i];
        }else{
            str+=s[i];
        }
    }
  answer=Math.max(answer,str.length);
    return answer;
};