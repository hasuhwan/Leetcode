/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findLonely = function(nums) {
    const answer=[];
    const map=new Map();
    nums.forEach(num=>{
        if(map.has(num)){
            map.set(num,map.get(num)+1);
        }else{
            map.set(num,1);
        }
    })
    for(let num of map){
const [temp,count]=num;
if(count===1&&!map.has(temp+1)&&!map.has(temp-1)){
    answer.push(temp);
}
    }
    return answer;
};