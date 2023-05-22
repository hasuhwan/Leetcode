/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let answer="";
    
    function countFunc(str,depth){
        if(depth===n){
            answer=str;
            return; 
        }
        let pre=str[0];
        let count=1;
        let nextStr="";
        for(let i=1; i<str.length; i++){
            if(pre===str[i]){
                count++;
            }else{
                nextStr+=count+pre;
                pre=str[i];
                count=1;
            }
        }
        nextStr+=count+pre;
     countFunc(nextStr,depth+1);
    }
    countFunc("1",1);
    return answer;
};