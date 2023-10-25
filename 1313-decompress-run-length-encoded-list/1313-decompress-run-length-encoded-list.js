/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let answer=[];
    for(let i=0; i<nums.length; i+=2){
        const [freq,val]=[nums[i],nums[i+1]];
        const add=new Array(nums[i]).fill(nums[i+1]);
        answer=answer.concat(add);
    }
    return answer;
};