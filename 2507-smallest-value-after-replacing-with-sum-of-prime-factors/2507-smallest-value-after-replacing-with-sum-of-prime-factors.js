/**
 * @param {number} n
 * @return {number}
 */
//소수인지 판단해야함.
var smallestValue = function(n) {
    function isPrime(num){
        for(let i=2; i<=Math.floor(Math.sqrt(num)); i++){
            if(num%i===0){
                return i;
            }
        }
        return 0;
    }
    function dfs(num){
        const temp=isPrime(num);
        if(temp){
            return temp+dfs(num/temp);
        }else{
            return num;
        }
    }
    let temp=n;
    while(temp){
        const res=dfs(temp);
        if(temp===res){
            return temp;
        }
        temp=res;
    }
return temp;
    
};