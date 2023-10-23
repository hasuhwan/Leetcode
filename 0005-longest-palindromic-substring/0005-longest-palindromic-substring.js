/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const len=s.length;
    let answer="";
    const dp=new Array(len).fill(0).map((_,idx)=>new Array(len+1-idx).fill(false));
    for(let i=0; i<len; i++){
        dp[i][1]=true;
        answer=s[i];
    }
    for(let i=0; i<len-1; i++){
        if(s[i]===s[i+1]){
            dp[i][2]=true;
            answer=s[i].repeat(2);
        }
    }
    for(let i=2; i<len; i++){
        for(let j=0; j<len-i; j++){
            if(s[j]===s[j+i]&&dp[j+1][i-1]){
                dp[j][i+1]=true;
                answer=s.slice(j,j+i+1);
            }
        }
    }
    return answer;
};