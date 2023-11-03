/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    const set=new Set();
    const answer=new Set();
    for(let i=0; i<s.length-9; i++){
        const str=s.slice(i,i+10);
        if(set.has(str)){
            answer.add(str);
        }else{
            set.add(str);
        }
    }
    return [...answer];
};