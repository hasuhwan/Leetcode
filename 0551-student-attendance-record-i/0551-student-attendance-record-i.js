/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let a=0;
    let l=0;
    for(let i=0; i<s.length; i++){
       if(s[i]==="L"){
            l++;
            if(l===3){
                return false;
            }
        }else{
            if(s[i]==="A"){
            a++;
            if(a===2){
                return false;
            }
            }
            l=0;
        }
    }
    return true;
};