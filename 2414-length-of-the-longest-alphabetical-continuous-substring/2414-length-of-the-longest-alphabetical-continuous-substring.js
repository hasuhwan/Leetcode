/**
 * @param {string} s
 * @return {number}
 */
var longestContinuousSubstring = function(s) {
    let answer=0;
    const set=new Set();
    let str=s[0]
    for(let i=1; i<s.length; i++){
        if(s[i].charCodeAt()===s[i-1].charCodeAt()+1){
            str+=s[i];
        }else{
            answer=Math.max(answer,str.length);
        str=s[i];
        }
        
    }
    answer=Math.max(answer,str.length);
    return answer;
};