/**
 * @param {number} n
 * @return {number}
 */
var monotoneIncreasingDigits = function(n) {
    const str=String(n).split("").map(el=>Number(el));
    if(str.length===1){
        return Number(str);
    }
    let standard=str.length;
    for(let i=str.length-1; i>0; i--){
      if(str[i]<str[i-1]){
            str[i-1]-=1;
          standard=i;
        }
    }
    for(i=standard; i<str.length; i++){
        str[i]=9;
    }
    
    return Number(str.join(""))
};