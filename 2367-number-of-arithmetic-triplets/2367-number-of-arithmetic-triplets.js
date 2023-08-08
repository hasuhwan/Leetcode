/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
    let answer=0;
    const arr=new Array(201).fill(false);
    nums.forEach(num=>{
        arr[num]=true;
    })
    for(let i=0; i<nums.length-2; i++){
        const temp=nums[i];
        if(arr[temp+diff]&&arr[temp+2*diff]){
            answer++;
        }
    }
    return answer;
};