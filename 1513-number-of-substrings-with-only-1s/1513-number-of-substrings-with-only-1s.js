/**
 * @param {string} s
 * @return {number}
 */
var numSub = function(s) {
    const mod=Math.pow(10,9)+7;
    let answer=0;
    let prev="";
    let count=1;
    for(let i=0; i<s.length; i++){
        const temp=s[i];
        if(s[i]==="1"&&prev===temp){
            count++;
        }else{
            count=1;
        }
        prev=temp;
        if(temp==="1"){
            answer=(answer+count)%mod;
        }
        
    }
    return answer;
};