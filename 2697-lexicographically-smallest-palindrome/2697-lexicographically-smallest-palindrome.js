/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function(s) {
    const answer=s.split("");
    const len=s.length-1;
    for(let i=0; i<s.length/2; i++){
        const back=len-i;
       
        if(s[i]<s[back]){
            answer[back]=answer[i];
        }else if(s[i]>s[back]){
            answer[i]=answer[back];
        }
    }
    return answer.join("");
};