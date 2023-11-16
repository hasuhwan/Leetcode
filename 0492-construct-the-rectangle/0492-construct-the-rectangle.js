/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    for(let i=parseInt(Math.sqrt(area,2)); i>0; i--){
        if(area%i===0){
            return [area/i,i];
        }
    }
};