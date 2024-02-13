/**
 * @param {string} s
 * @return {number}
 */
//dp?
var countSubstrings = function(s) {
    const dp=new Array(s.length).fill().map((_,idx)=>new Array(s.length-idx+1).fill(false));
    dp.forEach(arr=>{
        arr[1]=true;
    });
    for(let i=0; i<s.length-1; i++){
        if(s[i]===s[i+1]){
            dp[i][2]=true;
        }
    }
    for(let i=2; i<s.length; i++){
        for(let j=0; j<s.length-i; j++){
            if(s[j]===s[j+i]&&dp[j+1][i-1]===true){
                dp[j][i+1]=true;
            }
        }
    }
    console.log(dp);
    return dp.flat().reduce((acc,cur)=>{
       if(cur===true){
           return acc+1;
       } 
        return acc;
    },0)
};