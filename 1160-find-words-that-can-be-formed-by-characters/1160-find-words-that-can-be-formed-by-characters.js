/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let answer=0;
    const obj={};
    for(let i=0; i<chars.length; i++){
        obj[chars[i]]=(obj[chars[i]]||0)+1;
    }
    words.forEach(str=>{
        const copy={...obj};
        let bool=true;
        for(let i=0; i<str.length; i++){
            if(copy[str[i]]===undefined || copy[str[i]]===0){
                bool=false;
                break;
            }else{
                copy[str[i]]--;
            }
        }
        if(bool){
           answer+=str.length; 
        }
    });
    return answer;
};