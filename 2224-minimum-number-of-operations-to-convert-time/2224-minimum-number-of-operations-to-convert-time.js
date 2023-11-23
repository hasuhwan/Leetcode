/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
var convertTime = function(current, correct) {
    let answer=0;
    const div=[60,15,5,1];
    function convert(time){
        const [h,m]=time.split(":").map(el=>Number(el));
        return h*60+m;
    }
    let diff=convert(correct)-convert(current);
    for(let i=0; i<div.length; i++){
        const curr=div[i];
        if(diff%curr===0){
            answer+=diff/curr;
            return answer;;
        }
        answer+=Math.floor(diff/curr);
        diff=diff%curr;
    }
};