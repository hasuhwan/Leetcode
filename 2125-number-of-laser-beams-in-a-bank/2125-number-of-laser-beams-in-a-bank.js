/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
    let answer=0;
    const countArr=bank.filter(el=>el.includes("1")).map((arr)=>{
        let count=0;
        for(let i=0; i<arr.length; i++){
            if(arr[i]==="1"){
                count++;
            }
        }
        return count;
    });
    for(let i=1; i<countArr.length; i++){
        answer+=countArr[i-1]*countArr[i];
    }
    return answer;
};