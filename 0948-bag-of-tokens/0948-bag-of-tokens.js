/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function(tokens, power) {
    let max=0;
    let temp=0;
    tokens.sort((a,b)=>a-b);
    let left=0;
    let right=tokens.length-1;
    
    while(left<=right){
        const l=tokens[left];
        const r=tokens[right];
        if(power>=l&&temp>=0){
            power-=l;
            temp++;
            max=Math.max(max,temp);
            left++;
        }else if(power<r&&temp>0){
            power+=r;
            temp--;
            right--;
        }else{
            break;
        }
    }
    return max;
};