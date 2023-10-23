/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const len=s.length;
    const dp=new Array(len+1).fill(false);
    dp[0]=true;
    for(let i=0; i<len; i++){
        if(dp[i]===true){
            wordDict.forEach(word=>{
                if(s.slice(i,i+word.length)===word){
                    dp[i+word.length]=true;
                }
            })
        }
    }
    return dp[dp.length-1];
};