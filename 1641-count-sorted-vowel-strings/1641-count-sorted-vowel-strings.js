/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function(n) {
    const vowel=["a","e","i","o","u"];
    let answer=0;
    
    function dfs(str,idx){
        if(str.length===n){
            answer++;
            return;
        }
        for(let i=idx; i<vowel.length; i++){
            dfs(str+vowel[i],i);
        }
    }
    dfs("",0);
    return answer;
};
