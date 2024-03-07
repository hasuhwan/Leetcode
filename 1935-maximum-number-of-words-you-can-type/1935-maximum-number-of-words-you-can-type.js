/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    const arr=text.split(" ");
    const map=new Map();
    for(let char of brokenLetters){
        map.set(char,1);
    }
    const n=arr.length;
    let brokenStr=0;
    arr.forEach(str=>{
        for(let char of str){
            if(map.has(char)){
                brokenStr++;
                return;
            }
        }
    });
    return n-brokenStr;
};