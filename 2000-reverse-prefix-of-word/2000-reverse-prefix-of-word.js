/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    word=word.split("");
    const index=word.indexOf(ch);
    if(index===-1){
        return word.join("");
    }else{
return word.slice(0,index+1).reverse().concat(word.slice(index+1)).join("");
        
    }
};