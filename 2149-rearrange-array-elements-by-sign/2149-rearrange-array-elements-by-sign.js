/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    const answer=[];
    const one=[];
    const two=[];
    nums.forEach(num=>{
        if(num<0){
            two.push(num);
        }else{
            one.push(num);
        }
    })
    for(let i=0; i<one.length; i++){
        answer.push(one[i]);
        answer.push(two[i]);
    }
    return answer;
};