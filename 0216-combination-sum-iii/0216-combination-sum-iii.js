/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const answer=[];
    function dfs(idx,sum,depth,arr){
        if(depth>k||sum>n){
            return;
        }
        if(sum===n&&depth===k){
            answer.push([...arr]);
            return;
        }
        for(let i=idx+1; i<=9; i++){
            arr.push(i);
            dfs(i,sum+i,depth+1,arr);
            arr.pop();
        }
    }
    dfs(0,0,0,[]);
    return answer;
};