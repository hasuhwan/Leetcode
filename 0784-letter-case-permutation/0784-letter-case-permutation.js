/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
    const answer=[];
    function dfs(str,idx){
        if(str.length===s.length){
            answer.push(str);
            return;
        }
        if(!isNaN(s[idx])){
            dfs(str+s[idx],idx+1);
        }else{
            dfs(str+s[idx].toLowerCase(),idx+1);
            dfs(str+s[idx].toUpperCase(),idx+1);
        }
    }
    dfs("",0);
    return answer;
};