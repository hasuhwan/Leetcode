/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let answer=0;
    const map=new Map();
    const str=String(num);
    for(let i=0; i<str.length; i++){
        if(map.has(str[i])){
            answer++;
        }else{
            if(num%str[i]===0){
                answer++;
                map.set(str[i],true);
            }
        }
    }
    return answer;
};