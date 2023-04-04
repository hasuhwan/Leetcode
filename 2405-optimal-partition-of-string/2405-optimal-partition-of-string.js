/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
    const answer=[];
    let temp=s[0];
    for(let i=1; i<s.length; i++){
        if(temp.includes(s[i])){
            answer.push(temp);
            temp=s[i];      
        }else{
            temp+=s[i];
        }
    }
answer.push(temp);
    return answer.length;
    
};