/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    const map=new Map();
    groupSizes.forEach((el,idx)=>{
        if(map.has(el)){
            map.get(el).push(idx);
        }else{
            map.set(el,[idx]);
        }
    });
    const answer=[];
    for(let val of map){
        const [size,arr]=val;
        for(let i=0; i<arr.length/size; i++){
            const temp=arr.slice(i*size,(i+1)*size);
            answer.push(temp);
        }
    }
    return answer;
    
};