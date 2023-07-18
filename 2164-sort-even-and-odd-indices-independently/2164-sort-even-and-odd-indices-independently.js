/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function(nums) {
    const odd=[];
    const even=[];
    nums.forEach((num,idx)=>{
        if(idx%2!==0){
            odd.push(num);
        }else{
            even.push(num);
        }
    });
    const answer=[];
    even.sort((a,b)=>a-b);
    odd.sort((a,b)=>b-a);
    for(let i=0; i<nums.length; i++){
        if(i%2===0){
            answer.push(even.shift());
        }else{
            answer.push(odd.shift());
        }
    }
    return answer;
};