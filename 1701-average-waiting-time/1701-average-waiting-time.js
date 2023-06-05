/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function(customers) {
    const answer=[];
    let time=customers[0][0];
    customers.forEach(([ari,acc])=>{
        if(time<ari){
            time=ari+acc;
        }else{
            time+=acc;
        }
        
        answer.push(time-ari);
    })
    console.log(answer);
    
    return answer.reduce((acc,cur)=>acc+cur,0)/customers.length;
};