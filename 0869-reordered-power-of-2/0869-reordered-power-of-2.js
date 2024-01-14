/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function(n) {
    const arr=[];
    const str=String(n);
    function dfs(temp,visited){
        if(temp.length===str.length){
            if(temp[0]!=="0"){
                arr.push(Number(temp));
            }
            return;
        }
        for(let i=0; i<str.length; i++){
            if(!visited[i]){
                visited[i]=true;
                dfs(temp+str[i],visited);
                visited[i]=false;
            }
        }
    }
    dfs("",new Array(str.length).fill(false));
    console.log(arr);
    return arr.some(num=>{
        while(num!==1){
        if(num%2!==0){
            return false;
        }
        num=num/2;
    }
    return true;
    });
    
};