/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */
var haveConflict = function(event1, event2) {
    function min(arr){
        return arr.map(el=>{
            const [h,m]=el.split(":");
            return parseInt(h)*60+parseInt(m);
        })
    }
    const one=min(event1);
    const two=min(event2);
    if((one[0]<=two[0] &&one[1]>=two[0])||(one[0]<=two[1] &&one[1]>=two[1])){
        return true;
    }
    if((one[0]>=two[0] &&one[0]<=two[1])||(one[1]>=two[0] &&one[1]<=two[1])){
        return true;
    }
    return false;
};