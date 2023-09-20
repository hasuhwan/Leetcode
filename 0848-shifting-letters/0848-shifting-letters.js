/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */

var shiftingLetters = function(s, shifts) {
    let total=shifts.reduce((acc,cur)=>acc+cur,0);
    let answer="";
    const codeArr=s.split("").map(el=>el.charCodeAt());
    codeArr.forEach((num,idx)=>{
        
        let temp=(total%26+num);
        if(temp>122){
            temp=96+temp%122;
        }
        console.log(total,num,temp)
        answer+=String.fromCharCode(temp);
        total-=shifts[idx];
    });
    return answer;
};