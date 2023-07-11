/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
return     sentences.map(el=>{
        return el.split(" ");
    }).sort((a,b)=>b.length-a.length)[0].length;
};