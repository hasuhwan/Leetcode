/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function(date) {
    const month=["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const split=date.split(" ").reverse();
    split[1]=String(month.indexOf(split[1])+1).padStart(2,"0");
    split[2]=split[2].slice(0,split[2].length-2).padStart(2,"0");
    return split.join("-");
    
};