/**
 * @param {number[]} nums
 * @param {number[]} numsDivide
 * @return {number}
 */
var minOperations = function(nums, numsDivide) {
    function gcd(a,b){
        if(b>a){
            [a,b]=[b,a];
        }
        while(b>0){
              [a,b]=[b,a%b];
              };
        return a;
    }
    let devide=gcd(numsDivide[0],numsDivide[1]);
    for(let i=2; i<numsDivide.length; i++){
        devide=gcd(numsDivide[i],devide);
    }
    nums.sort((a,b)=>a-b);
      const temp=[];
    if(devide!==1){
        for(let i=1; i<=devide/2; i++){
        if(devide/i===i){
            temp.push(i);
            break;
        }
        if(devide%i===0){
            temp.push(i);
            temp.push(devide/i);
        }
    }
    }else{
        temp.push(devide);
    }
  
    
    temp.sort((a,b)=>a-b);
    console.log(temp)
    for(let i=0; i<temp.length; i++){
        const idx=nums.indexOf(temp[i]);
        if(idx!==-1){
            return idx;
        }
    }
    return -1;
};