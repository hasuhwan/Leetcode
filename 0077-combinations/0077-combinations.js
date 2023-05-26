/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const arr=Array.from({length:n},(_,idx)=>idx+1);
    const answer=[];
    function dfs(tempArr,idx){
        if(tempArr.length===k){
            answer.push([...tempArr]);
            return;
        }
        for(let i=idx; i<arr.length; i++){
            tempArr.push(arr[i]);
            dfs(tempArr,i+1);
            tempArr.pop();
        }
    }
    for(let i=0; i<arr.length; i++){
        const tempArr=[arr[i]];
        dfs(tempArr,i+1);
    }
    return answer;
};