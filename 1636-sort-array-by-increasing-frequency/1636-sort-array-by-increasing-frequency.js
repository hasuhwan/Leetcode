/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    const obj={};
    nums.forEach(el=>{
        if(obj[el]){
            obj[el]++;
        }else{
            obj[el]=1;
        }
    });
    const arr=Object.entries(obj).sort((a,b)=>{
        if(a[1]===b[1]){
            return Number(b[0])-Number(a[0]);
        }else{
            return a[1]-b[1];
        }
    });
    let answer=[];
    
    arr.forEach(el=>{
        const temp=new Array(el[1]).fill(el[0]);
        answer=answer.concat(temp);
    });
    return answer;
};