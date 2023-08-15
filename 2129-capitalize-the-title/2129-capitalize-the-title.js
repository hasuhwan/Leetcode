/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    return title.toLowerCase().split(" ").map(str=>{
        const len=str.length;
        if(len===1||len===2){
            return str;
        }else{
            return str[0].toUpperCase()+str.slice(1);
        }
    }).join(" ");
};