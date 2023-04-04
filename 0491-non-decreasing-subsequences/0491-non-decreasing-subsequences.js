/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
    const answer=[];
    function dfs(index,arr){
        if(arr.length>1){
            answer.push([...arr]);
        }
        const visited={};
        for(let i=index+1; i<nums.length; i++){
            if(visited[nums[i]]===true){
                continue;
            }
            if(nums[index]<=nums[i]){
                arr.push(nums[i]);
                dfs(i,arr);
                arr.pop();
                visited[nums[i]]=true;
            }
        }
        
    }
    const visited={};
    for(let i=0; i<nums.length-1; i++){
        if(visited[nums[i]]===true){
            console.log(i);
            continue;
        }
        dfs(i,[nums[i]]);
        visited[nums[i]]=true;
    }
    return answer;
};