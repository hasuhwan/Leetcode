/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
    let repeat=1;
    const vowels=["a","e","i","o","u","A","E","I","O","U"];
    return sentence.split(" ").map(str=>{
        if(vowels.includes(str[0])){
            return str+"ma"+"a".repeat(repeat++);
        }
        return str.slice(1)+str.slice(0,1)+"ma"+"a".repeat(repeat++);
    }).join(" ");
    
    
};