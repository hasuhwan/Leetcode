/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    const answer=[];
    const map=new Map();
    potions.sort((a,b)=>b-a);
    spells.forEach((el)=>{
        if(map.has(el)){
            answer.push(map.get(el));
        }else{
            const target=Math.ceil(success/el);
            const temp=search(target);
            map.set(el,temp);
            answer.push(temp);
        }
    })
    
    function search(target){
    let res = 0;
    let left = 0;
    let right = potions.length-1;
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        if(potions[mid] < target){
            right = mid - 1;
        }else{
            left = mid + 1;
            res = mid + 1;
        }
    }

    return res;
}
    return answer;
};