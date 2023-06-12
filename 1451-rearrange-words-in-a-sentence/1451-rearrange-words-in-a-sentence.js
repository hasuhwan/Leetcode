/**
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function(text) {
    let answer="";
    let arr=text.toLowerCase().split(" ");
    arr=arr.sort((a,b)=>a.length-b.length).join(" ");
    return arr[0].toUpperCase()+arr.slice(1);
    
};