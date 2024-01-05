/**
 * @param {number} num
 * @return {number[]}
 */
var closestDivisors = function(num) {
    let answer=[0,Infinity];
    let abs=Infinity;
    
    for(let i=1; i<=2; i++){
        let curr=num+i;
        for(let i=Math.floor(Math.sqrt(curr,2)); i>0; i--){
            if(curr%i===0){
                const diff=Math.abs(i-curr/i);
                if(abs>diff){
                    abs=diff;
                    answer=[i,curr/i];
                }
                break;
            }
        }
    }
    return answer;
};