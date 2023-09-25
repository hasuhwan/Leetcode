/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    s=s.replace(/ /g,"");
    const pairObj=pair(s);
    function recur(str,start,end){
        let sum=0;
        let operation=1;
        let idx=start;
        while(idx<end){
            if(str[idx]==="+"){
                operation=1;
            }else if(str[idx]==="-"){
                operation=-1;
            }else if(!isNaN(str[idx])){
                let num="";
                while(!isNaN(str[idx])&&idx<str.length){
                    num+=str[idx];
                    idx++;
                }
                idx--;
                sum+=operation*Number(num);
            }else if(str[idx]==="("){

                const result=recur(str,idx+1,pairObj[idx]);
                idx=pairObj[idx];
                sum+=operation*result;
            }
            idx++;
        }
        
        return sum;
    }
    return recur(s,0,s.length);
    
    
};
function pair(s){
    const obj={};
    const stack=[];
    for(let i=0; i<s.length; i++){
        if(s[i]==="("){
            stack.push(i);
        }else if(s[i]===")"){
            obj[stack.pop()]=i;
        }
    }
    return obj;
}