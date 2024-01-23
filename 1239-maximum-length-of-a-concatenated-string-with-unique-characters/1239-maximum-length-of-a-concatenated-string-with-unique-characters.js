/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
    let answer=0;
    function dfs(cur,idx){
        answer=Math.max(answer,cur.length);
        
        for(let i=idx; i<arr.length; i++){
            const add=cur+arr[i];
            if(add.length===new Set([...add]).size){
                dfs(add,i+1);
            }
        }
    }
    dfs("",0);
    return answer;
        
};