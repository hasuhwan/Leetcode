/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function(s, k) {
    while(s.length>k){
        let str="";
        let sum=0;
        let count=0;
        for(let i=0; i<s.length; i++){
            sum+=Number(s[i]);
            count++;
            
            if(count===k){
                str+=sum;
                count=0;
                sum=0;
            }
        }
        if(count!==0){
            str+=sum;
        }
        s=str;
    }
    return s;
};