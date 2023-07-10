/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
    licensePlate=licensePlate.toLowerCase();
    const regexp=new RegExp(/[a-z]/,"gi");
    const target=licensePlate.match(regexp);
    const obj={};
    target.forEach(el=>{
        obj[el]=obj[el]?obj[el]+1:1;
    });
    const keyLen=Object.keys(obj).length;
    words.sort((a,b)=>a.length-b.length);
    for(let i=0; i<words.length; i++){
        const temp={...obj};
        let count=0;
        for(let j=0; j<words[i].length; j++){
            if(temp[words[i][j]]){
                temp[words[i][j]]--;
                if(temp[words[i][j]]===0){
                    count++;
                }
            }
        }
        if(count===keyLen){
            return words[i];
        }
    }
    
};