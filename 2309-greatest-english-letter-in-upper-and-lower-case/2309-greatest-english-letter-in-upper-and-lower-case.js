/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function(s) {
    let answer="";
    const map=new Map();
    for(let char of s){
        const upper=char.toUpperCase();
        let bool=false;
        if(upper===char){
            if(map.has(char.toLowerCase())){
                bool=true;
            }
            map.set(char,true);
        }else{
              if(map.has(upper)){
                bool=true;
            }
            map.set(char,true);
        }
        if(bool){
            answer=answer===""?upper:upper>answer?upper:answer;
        }
    }
    return answer;
};