/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
    const regexp=new RegExp(/\d{1,}/,"g");
    const temp=s.match(regexp).map(el=>parseInt(el));
    for(let i=1; i<temp.length; i++){
        if(temp[i]<=temp[i-1]){
            return false;
        }
    }
    return true;
};