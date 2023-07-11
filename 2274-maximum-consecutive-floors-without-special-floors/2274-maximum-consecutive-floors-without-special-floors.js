/**
 * @param {number} bottom
 * @param {number} top
 * @param {number[]} special
 * @return {number}
 */
var maxConsecutive = function(bottom, top, special) {
    let answer=0;
    special.sort((a,b)=>a-b);
    let idx=0;
    let count=0;
    for(let i=bottom; i<=top; i++){
        if(special[idx]){
            const val=special[idx]-i;
        i=special[idx];
            idx++;
        answer=Math.max(answer,val);
        }else{
            return answer=Math.max(answer,top-special[special.length-1]);
        }
        
    }

    return answer;
};