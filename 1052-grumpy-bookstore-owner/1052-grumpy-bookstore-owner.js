/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, minutes) {
    const initial=customers.reduce((acc,cur,idx)=>{
        if(grumpy[idx]===0){
            return acc+cur;
        }else{
            return acc;
        }
    },0);
    if(customers.length<=minutes){
        return customers.reduce((acc,cur)=>acc+cur,0);
    };
    let curr=initial;
    let max=initial;
    for(let i=0; i<customers.length; i++){
        if(i-minutes>=0&&grumpy[i-minutes]){
            curr-=customers[i-minutes];
        }
        if(grumpy[i]){
            curr+=customers[i];
        }
        max=Math.max(max,curr);
    }
    
    
    return max;
};