/**
 * @param {number[]} nums
 * @return {number}
 */
var maximizeGreatness = function(nums) {
    const sort=nums.sort((a,b)=>a-b);
    let index=0;
    let answer=0;
    for(let i=0; i<nums.length; i++){
        while(index<nums.length){
            if(sort[index]>nums[i]){
                answer++;
                index++;
                break;
            }
            index++;
        }
        if(index===nums.length){
            return answer;
        }
    }
    return answer;
};