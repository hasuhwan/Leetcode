/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
    const regexp=new RegExp(`^${searchWord}`);
    const arr=sentence.split(" ");
    for(let i=0; i<arr.length; i++){
        if(regexp.test(arr[i])){
            return i+1;
        }
    }
    
    return -1;
};