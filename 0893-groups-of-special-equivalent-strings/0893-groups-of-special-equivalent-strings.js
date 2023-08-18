/**
 * @param {string[]} words
 * @return {number}
 */
var numSpecialEquivGroups = function(words) {
    const obj={};
    let answer=0;
    words.forEach(str=>{
        const even=[];
        const odd=[];
        for(let i=0; i<str.length; i++){
            if(i%2===0){
                even.push(str[i]);
            }else{
                odd.push(str[i]);
            }
        }
        even.sort();
        odd.sort();
        let idx=0;
        let temp="";
        while(idx<even.length ||idx<odd.length){
            const tempEven=even[idx]||"";
            const tempOdd=odd[idx]||"";
            temp+=tempEven+tempOdd;
            idx++;
        };
        if(!obj[temp]){
            obj[temp]=1;
            answer++;
        }
    });
    return answer;
};