/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let answer=[];
    for(let i=0; i<index.length; i++){
       
            
        answer=answer.slice(0,index[i]).concat(nums[i],answer.slice(index[i]));
            
   
        
    }
return answer;
};