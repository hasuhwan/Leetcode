/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function(time) {
    const answer=time.split("");
    if(answer[0]==="?"){
        if(Number(answer[1])<4||answer[1]==="?"){
            answer[0]="2"
        }else{
            answer[0]="1"
        }
    }
    if(answer[1]==="?"){
        if(answer[0]==="2"){
            answer[1]="3"
        }else{
            answer[1]="9"
        }
    }
    answer[3]=answer[3]==="?"?"5":answer[3];
    answer[4]=answer[4]==="?"?"9":answer[4];
    return answer.join("");
};