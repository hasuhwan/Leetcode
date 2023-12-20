/**
 * @param {string} word
 * @return {number}
 */
var countVowelSubstrings = function(word) {
    let answer=0;
    const map=new Map();
    const isVowel=(char)=>{
        return (char==="a")||(char==="e")||(char==="i")||(char==="o")||(char==="u");
    }
    for(let i=0; i<=word.length-5; i++){
        map.clear();
        for(let j=i; j<word.length && isVowel(word[j]); j++){
            map.set(word[j],(map.get(word[j])||0)+1);
            if(map.size===5){
                answer++;
            }
        }
    }
    return answer;
};