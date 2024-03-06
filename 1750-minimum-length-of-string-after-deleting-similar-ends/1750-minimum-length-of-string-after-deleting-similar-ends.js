/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    let l=0;
    let r=s.length-1;
    while(l<r){
        if(s[l]===s[r]){
            while(l<r&&s[l]===s[l+1]){
                l++;
            }
            while(l<r&&s[r]===s[r-1]){
                r--;
            }
            l++;
            r--;
        }else{
            return r-l+1;
        }
    }
    if(l===r){
        return 1;
    }
    return 0;
};