/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
    let answer=0;
    const diffArr=[];
    for(let i=1; i<nums.length; i++){
        diffArr.push(nums[i]-nums[i-1]);
    }
    for(let i=0; i<diffArr.length-1; i++){
        for(let j=i+1; j<diffArr.length; j++){
            if(diffArr[i]!==diffArr[j]){
                break;
            }
            answer++;
        }
    }
    return answer;
};