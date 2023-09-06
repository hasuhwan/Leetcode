/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function(n) {
    let answer=Infinity;
    function dfs(num,count){
        if(num===1){
            answer=Math.min(answer,count);
            return;
        }
        if(num%2===0){
            dfs(num/2,count+1);
        }else{
            dfs(num+1,count+1);
            dfs(num-1,count+1);
        }
    }
    dfs(n,0);
    return answer;
};