/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    const answer=[];
    const odd=[];
    const even=[];
    nums.forEach((el)=>{
        if(el%2===0){
            even.push(el);
        }else{
            odd.push(el);
        }
    });
    for(let i=0; i<even.length; i++){
        answer.push(even[i]);
        answer.push(odd[i]);
    };
    return answer;
};