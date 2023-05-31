/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    costs.sort((a,b)=>a-b);
    let answer=0;
    let temp=0;
    for(let i=0; i<costs.length; i++){
        if(temp+costs[i]>coins){
            return answer;
        }else{
            answer++;
            temp+=costs[i];
        }
    }
    return answer;
};