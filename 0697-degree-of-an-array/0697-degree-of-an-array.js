/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    const map=new Map();
    let max=0;
    nums.forEach((num,idx)=>{
        if(!map.has(num)){
            map.set(num,{count:0,index:[]});
        }
        const temp=map.get(num);
        temp.count+=1;
        temp.index.push(idx);
        max=Math.max(max,temp.count);
    });
    let answer=50000;
    for(let {count,index} of map.values()){
        if(count===max){
            answer=Math.min(answer,index[index.length-1]-index[0]+1);
        }
    }
    return answer;
};