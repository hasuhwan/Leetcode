/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const answer=[];
    const arr=strs.sort().map(el=>[el,el.split("").sort().join("")]);
    const obj={};
    arr.forEach(el=>{
        const [one,standard]=el;
        obj[standard]=obj[standard]?obj[standard].concat(one):[one];
    });
for(let key in obj){
    answer.push(obj[key]);
}
    return answer.sort((a,b)=>a.length-b.length);
};