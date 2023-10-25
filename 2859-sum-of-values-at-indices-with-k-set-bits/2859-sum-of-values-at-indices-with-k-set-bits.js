/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function(nums, k) {
    let answer=0;
    for(let i=0; i<nums.length; i++){
        const temp=i.toString(2);
        let count=0;
        for(let j=0; j<temp.length; j++){
            if(temp[j]==="1"){
                count++;
            }
            if(count>k){
                break;
            }
        }
        if(count===k){
            answer+=nums[i];
        }
    }
    return answer;
};