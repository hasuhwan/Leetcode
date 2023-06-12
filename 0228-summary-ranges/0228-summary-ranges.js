/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
if(nums.length===0){
    return [];
}
    const answer=[];
let temp=[nums[0]];
    function push(arr){
        if(arr.length>=2){
                answer.push(`${arr[0]}->${arr[arr.length-1]}`);
                
            }else{
                answer.push(String(arr[0]));
            }
            
    }
    for(let i=1; i<nums.length; i++){
        if(temp[temp.length-1]+1===nums[i]){
            temp.push(nums[i]);
        }else{
            push(temp);
            temp=[nums[i]];
        }
    }
    push(temp);
    return answer;
    
};