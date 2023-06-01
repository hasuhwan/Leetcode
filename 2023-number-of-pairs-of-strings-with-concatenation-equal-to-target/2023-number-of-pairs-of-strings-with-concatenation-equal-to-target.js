/**
 * @param {string[]} nums
 * @param {string} target
 * @return {number}
 */
var numOfPairs = function(nums, target) {
    let answer=0;
    function dfs(str,depth,visited){
        if(depth===2){
            if(str===target){
                answer++;
            }
            return;
        }
        for(let i=0; i<nums.length; i++){
            if(!visited.includes(i)){
                visited.push(i);
                dfs(str+nums[i],depth+1,visited);
                visited.pop();
            }
        }
    }
    dfs("",0,[]);
    return answer;
};