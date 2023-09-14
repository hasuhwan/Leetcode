/**
 * @param {number[]} nums
 * @param {number[][]} requests
 * @return {number}
 */
var maxSumRangeQuery = function(nums, requests) {
    let answer=0;
    const countArr=new Array(nums.length+1).fill(0);
    
    requests.forEach(([start,end])=>{
        countArr[start]++;
        countArr[end+1]--;
    });
    for(let i=1; i<countArr.length; i++){
        countArr[i]+=countArr[i-1];
    }
    countArr.sort((a,b)=>b-a);
    nums.sort((a,b)=>b-a).forEach((num,idx)=>{
        answer=(answer+num*countArr[idx])%1000000007;
    })
    return answer;
    
};