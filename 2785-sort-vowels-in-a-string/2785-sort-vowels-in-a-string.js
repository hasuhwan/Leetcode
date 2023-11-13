/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    let answer=new Array(s.length).fill("");
    const vowel=["a","e","i","o","u","A","E","I","O","U"];
    const vowelArr=[];
    const vowelIdxArr=[];
    for(let i=0; i<s.length; i++){
        if(vowel.includes(s[i])){
            vowelArr.push(s[i]);
            vowelIdxArr.push(i);
        }else{
            answer[i]=s[i];
        }
    }
    vowelArr.sort();
    vowelIdxArr.forEach((idx,i)=>{
        answer[idx]=vowelArr[i];
    });
    return answer.join("");
};