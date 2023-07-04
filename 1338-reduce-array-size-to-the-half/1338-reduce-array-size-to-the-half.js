/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
    let size=arr.length;
    const initial=arr.length/2;
    const map=new Map();
    arr.forEach(el=>{
        if(map.has(el)){
            map.set(el,map.get(el)+1);
        }else{
            map.set(el,1);
        }
    });
    let answer=0;
    const countArr=[...map].sort((a,b)=>b[1]-a[1]);
    for(let [num,count] of countArr){
        size-=count;
        answer++;
        if(size<=initial){
            return answer;
        }
    }
    
};