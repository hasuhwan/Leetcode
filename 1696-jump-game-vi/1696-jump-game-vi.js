/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxResult = function(nums, k) {
    const len=nums.length;
    const dp=new Array(len).fill(0);
    dp[0]=nums[0];
    const dq=[0];
    
    for(let i=1; i<len; i++){
        let score=nums[i];
        
        if(dq.length!==0&&i-k>dq[0]){
            dq.shift();
        }
        score+=dp[dq[0]];
        dp[i]=score;
        while(dq.length!==0&&dp[dq[dq.length-1]]<score){
            dq.pop();
        }
        dq.push(i);
    }
    return dp[len-1];
};

