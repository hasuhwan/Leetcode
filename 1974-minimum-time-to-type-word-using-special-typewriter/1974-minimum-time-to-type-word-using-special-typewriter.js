/**
 * @param {string} word
 * @return {number}
 */
var minTimeToType = function(word) {
    let answer=0;
    const arr=[];
    for(let i=97; i<=122; i++){
        arr.push(String.fromCharCode(i));
    }
    let pointer=0;
    
    for(let i=0; i<word.length; i++){
        const idx=arr.indexOf(word[i]);
        const left=pointer>=idx?pointer-idx:pointer+arr.length-idx;
        const right=pointer<=idx?idx-pointer:idx+arr.length-pointer;
        answer+=Math.min(left,right)+1;
        pointer=idx;
    }
    return answer;
};