/**
 * @param {number[]} nums
 * @param {number[]} divisors
 * @return {number}
 */
var maxDivScore = function(nums, divisors) {
    let answer=0;
    let max=-1;
    divisors.forEach((el,idx)=>{
        let cur=0;
        nums.forEach((num)=>{
            if(num%el===0){
                cur++;
            }
        });
        if(max<cur){
            max=cur;
            answer=el;
        }else if(max===cur){
            answer=Math.min(answer,el);
        }
    });
    return answer;
};