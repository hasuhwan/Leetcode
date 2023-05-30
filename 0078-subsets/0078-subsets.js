/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const answer=[[]];
    function dfs(arr,idx){
        answer.push([...arr]);
        for(let i=idx; i<nums.length; i++){
            arr.push(nums[i]);
            dfs(arr,i+1);
            arr.pop();
        }
        
    }
    
    for(let i=0; i<nums.length; i++){
        dfs([nums[i]],i+1);
    }
    return answer;
};