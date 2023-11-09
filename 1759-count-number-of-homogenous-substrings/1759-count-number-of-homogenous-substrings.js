/**
 * @param {string} s
 * @return {number}
 */
var countHomogenous = function(s) {
    const mod=Math.pow(10,9)+7;
    let answer=0;
    let count=1;
    let prev="";
    for(let i=0; i<s.length; i++){
        const temp=s[i];
        if(temp===prev){
            count++;
        }else{
            count=1;
        }
        prev=temp;
        answer=(answer+count)%mod;
    }
    return answer;
};