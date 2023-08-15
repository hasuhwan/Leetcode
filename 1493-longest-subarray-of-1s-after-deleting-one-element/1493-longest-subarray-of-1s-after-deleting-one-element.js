/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    if(nums.every(el=>el===1)){
        return nums.length-1;
    }
    let answer=0;
    const oneArr=[];
    let count=0;
    nums.forEach(el=>{
        if(el===1){
            count++;
        }else{
            oneArr.push(count);
            count=0;
        }
    });
    oneArr.push(count);
    for(let i=0; i<oneArr.length-1; i++){
        answer=Math.max(answer,oneArr[i]+oneArr[i+1]);
    }
    return answer;
};