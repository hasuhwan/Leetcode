/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    const answer=[];
    const map=new Map();
    nums.forEach(el=>{
        if(map.has(el)){
            map.set(el,map.get(el)+1);
        }else{
            map.set(el,1);
        }
    });
    while(map.size!==0){
        const temp=[];
        for(let val of map){
            const [key,va]=val;
            temp.push(key);
            map.set(key,va-1);
            if(va===1){
                map.delete(key);
            }
        }
        answer.push(temp);
    }        
    return answer;
};