/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {

    function changeFunc(str){
        let res="";
        for(let w in str){
            res+=str[w].charCodeAt()-97;
        }
        return parseInt(res);
    }
    const first=changeFunc(firstWord);
    const second=changeFunc(secondWord);
    const target=changeFunc(targetWord);
    return target===first+second;
};