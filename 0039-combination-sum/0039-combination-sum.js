/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const answer=[];
    const visited=[];
    
    function dfs(arr,sum,idx){
        
        if(sum>target){
            return;
        }
        if(sum===target){
            const temp=[...arr].sort((a,b)=>a-b).join("");
            if(!visited.includes(temp)){
                visited.push(temp);
                answer.push([...arr]);
            }
            return;
        }
        for(let i=idx; i<candidates.length; i++){
            arr.push(candidates[i]);
            dfs(arr,sum+candidates[i],idx);
            arr.pop();
        }
    }
    
    for(let i=0; i<candidates.length; i++){
        dfs([candidates[i]],candidates[i],i);
    }
    return answer;
};