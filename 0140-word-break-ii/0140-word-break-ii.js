/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    const answer=[];
    function dfs(strArr){
        const temp=strArr.join("");
        if(temp.length>=s.length){
            if(temp===s){
                answer.push(strArr.join(" "));
            }
            return;
        }
        for(let i=0; i<wordDict.length; i++){
            strArr.push(wordDict[i])
            dfs(strArr);
            strArr.pop();
        }
    }
    dfs([]);
    return answer;
};