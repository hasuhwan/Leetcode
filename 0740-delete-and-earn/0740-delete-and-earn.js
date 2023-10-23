/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    
     
    let answer=0;
    const map=new Map();
    const setArr=[];
    nums.forEach(num=>{
        if(map.has(num)){
            map.set(num,map.get(num)+1);
        }else{
            map.set(num,1);
            setArr.push(num);
        }
    });
    setArr.sort((a,b)=>a-b);
    const dp=new Array(setArr.length).fill(0);
    dp[0]=setArr[0]*map.get(setArr[0]);
    if(dp.length===1){
        return dp[0];
    }
    if(setArr[1]===setArr[0]+1){
        dp[1]=Math.max(dp[0],setArr[1]*map.get(setArr[1]));
    }else{
        dp[1]=dp[0]+setArr[1]*map.get(setArr[1]);
    }
    for(let i=2; i<setArr.length; i++){
        const temp=setArr[i]*map.get(setArr[i]);
        if(setArr[i-1]+1===setArr[i]){
            dp[i]=Math.max(dp[i-1],dp[i-2]+temp);
        }else{
            dp[i]=dp[i-1]+temp;
        }
    }
    return dp[dp.length-1];
};