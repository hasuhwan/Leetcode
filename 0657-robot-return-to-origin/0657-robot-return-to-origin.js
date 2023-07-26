/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    const val=[0,0]
    
    for(let i=0; i<moves.length; i++){
        if(moves[i]==="U"){
            val[0]++;
        }else if(moves[i]==="D"){
            val[0]--;
        }else if(moves[i]==="R"){
            val[1]++;
        }else{
            val[1]--;
        }
    }
    
return val.every(el=>el===0);
};