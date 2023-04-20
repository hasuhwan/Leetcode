/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
let left=0;
    let right=numbers.length-1;
    
    while(left<right){
        const temp=numbers[left]+numbers[right]
        if(temp>target){
            right--;
        }else if(temp<target){
            left++;
        }else{
            return [left+1,right+1];
        }
    }
};