/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
var sortJumbled = function(mapping, nums) {
    return nums.map(el=>{
        let str="";
        const temp=String(el);
        for(let i=0; i<temp.length; i++){
            str+=mapping[temp[i]];
        }
        return [el,Number(str)];
    }).sort((a,b)=>a[1]-b[1]).map(el=>el[0]);
};