/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
    const count=piles.length/3;
    piles.sort((a,b)=>b-a);
    let answer=0;
    let temp=0;
    while(temp!==count){
        temp+=1;
        answer+=piles[2*temp-1];
    }
    return answer;
};