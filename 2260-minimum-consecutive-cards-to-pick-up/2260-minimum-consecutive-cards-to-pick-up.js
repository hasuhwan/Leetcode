/**
 * @param {number[]} cards
 * @return {number}
 */
var minimumCardPickup = function(cards) {
    if(cards.length===new Set(cards).size){
        return -1;
    }
    let answer=Infinity;
    const obj={};
    cards.forEach((el,idx)=>{
        if(obj[el]){
            obj[el].push(idx);
        }else{
            obj[el]=[idx];
        }
    });
    Object.values(obj).map((arr)=>{
        if(arr.length===1){
            return;
        }
        for(let i=1; i<arr.length; i++){
         answer=Math.min(answer,arr[i]-arr[i-1]+1);   
        }
    });
    return answer;
    
};