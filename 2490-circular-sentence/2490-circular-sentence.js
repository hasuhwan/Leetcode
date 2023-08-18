/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function(sentence) {
    const arr=sentence.split(" ");
    let start=arr[0][arr[0].length-1];
    const circle=arr.slice(1).concat(arr.slice(0,1));
    for(let i=0; i<circle.length; i++){
        if(circle[i][0]!==start){
            return false;
        }
        start=circle[i][circle[i].length-1];
    }
    
    return true;
};