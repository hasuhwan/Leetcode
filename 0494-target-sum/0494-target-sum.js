/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    let answer=0;
    
    function dfs(num,idx){
        const temp=nums[idx];
        if(temp===undefined){
            if(num===target){
                answer++;
            }
            return;
        }
        dfs(num+temp,idx+1);
        dfs(num-temp,idx+1);
    }
    dfs(nums[0],1);
    dfs(-nums[0],1);
    return answer;
};