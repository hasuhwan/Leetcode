/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    const answer=[];
    const countMap=new Map();
    const answerMap=new Map();
    nums.forEach(num=>{
        if(countMap.has(num)){
            countMap.set(num,countMap.get(num)+1);
        }else{
            countMap.set(num,1);
        }
        const temp=countMap.get(num);
        if(temp>2){
            if(answerMap.has(num)){
                answerMap.delete(num);
            }
        }else if(temp===2){
            answerMap.set(num,1);
        }
    })
for(let key of answerMap.keys()){
    answer.push(key);
}
    return answer;
};