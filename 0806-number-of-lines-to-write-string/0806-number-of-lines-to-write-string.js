/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function(widths, s) {
    let answer=1;
    let pixels=0;
    for(let i=0; i<s.length; i++){
        const tempPixel=widths[s[i].charCodeAt()-97];
        if(pixels+tempPixel>100){
            answer++;
            pixels=tempPixel;
        }else{
            pixels+=tempPixel;
        }
    }
    return [answer,pixels===0?100:pixels];
};