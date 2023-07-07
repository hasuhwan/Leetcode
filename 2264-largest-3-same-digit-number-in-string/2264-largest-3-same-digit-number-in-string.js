/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let answer="";
    let count=1;
    for(let i=1; i<num.length; i++){
        if(num[i]===num[i-1]){
            count++;
        }else{
            count=1;
        }
        if(count===3){
            const temp=num[i].repeat(3)
            if(Number(answer)<Number(temp)||answer===""){
                answer=temp;
            }
            count=1;
        }
    }
    return answer;
};