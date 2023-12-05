/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
    const dp=new Array(days[days.length-1]+1).fill(0);
    days.forEach(day=>{
        dp[day]=1;
    });
    const [one,seven,thirty]=costs;
    for(let i=1; i<dp.length; i++){
        if(dp[i]){
            dp[i]=Math.min(one+dp[i-1],seven+dp[Math.max(0,i-7)],thirty+dp[Math.max(0,i-30)]);
        }else{
            dp[i]=dp[i-1];
        }
    }
    return dp[dp.length-1];
};