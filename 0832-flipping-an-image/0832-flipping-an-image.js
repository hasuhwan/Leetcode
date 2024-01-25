/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    return image.map((arr)=>{
        return arr.reverse().map(num=>{
            return Math.abs(num-1);
        })
    });
};