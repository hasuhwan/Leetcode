/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    return names.map((el,idx)=>[el,heights[idx]]).sort((a,b)=>b[1]-a[1]).map(el=>el[0]);
};