/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    let nextAdd=0;
    let idx=num.length-1;
    
    while(k!==0||nextAdd!==0){
        const mod=k%10;
        if(idx>=0){
            num[idx]=num[idx]+nextAdd+mod;
        nextAdd=num[idx]>9?1:0;
        num[idx]=num[idx]%10;
        idx--;
        }else{
            const add=mod+nextAdd;
            nextAdd=add>9?1:0;
            num.unshift(add%10);
        }
        k=Math.floor(k/10);
    }
    return num;
};