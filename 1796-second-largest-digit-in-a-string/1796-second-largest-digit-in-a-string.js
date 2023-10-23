/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
const arr=[...new Set(s.replace(/[^\d]/g,"").split("").map(el=>Number(el)).sort((a,b)=>b-a))];
    console.log(arr)
    return arr[1]!==undefined?arr[1]:-1;

};