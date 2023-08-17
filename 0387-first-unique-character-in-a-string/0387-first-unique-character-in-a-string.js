/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const obj={};
    for(let i=0; i<s.length; i++){
        obj[s[i]]=(obj[s[i]]||0)+1;
    }
    const arr=Object.entries(obj);
    for(let i=0; i<arr.length; i++){
        const [al,val]=arr[i];
        if(val===1){
            return s.indexOf(al);
        }
    };
    return -1;
};