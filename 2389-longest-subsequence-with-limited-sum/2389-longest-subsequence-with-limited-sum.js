/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {
    const answer=[];
    nums.sort((a,b)=>a-b);
    const sumArr=new Array(nums.length+1).fill(0);
    nums.forEach((el,idx)=>{
        sumArr[idx+1]=sumArr[idx]+el;
    });
    queries.forEach(el=>{
        const temp=search(el);
        answer.push(temp);
    });
    function search(target){
        let left=0;
        let right=sumArr.length-1;
        while(left<right){
            let mid=Math.ceil((left+right)/2);
            if(sumArr[mid]>target){
                right=mid-1;
            }else{
                left=mid;
            }
        }
        return left;
    }
    return answer;
};
